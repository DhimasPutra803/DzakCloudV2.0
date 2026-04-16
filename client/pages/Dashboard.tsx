import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { useTheme } from "@/contexts/ThemeContext";
import { DashboardSidebar } from "@/components/Dashboard/Sidebar";
import { ProfileCard } from "@/components/Dashboard/ProfileCard";
import { StatsCard } from "@/components/Dashboard/StatsCard";
import { ActivityLog } from "@/components/Dashboard/ActivityLog";
import { PaymentHistory } from "@/components/Dashboard/PaymentHistory";
import { FeedbackForm } from "@/components/Dashboard/FeedbackForm";
import { OrderHistory } from "@/components/Dashboard/OrderHistory";
import { Spending } from "@/components/Dashboard/Spending";
import { DashboardResponse } from "@shared/api";
import { Activity, BarChart3, CreditCard, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { apiRequest } from "@/lib/api";

const FALLBACK_DASHBOARD: DashboardResponse = {
  profile: {
    id: '1',
    name: 'Demo User',
    email: 'demo@example.com',
    phone: '082-1234-5678',
    company: 'PT. Contoh Perusahaan',
    package: 'VPS Pro',
    joinDate: new Date().toISOString().split('T')[0],
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
    status: 'active',
  },
  activities: [
    {
      id: '1',
      type: 'login',
      title: 'Login ke Dashboard',
      description: 'Anda berhasil login ke dashboard',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      status: 'success',
    },
    {
      id: '2',
      type: 'payment',
      title: 'Pembayaran Paket',
      description: 'Pembayaran paket VPS Pro berhasil diproses',
      timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      status: 'success',
    },
  ],
  payments: [
    {
      id: '1',
      date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      amount: 50000,
      amountLabel: 'Rp 50,000',
      package: 'VPS Pro',
      status: 'paid',
      invoiceId: 'INV-2024-001',
    },
  ],
  stats: {
    activeServices: 3,
    totalSpent: 'Rp 1.500.000',
    uptime: '99.95%',
  },
};

export default function Dashboard() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [dashboardData, setDashboardData] = useState<DashboardResponse | null>(
    FALLBACK_DASHBOARD
  );
  const [activeTab, setActiveTab] = useState<
    "overview" | "activity" | "payments" | "feedback"
  >("overview");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiRequest("/dashboard")
      .then((data) => {
        setDashboardData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.warn('Failed to fetch dashboard, using fallback data:', error);
        setDashboardData(FALLBACK_DASHBOARD);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className={cn(
        "min-h-screen flex items-center justify-center transition-colors",
        isDark
          ? "bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"
          : "bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"
      )}>
        <div className="text-center">
          <div className="w-12 h-12 rounded-full border-4 border-t-blue-500 animate-spin mx-auto mb-4 border-slate-600"></div>
          <p className="text-white">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div className={cn(
        "min-h-screen flex items-center justify-center transition-colors",
        isDark
          ? "bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"
          : "bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"
      )}>
        <p className="text-white">Error loading dashboard</p>
      </div>
    );
  }

  return (
    <div className={cn(
      "min-h-screen relative overflow-hidden transition-colors",
      isDark
        ? "bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"
        : "bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"
    )}>
      {/* Wave background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className={cn("absolute top-0 left-0 w-full h-96", isDark ? "opacity-20" : "opacity-10")}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="url(#grad1)"
          />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity={isDark ? "0.3" : "0.15"} />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Navigation />

      <div className="pt-24 pb-20 px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 text-white">
              Dashboard
            </h1>
            <p className="text-slate-400">
              Selamat datang kembali, {dashboardData.profile.name}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatsCard
                  icon={<Activity className="w-5 h-5" />}
                  label="Layanan Aktif"
                  value={dashboardData.stats.activeServices.toString()}
                  color="blue"
                />
                <StatsCard
                  icon={<CreditCard className="w-5 h-5" />}
                  label="Total Dihabiskan"
                  value={dashboardData.stats.totalSpent}
                  color="green"
                />
                <StatsCard
                  icon={<BarChart3 className="w-5 h-5" />}
                  label="Uptime"
                  value={dashboardData.stats.uptime}
                  color="purple"
                />
              </div>

              {/* Tab Navigation */}
              <div className={cn(
                "flex gap-2 rounded-lg p-1 border transition-colors",
                "bg-slate-800/40 border-slate-700"
              )}>
                {[
                  { id: "overview", label: "Overview", icon: "📊" },
                  { id: "activity", label: "Aktivitas", icon: "📝" },
                  { id: "payments", label: "Pembayaran", icon: "💳" },
                  { id: "feedback", label: "Feedback", icon: "💬" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() =>
                      setActiveTab(
                        tab.id as
                          | "overview"
                          | "activity"
                          | "payments"
                          | "feedback"
                      )
                    }
                    className={cn(
                      "flex-1 px-4 py-2 rounded-md font-medium transition-all duration-300",
                      activeTab === tab.id
                        ? "bg-blue-600 text-white"
                        : "text-slate-300 hover:text-white"
                    )}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Content based on active tab */}
              {activeTab === "overview" && (
                <div className="space-y-6">
                  <ActivityLog activities={dashboardData.activities.slice(0, 5)} />
                  <OrderHistory />
                  <Spending />
                </div>
              )}
              {activeTab === "activity" && (
                <ActivityLog activities={dashboardData.activities} />
              )}
              {activeTab === "payments" && (
                <PaymentHistory payments={dashboardData.payments} />
              )}
              {activeTab === "feedback" && <FeedbackForm />}
            </div>

            {/* Sidebar - Profile */}
            <div className="lg:col-span-1">
              <ProfileCard profile={dashboardData.profile} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
