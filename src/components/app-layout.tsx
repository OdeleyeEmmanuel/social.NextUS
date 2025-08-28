"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Sparkles,
  Home,
  MessageSquare,
  BarChart,
  User,
  Settings,
  BotMessageSquare,
  Video,
  GraduationCap,
  Store,
} from "lucide-react"

const menuItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/recommendations", label: "For You", icon: BotMessageSquare },
  { href: "/watch", label: "Watch", icon: Video },
  { href: "/courses", label: "Courses", icon: GraduationCap },
  { href: "/marketplace", label: "Marketplace", icon: Store },
  { href: "/chat", label: "Chat", icon: MessageSquare },
  { href: "/profile", label: "Profile", icon: User },
  { href: "/admin", label: "Admin", icon: BarChart },
];

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <Button variant="ghost" asChild className="w-full justify-start text-base font-bold">
            <Link href="/">
              <Sparkles className="mr-2 h-5 w-5 text-primary" />
              Social Spark
            </Link>
          </Button>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname.startsWith(item.href) && (item.href !== '/' || pathname === '/')}
                  className={cn(
                    "w-full justify-start",
                    pathname.startsWith(item.href) && (item.href !== '/' || pathname === '/') && "bg-accent text-accent-foreground"
                  )}
                >
                  <Link href={item.href}>
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <Separator className="my-2" />
           <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="w-full justify-start">
                  <Link href="#">
                    <Settings className="mr-3 h-5 w-5" />
                    Settings
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  )
}
