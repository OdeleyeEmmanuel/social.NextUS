import { Header } from "@/components/header";
import { RecommendationClient } from "@/components/recommendations/recommendation-client";
import { BotMessageSquare } from "lucide-react";

export default function RecommendationsPage() {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <Header title="For You" Icon={BotMessageSquare} />
      <main className="flex-1 overflow-auto p-4 md:p-6">
        <RecommendationClient />
      </main>
    </div>
  );
}
