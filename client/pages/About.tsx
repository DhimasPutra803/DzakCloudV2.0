import { Navigation } from "@/components/Navigation";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateX = ((y - midY) / midY) * 10;
    const rotateY = ((x - midX) / midX) * 10;

    setRotate({ x: -rotateX, y: rotateY });

    // posisi glow (0–100%)
    setGlowPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => {
    setIsHover(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      className={cn(
        "min-h-screen relative overflow-hidden transition-colors",
        isDark
          ? "bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"
          : "bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950",
      )}
    >
      {/* Wave background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className={cn(
            "absolute top-0 left-0 w-full h-96",
            isDark ? "opacity-20" : "opacity-10",
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
              <stop
                offset="0%"
                stopColor="#3b82f6"
                stopOpacity={isDark ? "0.3" : "0.15"}
              />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Navigation />

      <div className="pt-20 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start mb-12 md:mb-20">
            {/* Left Side - Content */}
            <div>
              <div className="mb-8 md:mb-12">
                <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white">
                  DzakwanCorp
                </h1>
                <div className="w-12 h-1 bg-blue-500"></div>
              </div>

              {/* Visi Section */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-lg md:text-xl font-semibold text-blue-400 mb-3 md:mb-4">
                  Visi
                </h2>
                <p
                  className={cn(
                    "leading-relaxed text-slate-300 text-sm md:text-base",
                  )}
                >
                  DzakwanCorp adalah visi perusahaan yang ingin di bidang
                  layanan teknologi informasi. Membangun perusahaan di industri
                  teknologi informasi. Adalah pengguna untuk memberikan solusi
                  teknologi terdepan yang memenuhi kebutuhan digital masa kini.
                </p>
              </div>

              {/* Misi Section */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-lg md:text-xl font-semibold text-blue-400 mb-3 md:mb-4">
                  Misi
                </h2>
                <p
                  className={cn(
                    "leading-relaxed text-slate-300 text-sm md:text-base",
                  )}
                >
                  Memberikan inovasi, peluang, startup, dan UMKM dalam
                  memberikan teknologi cloud secara efisien, aman, dan
                  terjangkau. Kami percaya bahwa teknologi harus accessible
                  untuk semua kelangsungan.
                </p>
              </div>

              {/* Didirikan Tahun Section */}
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-blue-400 mb-3 md:mb-4">
                  Didirikan Tahun 2026
                </h2>
                <p
                  className={cn(
                    "leading-relaxed text-slate-300 text-sm md:text-base",
                  )}
                >
                  Perusahaan DzakwanCorp didirikan sebagai harapan, komitmen,
                  dan koneksitas dalam membangun sebuah teknologi terdepan yang
                  memanfaatkan infrastruktur digital masa kini dan
                  profesionalisme tim kami.
                </p>
              </div>
            </div>

            {/* Right Side - Logo with Background Circle */}
            <div className="flex items-center justify-center mt-8 lg:mt-0">
              <div className="flex flex-col items-center gap-6 md:gap-8">
                {/* Background circle with logo */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
                  <div
                    className={cn(
                      "absolute inset-0 rounded-full",
                      isDark
                        ? "bg-gradient-to-br from-blue-500/10 to-slate-700/10"
                        : "bg-gradient-to-br from-blue-300/10 to-slate-400/10",
                    )}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      style={{
                        transform: `perspective(800px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                      }}
                      className={cn(
                        "relative rounded-full w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 flex items-center justify-center transition-all duration-200 ease-out",
                      )}
                    >
                      {/* 🌈 Rainbow Glow */}
                      <div className="absolute inset-0 rounded-full blur-xl opacity-70 bg-[conic-gradient(at_top,_red,_orange,_yellow,_green,_cyan,_blue,_purple,_red)] animate-spin-slow"></div>

                      {/* Layer utama */}
                      <div
                        className={cn(
                          "absolute inset-0 rounded-full border-2",
                          isDark ? "border-blue-400/40" : "border-blue-500/40",
                        )}
                      >
                        <div className="relative">
                          {/* 🌈 Rainbow overlay */}
                          <div
                            className="absolute inset-0"
                            style={{
                              background: `conic-gradient(
  from ${glowPos.x * 2}deg,
  #0ea5e9,
  #22d3ee,
  #6366f1,
  #0ea5e9
)`,
                              WebkitMaskImage: `url("https://cdn.builder.io/api/v1/image/assets%2Fe2a87e83b0fd4507b87a8e31dcf180cf%2F97210de4246741488f90647f07f1b9c8?format=webp&width=800&height=1200")`,
                              WebkitMaskSize: "contain",
                              WebkitMaskRepeat: "no-repeat",
                              WebkitMaskPosition: "center",

                              maskImage: `url("https://cdn.builder.io/api/v1/image/assets%2Fe2a87e83b0fd4507b87a8e31dcf180cf%2F97210de4246741488f90647f07f1b9c8?format=webp&width=800&height=1200")`,
                              maskSize: "contain",
                              maskRepeat: "no-repeat",
                              maskPosition: "center",

                              filter:
                                "brightness(1.3) saturate(1.5) drop-shadow(0 0 10px rgba(0,150,255,0.5))",
                            }}
                          />

                          {/* 🔳 logo asli (jadi base) */}
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets%2Fe2a87e83b0fd4507b87a8e31dcf180cf%2F97210de4246741488f90647f07f1b9c8?format=webp&width=800&height=1200"
                            alt="DzakCloud Logo"
                            className="h-24 sm:h-58 md:h-60 w-auto opacity-20"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text below logo - centered */}
                <div className="text-center">
                  <p className="font-semibold text-xl md:text-2xl mb-1 text-white">
                    DzakwanCorp
                  </p>
                  <p className="text-xs md:text-sm text-slate-400">
                    Cloud Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Profile Section */}
          <div className={cn("border-t pt-12 md:pt-20", "border-slate-700")}>
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-white">
                Profil Perusahaan
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {/* Identitas Perusahaan */}
              <div
                className={cn(
                  "border rounded-xl p-6 md:p-8 transition-all duration-300",
                  "bg-gradient-to-br from-slate-800/40 to-slate-700/40 border-slate-600/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10",
                )}
              >
                <h3 className="font-bold text-lg md:text-xl mb-4 md:mb-6 text-white">
                  Identitas Perusahaan
                </h3>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-start gap-2 md:gap-3">
                    <span className="text-blue-400 font-bold mt-1 text-sm md:text-base">
                      •
                    </span>
                    <div>
                      <p className="font-medium text-white text-sm md:text-base">
                        Nama
                      </p>
                      <p className="text-slate-300 text-xs md:text-sm">
                        DzakwanCorp
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <span className="text-blue-400 font-bold mt-1 text-sm md:text-base">
                      •
                    </span>
                    <div>
                      <p className="font-medium text-white text-sm md:text-base">
                        Berdiri
                      </p>
                      <p className="text-slate-300 text-xs md:text-sm">
                        Tahun 2026
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <span className="text-blue-400 font-bold mt-1 text-sm md:text-base">
                      •
                    </span>
                    <div>
                      <p className="font-medium text-white text-sm md:text-base">
                        Bidang
                      </p>
                      <p className="text-slate-300 text-xs md:text-sm">
                        Teknologi Informasi & Cloud
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <span className="text-blue-400 font-bold mt-1 text-sm md:text-base">
                      •
                    </span>
                    <div>
                      <p className="font-medium text-white text-sm md:text-base">
                        Lokasi
                      </p>
                      <p className="text-slate-300 text-xs md:text-sm">
                        Bekasi, Indonesia
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Nilai Perusahaan */}
              <div
                className={cn(
                  "border rounded-xl p-6 md:p-8 transition-all duration-300",
                  "bg-gradient-to-br from-blue-900/30 to-blue-800/30 border-blue-600/30 hover:border-blue-500/50",
                )}
              >
                <h3 className="font-bold text-lg md:text-xl mb-4 md:mb-6 text-white">
                  Nilai Perusahaan
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start gap-2 md:gap-3">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-blue-100 text-sm md:text-base">
                        Keandalan
                      </p>
                      <p className="text-xs md:text-sm text-blue-200/70">
                        Sistem kami terpercaya dan stabil setiap saat
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-blue-100 text-sm md:text-base">
                        Keamanan
                      </p>
                      <p className="text-xs md:text-sm text-blue-200/70">
                        Data Anda dilindungi dengan enkripsi tingkat enterprise
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-blue-100 text-sm md:text-base">
                        Aksesibilitas
                      </p>
                      <p className="text-xs md:text-sm text-blue-200/70">
                        Harga terjangkau untuk semua kalangan bisnis
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-blue-100 text-sm md:text-base">
                        Inovasi
                      </p>
                      <p className="text-xs md:text-sm text-blue-200/70">
                        Teknologi terbaru untuk solusi masa depan
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mt-8 md:mt-12">
              <Button
                className={cn(
                  "px-6 md:px-8 py-2 md:py-3 transition-all duration-300 hover:shadow-lg text-sm md:text-base",
                  isDark
                    ? "bg-slate-700 hover:bg-slate-600 text-slate-200 hover:shadow-slate-500/30"
                    : "bg-slate-200 hover:bg-slate-300 text-slate-900 hover:shadow-slate-400/30",
                )}
              >
                <a href="/Contact">
                  <button>Hubungi Kami</button>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
