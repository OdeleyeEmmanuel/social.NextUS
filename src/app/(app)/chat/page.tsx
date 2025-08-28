import { Header } from "@/components/header";
import { ChatLayout } from "@/components/chat/chat-layout";
import { MessageSquare } from "lucide-react";

export default function ChatPage() {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <Header title="Chat" Icon={MessageSquare} />
      <main className="flex-1 overflow-hidden">
        <ChatLayout />
      </main>
    </div>
  );
}
