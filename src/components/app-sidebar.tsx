"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Images, PackagePlus, Plus, Search } from "lucide-react";
import Link from "next/link";

const HeaderSidebarItem = [
  {
    title: "New chat",
    icon: <Plus className="size-5" />,
    href: "/",
  },
  {
    title: "Search chats",
    icon: <Search className="size-5" />,
    href: "/search",
  },
  {
    title: "Images",
    icon: <Images className="size-5" />,
    href: "/images",
  },
  {
    title: "Projects",
    icon: <PackagePlus className="size-5" />,
    href: "/projects",
  },
];

export function AppSidebar() {
  return (
    <Sidebar
      collapsible="icon"
      className="border-r border-neutral-800 bg-linear-to-b from-neutral-950 to-black"
    >
      <SidebarHeader className="p-2.5 text-lg flex items-centerx font-semibold">
        Ziyo-AI
      </SidebarHeader>

      <SidebarContent className=" px-2.5 gap-y-1">
        {HeaderSidebarItem.map((item) => {
          const { href, icon, title } = item;
          return (
            <SidebarMenuItem
              key={title.toLowerCase().split(" ").join("")}
              className="flex items-center list-none text-sm hover:bg-black/30 rounded-lg px-2.5 py-2 transition-colors duration-300 cursor-pointer"
            >
              <Link href={href} className="flex items-center gap-2.5">
                {icon}
                <span>{title}</span>
              </Link>
            </SidebarMenuItem>
          );
        })}

        <div className="mt-6 text-xs text-neutral-400 px-2">Your chats</div>
        <SidebarMenuItem className="list-none text-sm hover:bg-black/30 rounded-lg px-2.5 py-2 transition-colors duration-300 cursor-pointer">
          Heloo
        </SidebarMenuItem>
      </SidebarContent>

      <SidebarFooter className="p-2.5 border-t border-neutral-800">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center text-sm">
            AE
          </div>
          <div className="text-sm">
            <div>Asilbek</div>
            <div className="text-xs text-neutral-400">Free</div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
