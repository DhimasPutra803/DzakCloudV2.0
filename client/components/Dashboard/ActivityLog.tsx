import { Activity } from "@shared/api";
import { CheckCircle, Clock, AlertCircle } from "lucide-react";

interface ActivityLogProps {
  activities: Activity[];
}

export function ActivityLog({ activities }: ActivityLogProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return (
          <CheckCircle className="w-5 h-5 text-green-400" />
        );
      case "pending":
        return (
          <Clock className="w-5 h-5 text-yellow-400" />
        );
      case "failed":
        return (
          <AlertCircle className="w-5 h-5 text-red-400" />
        );
      default:
        return null;
    }
  };

  const getActivityTypeIcon = (type: string) => {
    const iconMap: Record<string, string> = {
      upgrade: "⬆️",
      payment: "💳",
      deployment: "🚀",
      maintenance: "🔧",
      support: "📞",
      security: "🔒",
    };
    return iconMap[type] || "📌";
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-xl p-6 hover:border-slate-500 transition-all duration-300">
      <h2 className="text-xl font-bold text-white mb-6">Riwayat Aktivitas</h2>

      <div className="space-y-4">
        {activities.length > 0 ? (
          activities.map((activity, idx) => (
            <div
              key={activity.id}
              className={`flex gap-4 p-4 bg-slate-700/50 rounded-lg border border-slate-600 hover:border-slate-500 transition-all duration-300 ${
                idx !== activities.length - 1 ? "border-b" : ""
              }`}
            >
              {/* Timeline indicator */}
              <div className="flex flex-col items-center">
                <div className="text-2xl">{getActivityTypeIcon(activity.type)}</div>
                {idx !== activities.length - 1 && (
                  <div className="w-0.5 h-12 bg-gradient-to-b from-slate-600 to-transparent mt-2"></div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-white font-semibold text-sm sm:text-base">
                    {activity.title}
                  </h3>
                  <div className="flex-shrink-0">
                    {getStatusIcon(activity.status)}
                  </div>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm mb-2">
                  {activity.description}
                </p>
                <p className="text-slate-500 text-xs">{activity.timestamp}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-slate-400">Tidak ada aktivitas terbaru</p>
          </div>
        )}
      </div>
    </div>
  );
}
