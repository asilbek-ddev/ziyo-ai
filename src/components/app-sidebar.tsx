"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Image, Plus, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const HeaderSidebarItem = [
  {
    title: "New chat",
    icon: <Plus className="size-5" />,
    href: "/",
  },
  {
    title: "Search chats",
    icon: <Search className="size-5" />,
    href: "#search",
  },
  {
    title: "Images",
    icon: <Image className="size-5" />,
    href: "/images",
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  return (
    <Sidebar
      collapsible="icon"
      className="border-r border-neutral-800 bg-linear-to-b from-neutral-950 to-black"
    >
      <SidebarHeader className="p-2 text-lg flex items-centerx font-semibold">
        <SidebarTrigger className="cursor-pointer size-8" />
      </SidebarHeader>

      <SidebarContent className="mt-2 px-2 gap-y-1">
        {HeaderSidebarItem.map((item) => {
          const { href, icon, title } = item;
          return (
            <SidebarMenuButton
              key={title.toLowerCase().split(" ").join("")}
              asChild
              tooltip={isCollapsed ? title : undefined}
              className={`flex items-center ${isCollapsed ? "justify-center" : "justify-start"} list-none text-sm hover:bg-black/30 rounded-lg px-2.5 py-2 transition-colors duration-300 cursor-pointer`}
            >
              <Link href={href} className="flex items-center gap-2 text-sm">
                {icon}
                {!isCollapsed && <span>{title}</span>}
              </Link>
            </SidebarMenuButton>
          );
        })}

        {isCollapsed ? (
          <></>
        ) : (
          <>
            <div className="mt-6 text-xs text-neutral-400 px-2">Your chats</div>
            <SidebarMenuItem className="list-none text-sm hover:bg-black/30 rounded-lg px-2.5 py-2 transition-colors duration-300 cursor-pointer">
              Heloo
            </SidebarMenuItem>
          </>
        )}
      </SidebarContent>

      <SidebarFooter className="border-t p-0">
        <Button
          className="h-13 flex items-center justify-baseline rounded-none w-full gap-0 p-2.5 cursor-pointer"
        >
          <div className="h-7 w-7 rounded-full bg-green-600 flex items-center justify-center">
            AE
          </div>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
