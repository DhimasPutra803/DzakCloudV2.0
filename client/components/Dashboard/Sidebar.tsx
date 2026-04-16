import { Link, useLocation } from "react-router-dom";
import { LogOut, Settings, Bell } from "lucide-react";

export function DashboardSidebar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed left-0 top-20 h-screen w-64 bg-gradient-to-b from-slate-800 to-slate-900 border-r border-slate-700 p-6 hidden lg:flex flex-col">
      <nav className="space-y-2 flex-1">
        {/* Navigation Items */}
      </nav>

      {/* Bottom Actions */}
      <div className="space-y-2 border-t border-slate-700 pt-4">
        <button className="w-full flex items-center gap-3 px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors duration-300">
          <Bell className="w-5 h-5" />
          <span>Notifikasi</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors duration-300">
          <Settings className="w-5 h-5" />
          <span>Pengaturan</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors duration-300">
          <LogOut className="w-5 h-5" />
          <span>Keluar</span>
        </button>
      </div>
    </div>
  );
}
