"use client";

import { AppSidebar } from "@/components/doctor/sidebar/app-sidebar";
import { ThemeSwitcher } from "@/components/theme-switcher";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

// Define the shape of our breadcrumb items
interface BreadcrumbItem {
  title: string;
  href: string;
}

export default function DoctorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const paths = pathname.split("/").filter((path) => path !== "protected");
    let currentPath = "";
    

    return paths.map((path) => {
      currentPath += `/${path}`;
      return {
        title: path.charAt(0).toUpperCase() + path.slice(1),
        href: currentPath,
      };
    });
  };

  const breadcrumbItems = generateBreadcrumbs();

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 pe-5 border-b">
          <div className="flex items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumbItems.map((item, index) => (
                  <BreadcrumbItem key={item.href}>
                    <BreadcrumbLink href={item.href}>
                      {item.title}
                    </BreadcrumbLink>
                    {(index < breadcrumbItems.length - 1 && index != 0) && (
                      <ChevronRight orientation="vertical" className="mx-2 h-4" />
                    )}
                  </BreadcrumbItem>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <ThemeSwitcher />
        </header>
        <main className="flex-1 overflow-y-auto">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
