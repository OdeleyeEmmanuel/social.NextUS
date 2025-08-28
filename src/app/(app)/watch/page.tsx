import { Header } from "@/components/header";
import { WatchLayout } from "@/components/watch/watch-layout";
import { Video } from "lucide-react";

export default function WatchPage() {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <Header title="Watch" Icon={Video} />
      <main className="flex-1 overflow-hidden">
        <WatchLayout />
      </main>
    </div>
  );
}
