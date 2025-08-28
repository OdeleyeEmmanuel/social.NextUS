import type { LucideIcon } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { UserButton } from "@/components/user-button";

interface HeaderProps {
  title: string;
  Icon: LucideIcon;
}

export function Header({ title, Icon }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
      <div className="flex items-center gap-2">
         <SidebarTrigger className="md:hidden" />
         <div className="flex items-center gap-3">
            <Icon className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {title}
            </h1>
         </div>
      </div>
      <UserButton />
    </header>
  );
}
