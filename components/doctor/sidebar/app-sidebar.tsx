import * as React from "react";
import {
  BriefcaseMedical,
  Calendar,
  DollarSign,
  GalleryVerticalEnd,
  LayoutDashboard,
  Pill,
  Users,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";
import Link from "next/link";

const data = {
  navMain: [
    {
      title: "Overview",
      icon: <LayoutDashboard />,
      items: [
        {
          title: "Dashboard",
          href: "/protected/doctor/dashboard",
        },
      ],
    },
    {
      title: "Patients",
      icon: <Users />,
      items: [
        {
          title: "All Patients",
          href: "/protected/doctor/patients",
        },
        // {
        //   title: "Patient Records",
        //   href: "/protected/doctor/patients/records",
        // },
      ],
    },
    {
      title: "Appointments",
      icon: <Calendar />,
      items: [
        {
          title: "List View",
          href: "/protected/doctor/appointments/",
        },
      ],
    },
    {
      title: "Prescriptions",
      icon: <Pill />,
      items: [
        {
          title: "All Prescriptions",
          href: "/protected/doctor/prescriptions",
        },
        {
          title: "New Prescription",
          href: "/protected/doctor/prescriptions/new",
        },
        // {
        //   title: "Medication History",
        //   href: "/protected/doctor/prescriptions/history",
        // },
      ],
    },
    {
      title: "Billing",
      icon: <DollarSign />,
      items: [
        {
          title: "Invoices",
          href: "/protected/doctor/billing/invoices",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <BriefcaseMedical className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Doctor Dashboard</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link href="#" className="font-medium">
                    {item.icon}
                    {item.title}
                  </Link>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={false}>
                          <a href={item.href}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser/>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
