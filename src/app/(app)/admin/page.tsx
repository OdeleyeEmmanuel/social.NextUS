import { Header } from "@/components/header";
import { StatCard } from "@/components/admin/stat-card";
import { UsageChart } from "@/components/admin/usage-chart";
import { BarChart, Clock, MessageSquare, Pencil } from "lucide-react";

export default function AdminPage() {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <Header title="Admin Dashboard" Icon={BarChart} />
      <main className="flex-1 overflow-auto p-4 md:p-6">
        <div className="space-y-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title="Time Spent (last 30d)"
              value="12,450h"
              description="+20.1% from last month"
              Icon={Clock}
            />
            <StatCard
              title="Total Posts"
              value="2,350"
              description="+180 this month"
              Icon={Pencil}
            />
            <StatCard
              title="Total Comments"
              value="15,890"
              description="+1.2k this month"
              Icon={MessageSquare}
            />
            <StatCard
              title="Active Users"
              value="+573"
              description="+21 since last hour"
              Icon={BarChart}
            />
          </div>
          <UsageChart />
        </div>
      </main>
    </div>
  );
}
