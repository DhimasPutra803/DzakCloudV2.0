import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { useTheme } from "@/contexts/ThemeContext";
import { Cloud, Shield, Zap, Headphones } from "lucide-react";
import { Service } from "@shared/api";
import { cn } from "@/lib/utils";
import { apiRequest } from "@/lib/api";

const iconMap: Record<string, React.ReactNode> = {
  cloud: <Cloud className="w-8 h-8" />,
  shield: <Shield className="w-8 h-8" />,
  zap: <Zap className="w-8 h-8" />,
  headset: <Headphones className="w-8 h-8" />,
};

const FALLBACK_SERVICES: Service[] = [
  {
    id: '1',
    icon: 'cloud',
    title: 'Cloud VPS',
    description: 'Virtual Server yang powerful dengan infrastruktur cloud computing dan teknologi terdepan',
  },
  {
    id: '2',
    icon: 'shield',
    title: 'Keamanan',
    description: 'Keamanan tingkat enterprise dengan enkripsi data dan perlindungan dari ancaman cyber',
  },
  {
    id: '3',
    icon: 'zap',
    title: 'Komputasi',
    description: 'Performa optimal dengan resource komputasi yang dapat disesuaikan sesuai kebutuhan',
  },
  {
    id: '4',
    icon: 'headset',
    title: 'Support 24/7',
    description: 'Tim support profesional kami siap membantu Anda kapan saja, 24 jam sehari 7 hari seminggu',
  },
];

export default function Home() {
  const [services, setServices] = useState<Service[]>(FALLBACK_SERVICES);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    apiRequest("/services")
      .then((data) => setServices(data.items))
      .catch((error) => {
        console.warn('Failed to fetch services, using fallback data:', error);
        setServices(FALLBACK_SERVICES);
      });
  }, []);

  return (
    <div className={cn(
      "min-h-screen relative overflow-hidden transition-colors",
      isDark
        ? "bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"
        : "bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"
    )}>
      {/* Wave backgrounds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className={cn(
            "absolute top-0 left-0 w-full h-96",
            isDark ? "opacity-20" : "opacity-10"
          )}
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
        <svg
          className={cn(
            "absolute bottom-20 left-0 w-full h-96",
            isDark ? "opacity-5" : "opacity-0"
          )}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,70 Q300,120 600,70 T1200,70 L1200,0 L0,0 Z"
            fill="url(#grad2)"
          />
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity={isDark ? "0.05" : "0" } />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Navigation />

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6 flex items-center justify-center relative z-10">
        <div className="text-center max-w-2xl">
          <h1 className={cn(
            "text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-white"
          )}>
            DzakCloud For All
          </h1>
          <p className={cn(
            "text-xl mb-12 leading-relaxed text-slate-100"
          )}>
            Nikmati layanan cloud kami tanpa khawatir dengan keamanan tingkat enterprise dan dukungan 24/7.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              asChild
              className={cn(
                "px-8 py-6 text-base rounded-lg transition-all duration-300 hover:translate-y-[-2px]",
                "bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg hover:shadow-blue-500/50"
              )}
            >
              <Link to="/services">Lihat Paket</Link>
            </Button>
            <Button
              asChild
              className={cn(
                "px-8 py-6 text-base rounded-lg transition-all duration-300 hover:translate-y-[-2px]",
                isDark
                  ? "bg-slate-700 hover:bg-slate-600 text-white hover:shadow-lg hover:shadow-slate-500/50 border border-slate-600 hover:border-slate-500"
                  : "bg-slate-200 hover:bg-slate-300 text-slate-900 hover:shadow-lg hover:shadow-slate-400/50 border border-slate-300 hover:border-slate-400"
              )}
            >
              <Link to="/about">Pelajari Lebih Lanjut</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Layanan yang Kami Sediakan
            </h2>
            <p className="text-slate-300">
              Solusi cloud computing terpadu untuk bisnis Anda
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className={cn(
                  "border rounded-xl p-6 transition-all duration-300 hover:translate-y-[-4px] hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20",
                  "bg-gradient-to-br from-slate-800/40 to-slate-700/40 border-slate-600/50"
                )}
              >
                <div className={cn(
                  "mb-4 text-3xl",
                  isDark ? "text-blue-400" : "text-blue-600"
                )}>
                  {iconMap[service.icon] || iconMap.cloud}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
