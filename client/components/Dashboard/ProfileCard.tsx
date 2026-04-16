import { UserProfile } from "@shared/api";
import { Edit, Copy, Check } from "lucide-react";
import { useState } from "react";

interface ProfileCardProps {
  profile: UserProfile;
}

export function ProfileCard({ profile }: ProfileCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      case "inactive":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "suspended":
        return "bg-red-500/20 text-red-300 border-red-500/30";
      default:
        return "bg-slate-500/20 text-slate-300 border-slate-500/30";
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-xl p-6 space-y-6 hover:border-slate-500 transition-all duration-300 sticky top-24">
      {/* Avatar Section */}
      <div className="text-center">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-blue-500"
        />
        <h3 className="text-xl font-bold text-white">{profile.name}</h3>
        <p className="text-sm text-slate-400 mb-3">{profile.company}</p>

        {/* Status Badge */}
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
            profile.status
          )}`}
        >
          {profile.status === "active"
            ? "🟢 Aktif"
            : profile.status === "inactive"
              ? "🟡 Tidak Aktif"
              : "🔴 Tergantung"}
        </span>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>

      {/* Information */}
      <div className="space-y-4">
        <div>
          <p className="text-xs text-slate-400 mb-1">EMAIL</p>
          <div className="flex items-center justify-between">
            <p className="text-sm text-white font-medium break-all pr-2">
              {profile.email}
            </p>
            <button
              onClick={handleCopyEmail}
              className="text-slate-400 hover:text-white transition-colors flex-shrink-0"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        <div>
          <p className="text-xs text-slate-400 mb-1">TELEPON</p>
          <p className="text-sm text-white font-medium">{profile.phone}</p>
        </div>

        <div>
          <p className="text-xs text-slate-400 mb-1">PAKET</p>
          <p className="text-sm text-blue-400 font-semibold">{profile.package}</p>
        </div>

        <div>
          <p className="text-xs text-slate-400 mb-1">BERGABUNG SEJAK</p>
          <p className="text-sm text-white">{profile.joinDate}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>

      {/* Action Buttons */}
      <div className="space-y-2">
        <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2">
          <Edit className="w-4 h-4" />
          Edit Profil
        </button>
        <button className="w-full px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-all duration-300">
          Pengaturan Keamanan
        </button>
      </div>
    </div>
  );
}
