"use client";
import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./dock.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { DockThemeSwitcher } from "./dock-theme-switcher";

type DockItem = {
  label: string;
  icon: React.ReactNode;
  href: string;
};

type DockProps = {
  items: DockItem[];
  position?: "top" | "bottom" | "left" | "right";
  collapsible?: boolean;
  responsive?: "top" | "bottom" | "left" | "right";
};

const Dock = ({
  items,
  position = "bottom",
  collapsible = false,
  responsive = "bottom",
}: DockProps) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isDockVisible, setDockVisible] = useState(!collapsible);
  const [currentPosition, setCurrentPosition] = useState(position);

  const pathname = usePathname();

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const handleParentMouseEnter = () => {
    if (collapsible) {
      setDockVisible(true);
    }
  };

  const handleParentMouseLeave = () => {
    if (collapsible) {
      setDockVisible(false);
    }
  };

  useEffect(() => {
    const updatePosition = () => {
      if (responsive && window.innerWidth <= 768) {
        setCurrentPosition(responsive);
      } else {
        setCurrentPosition(position);
      }
    };

    updatePosition();

    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [position, responsive, collapsible]);

  const getDockStyle = (): React.CSSProperties => {
    const flexDirection =
      currentPosition === "left" || currentPosition === "right"
        ? "column"
        : "row";
    return { flexDirection };
  };

  const scaleSpring = (index: number) => {
    const translateValue = (() => {
      if (hoverIndex === index) {
        switch (currentPosition) {
          case "left":
            return "translateX(5px) translateY(0px)";
          case "right":
            return "translateX(-5px) translateY(0px)";
          case "top":
            return "translateX(0px) translateY(5px)";
          case "bottom":
            return "translateX(0px) translateY(-5px)";
          default:
            return "translateX(0px) translateY(0px)";
        }
      } else {
        return "translateX(0px) translateY(0px)";
      }
    })();

    return useSpring({
      transform:
        hoverIndex === index
          ? `scale(1.5) ${translateValue}`
          : hoverIndex !== null && Math.abs(hoverIndex - index) === 1
            ? `scale(1.3) translateX(0px) translateY(0px)`
            : `scale(1) translateX(0px) translateY(0px)`,
      config: { tension: 200, friction: 15 },
    });
  };

  const visibilitySpring = useSpring({
    opacity: isDockVisible ? 1 : 0,
    config: { tension: 120, friction: 14 },
  });

  return (
    <div
      className={`dock-container z-10 ${currentPosition}`}
      onMouseEnter={handleParentMouseEnter}
      onMouseLeave={handleParentMouseLeave}
    >
      <animated.div
        className="dock"
        style={{
          ...visibilitySpring,
          flexDirection: getDockStyle().flexDirection,
        }}
      >
        {items.map((item, index) => (
          <animated.div
            key={item.label}
            className={cn(
              "dock-item",
              pathname === item.href && "!bg-primary text-white"
            )}
            style={scaleSpring(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Link href={item.href}>{item.icon}</Link>
          </animated.div>
        ))}
        <animated.div
          key="theme-switcher"
          className="dock-item"
          style={scaleSpring(items.length)}
          onMouseEnter={() => handleMouseEnter(items.length)}
          onMouseLeave={handleMouseLeave}
        >
          <DockThemeSwitcher />
        </animated.div>
      </animated.div>
    </div>
  );
};

export default Dock;
