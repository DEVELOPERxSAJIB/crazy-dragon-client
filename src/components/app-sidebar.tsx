"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { FaDragon } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbCategoryPlus } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { RiSecurePaymentLine } from "react-icons/ri";


// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Crazy Dragon",
      logo: FaDragon,
      plan: "Food & Order Management",
    },
  ],
  navMain: [
    {
      title: "Orders",
      url: "#",
      icon: CiDeliveryTruck,
      items: [
        {
          title: "Pending Orders",
          url: "#",
        },
        {
          title: "Completed Orders",
          url: "#",
        },
        {
          title: "Rejected Orders",
          url: "#",
        },
      ],
    },
    {
      title: "Categoies",
      url: "#",
      icon: TbCategoryPlus,
      items: [
        {
          title: "All Category",
          url: "#",
        },
        {
          title: "Create New",
          url: "#",
        },
      ],
    },
    {
      title: "Foods",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Our Foods",
          url: "#",
        },
        {
          title: "Create Food",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Our Users",
      url: "#",
      icon: FiUsers,
    },
    {
      name: "Payments",
      url: "#",
      icon: RiSecurePaymentLine,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
