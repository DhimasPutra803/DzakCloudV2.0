import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { Mail, Phone, MapPin, Clock, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { FAQItem } from "@shared/api";
import { cn } from "@/lib/utils";
import { apiRequest } from "@/lib/api";

const FALLBACK_FAQ: FAQItem[] = [
  {
    id: "1",
    question: "Bagaimana cara memulai?",
    answer:
      "Anda dapat membuat akun baru, memilih paket yang sesuai, dan mulai menggunakan layanan cloud kami dalam hitungan menit.",
  },
  {
    id: "2",
    question: "Apakah ada jaminan uptime?",
    answer:
      "Ya, semua paket kami menjamin uptime 99.9% dengan dukungan teknis 24/7.",
  },
  {
    id: "3",
    question: "Bisakah saya mengubah paket?",
    answer:
      "Tentu saja! Anda dapat upgrade atau downgrade paket kapan saja tanpa biaya tambahan.",
  },
  {
    id: "4",
    question: "Berapa lama waktu setup?",
    answer:
      "Setup biasanya selesai dalam 5-10 menit. Tim support kami siap membantu jika diperlukan.",
  },
];

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [faqItems, setFaqItems] = useState<FAQItem[]>(FALLBACK_FAQ);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    apiRequest("/faq")
      .then((data) => setFaqItems(data.items))
      .catch((error) => {
        console.warn("Failed to fetch FAQ, using fallback data:", error);
        setFaqItems(FALLBACK_FAQ);
      });
  }, []);

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

      <div className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-white">Hubungi Kami</h1>
            <p className="max-w-2xl mx-auto text-slate-300">
              Punya pertanyaan atau ingin bekerja sama? Kami ingin mendengar
              dari Anda. Kirimkan pesan dan kami akan membalas secepatnya.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Left Side - Contact Info */}
            <div className="space-y-6">
              {/* Email Card */}
              <div
                className={cn(
                  "border rounded-xl p-6 transition-all duration-300",
                  "bg-gradient-to-br from-slate-800/40 to-slate-700/40 border-slate-600/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10",
                )}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-white">Email</h3>
                    <p className="text-slate-300">admin@dzakcloud.my.id</p>
                    <p className="text-sm text-slate-400">
                      Kami akan membalas dalam 24 jam
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone Card */}

              {/* Location Card */}
              <div
                className={cn(
                  "border rounded-xl p-6 transition-all duration-300",
                  "bg-gradient-to-br from-slate-800/40 to-slate-700/40 border-slate-600/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10",
                )}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-white">Lokasi</h3>
                    <p className="text-slate-300">Bekasi, Indonesia</p>
                    <p className="text-sm text-slate-400">Kantor Pusat</p>
                  </div>
                </div>
              </div>

              {/* Business Hours Card */}
              <div
                className={cn(
                  "border rounded-xl p-6 transition-all duration-300",
                  "bg-gradient-to-br from-slate-800/40 to-slate-700/40 border-slate-600/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10",
                )}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-white">Jam Kerja</h3>
                    <p className="text-slate-300">Sen - Jum: 8 AM - 8 PM</p>
                    <p className="text-sm text-slate-400">Waktu Jakarta</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block font-medium mb-2 text-white">
                    Nama
                  </label>
                  <input
                    type="text"
                    placeholder="Nama lengkap Anda"
                    className={cn(
                      "w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors duration-300",
                      "bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400",
                    )}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-medium mb-2 text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="email@anda.com"
                    className={cn(
                      "w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors duration-300",
                      "bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400",
                    )}
                  />
                </div>

                {/* Topic */}
                <div>
                  <label className="block font-medium mb-2 text-white">
                    Topik
                  </label>
                  <select
                    className={cn(
                      "w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors duration-300",
                      "bg-slate-700/50 border-slate-600/50 text-white",
                    )}
                  >
                    <option>Pilih topik...</option>
                    <option>Pertanyaan Penjualan</option>
                    <option>Dukungan Teknis</option>
                    <option>Kemitraan</option>
                    <option>Lainnya</option>
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label className="block font-medium mb-2 text-white">
                    Subjek
                  </label>
                  <input
                    type="text"
                    placeholder="Tentang apa ini?"
                    className={cn(
                      "w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors duration-300",
                      "bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400",
                    )}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block font-medium mb-2 text-white">
                    Deskripsi Lengkap
                  </label>
                  <textarea
                    placeholder="Ceritakan lebih lanjut tentang pertanyaan Anda..."
                    rows={5}
                    className={cn(
                      "w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors duration-300",
                      "bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400",
                    )}
                  />
                </div>

                {/* Submit Button */}
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
                  Kirim Pesan
                </Button>
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <div className={cn("mt-20 border-t pt-20", "border-slate-700")}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-white">
                Pertanyaan Umum
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqItems.map((item) => (
                <div
                  key={item.id}
                  className={cn(
                    "border rounded-lg overflow-hidden transition-all duration-300",
                    "bg-gradient-to-br from-slate-800/40 to-slate-700/40 border-slate-600/50 hover:border-blue-500/50",
                  )}
                >
                  <button
                    onClick={() =>
                      setExpandedId(expandedId === item.id ? null : item.id)
                    }
                    className={cn(
                      "w-full px-6 py-4 flex items-center justify-between transition-colors duration-300",
                      isDark
                        ? "hover:bg-slate-700/50"
                        : "hover:bg-slate-200/50",
                    )}
                  >
                    <h3 className="font-semibold text-left text-white">
                      {item.question}
                    </h3>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 transition-transform duration-300 flex-shrink-0 text-slate-400",
                        expandedId === item.id && "rotate-180",
                      )}
                    />
                  </button>

                  {expandedId === item.id && (
                    <div className="px-6 py-4 border-t bg-slate-700/20 border-slate-600 text-slate-300">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
