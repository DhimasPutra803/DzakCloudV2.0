import { ReactNode } from "react";

interface StatsCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  color: "blue" | "green" | "purple";
}

export function StatsCard({ icon, label, value, color }: StatsCardProps) {
  const colorStyles = {
    blue: "bg-blue-500/20 border-blue-500/30 text-blue-400",
    green: "bg-green-500/20 border-green-500/30 text-green-400",
    purple: "bg-purple-500/20 border-purple-500/30 text-purple-400",
  };

  return (
    <div
      className={`${colorStyles[color]} border rounded-xl p-6 transition-all duration-300 hover:shadow-lg`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className={`p-2 rounded-lg bg-${color}-500/10 border border-${color}-500/30`}>
          {icon}
        </div>
      </div>
      <p className="text-slate-400 text-sm mb-1">{label}</p>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
}
