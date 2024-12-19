"use client";

import { signOutAction } from "@/app/actions";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { motion, useAnimationControls } from "framer-motion";

import { useEffect, useState } from "react";
import { TPatientInfo } from "@/types/patient";

export const svgVariants = {
  close: {
    rotate: 360,
  },
  open: {
    rotate: 180,
  },
};

type UserDropdownProps = {
  user: TPatientInfo;
};

const UserDropdown = ({ user }: UserDropdownProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const svgControls = useAnimationControls();

  useEffect(() => {
    if (isCollapsed) {
      svgControls.start("open");
    } else {
      svgControls.start("close");
    }
  }, [isCollapsed, svgControls]);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <DropdownMenu open={isCollapsed}>
      <DropdownMenuTrigger onMouseOver={() => handleCollapse()} asChild>
        <div className="flex cursor-pointer items-center gap-3">
          <Avatar>
            <AvatarImage
              loading="lazy"
              className="h-10 w-10"
              src={user.image_url || ""}
              width={200}
              height={200}
            />
            <AvatarFallback>
              <img
                src="https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18ya0dDVXZtTnVYMEpDaGRCa0RhcEZSNjFUdW8iLCJyaWQiOiJ1c2VyXzJrWWlyd0dwZ2REZHUwVGZuSUU1bjlZendqaiIsImluaXRpYWxzIjoiQUgifQ"
                alt="fallback avatar"
                width={200}
                height={200}
                className="h-full w-full"
              />
            </AvatarFallback>
          </Avatar>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
            variants={svgVariants}
            animate={svgControls}
            initial="close"
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.747129 0.997129C1.07663 0.667624 1.61087 0.667624 1.94037 0.997129L5 4.05676L8.05963 0.99713C8.38913 0.667625 8.92337 0.667625 9.25287 0.99713C9.58238 1.32664 9.58238 1.86087 9.25287 2.19037L5.59662 5.84662C5.26712 6.17613 4.73288 6.17613 4.40338 5.84662L0.747129 2.19037C0.417624 1.86087 0.417624 1.32663 0.747129 0.997129Z"
              fill="#71717A"
            />
          </motion.svg>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onMouseLeave={() => handleCollapse()}
        className="w-56 border bg-white shadow-lg dark:border-white/5 dark:bg-white/10"
        align="end"
        forceMount
      >
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-2">
            <p className="text-sm font-medium leading-none">
              {user.first_name || "N/A"}
            </p>
            <p className="text-sm leading-none text-muted-foreground">
              mohamedaziz@gmail.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-neutral-200 dark:bg-white/20" />
        <DropdownMenuGroup>
          <a href="/protected/patient/profile">
            <DropdownMenuItem className="text-sm font-medium text-neutral-800 hover:bg-muted dark:text-white dark:hover:bg-white/10">
              Profile
            </DropdownMenuItem>
          </a>
          <a href="/protected/patient/profile">
            <DropdownMenuItem className="text-sm font-medium text-neutral-800 hover:bg-muted dark:text-white dark:hover:bg-white/10">
              Settings
            </DropdownMenuItem>
          </a>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="h-[0.5px] bg-neutral-200 dark:bg-white/20" />
        <DropdownMenuItem
          onClick={signOutAction}
          //   disabled={isLoggingOut}
          className="text-sm font-medium text-neutral-800 hover:bg-muted dark:text-white dark:hover:bg-white/10"
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
