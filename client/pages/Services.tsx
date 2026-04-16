import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { PaymentModal } from "@/components/PaymentModal";
import { useTheme } from "@/contexts/ThemeContext";
import { Check } from "lucide-react";
import { Product } from "@shared/api";
import { cn } from "@/lib/utils";
import { apiRequest } from "@/lib/api";

const FALLBACK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'VPS Lite',
    price: 25000,
    priceLabel: 'Rp 25K/bulan',
    description: 'Ideal untuk project kecil',
    features: ['1 vCPU', '2GB RAM', '50GB Storage', '1TB Bandwidth', '24/7 Support', 'Uptime 99.9%'],
    highlighted: false,
  },
  {
    id: '2',
    name: 'VPS Pro',
    price: 50000,
    priceLabel: 'Rp 50K/bulan',
    description: 'Paling populer untuk bisnis',
    features: ['4 vCPU', '8GB RAM', '250GB Storage', '5TB Bandwidth', 'Priority Support', 'Auto Scaling', 'CDN Global', 'Backup Harian'],
    highlighted: true,
  },
  {
    id: '3',
    name: 'Web Host',
    price: 75000,
    priceLabel: 'Rp 75K/bulan',
    description: 'Untuk operasi besar',
    features: ['16 vCPU', '32GB RAM', '1TB Storage', 'Unlimited Bandwidth', 'Dedicated Support', 'Premium Configuration', 'Managed Services', 'SSL Certificate'],
    highlighted: false,
  },
  {
    id: '4',
    name: 'Enterprise Cloud',
    price: 150000,
    priceLabel: 'Rp 150K/bulan',
    description: 'Solusi korporat skala besar',
    features: ['32 vCPU', '64GB RAM', '2TB Storage', 'Unlimited Bandwidth', '24/7 Dedicated Team', 'Load Balancing', 'Database Replication', 'DDoS Protection'],
    highlighted: false,
  },
  {
    id: '5',
    name: 'Managed Database',
    price: 35000,
    priceLabel: 'Rp 35K/bulan',
    description: 'Database management profesional',
    features: ['PostgreSQL/MySQL', 'Automatic Backups', 'Replication', '24/7 Monitoring', 'Performance Optimization', 'Point-in-time Recovery'],
    highlighted: false,
  },
  {
    id: '6',
    name: 'CDN Premium',
    price: 45000,
    priceLabel: 'Rp 45K/bulan',
    description: 'Distribusi konten global',
    features: ['500GB/bulan Bandwidth', '200+ Edge Locations', 'DDoS Protection', 'Real-time Analytics', 'Image Optimization', 'Video Streaming'],
    highlighted: false,
  },
];

export default function Services() {
  const [products, setProducts] = useState<Product[]>(FALLBACK_PRODUCTS);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [paymentModal, setPaymentModal] = useState({
    isOpen: false,
    productName: "",
    productPrice: "",
  });

  useEffect(() => {
    apiRequest("/products")
      .then((data) => setProducts(data.items))
      .catch((error) => {
        console.warn('Failed to fetch products, using fallback data:', error);
        setProducts(FALLBACK_PRODUCTS);
      });
  }, []);

  const handleOrderClick = (productName: string, productPrice: string) => {
    setPaymentModal({
      isOpen: true,
      productName,
      productPrice,
    });
  };

  return (
    <div className={cn(
      "min-h-screen relative overflow-hidden transition-colors",
      isDark
        ? "bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"
        : "bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"
    )}>
      {/* Wave background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className={cn("absolute top-0 left-0 w-full h-96", isDark ? "opacity-10" : "opacity-5")}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="url(#grad1)"
          />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity={isDark ? "0.15" : "0.08"} />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Navigation />

      <div className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-white">
              Layanan Cloud Profesional
            </h1>
            <p className="max-w-3xl mx-auto text-lg leading-relaxed text-slate-300">
              Pilih paket yang sempurna untuk kebutuhan infrastruktur cloud Anda. Semua paket
              dilengkapi dengan garansi uptime 99.9%, keamanan tingkat enterprise, dan dukungan
              pelanggan 24/7 yang siap membantu.
            </p>
          </div>

          {/* Services Grid - 2 rows */}
          <div className="space-y-12">
            {/* First Row - 3 products */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.slice(0, 3).map((product) => (
                <div
                  key={product.id}
                  className={cn(
                    "rounded-2xl p-8 transition-all duration-500 hover:translate-y-[-8px]",
                    product.highlighted
                      ? "bg-gradient-to-br from-blue-600 to-blue-700 border border-blue-500 shadow-2xl shadow-blue-500/50"
                      : "bg-gradient-to-br from-slate-800/40 to-slate-700/40 border border-slate-600/50 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20"
                  )}
                >
                  {/* Badge for highlighted */}
                  {product.highlighted && (
                    <div className="mb-4 inline-block bg-blue-500/30 text-blue-100 px-4 py-1 rounded-full text-sm font-semibold border border-blue-400/50">
                      ⭐ Paling Populer
                    </div>
                  )}

                  {/* Product Name */}
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {product.name}
                  </h3>
                  <p
                    className={cn(
                      "text-sm mb-6",
                      product.highlighted
                        ? "text-blue-50"
                        : "text-slate-300"
                    )}
                  >
                    {product.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <p className="font-bold text-4xl text-white">
                      {product.priceLabel}
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check
                          className={cn(
                            "w-5 h-5 flex-shrink-0",
                            product.highlighted ? "text-blue-200" : "text-blue-400"
                          )}
                        />
                        <span
                          className={cn(
                            "text-sm",
                            product.highlighted
                              ? "text-blue-50"
                              : "text-slate-300"
                          )}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    onClick={() =>
                      handleOrderClick(product.name, product.priceLabel)
                    }
                    className="w-full py-3 text-base font-semibold transition-all duration-300 bg-white text-blue-600 hover:bg-blue-50 hover:shadow-lg"
                  >
                    Pesan Sekarang
                  </Button>
                </div>
              ))}
            </div>

            {/* Second Row - 3 products */}
            {products.length > 3 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.slice(3).map((product) => (
                  <div
                    key={product.id}
                    className={cn(
                      "border rounded-2xl p-8 transition-all duration-500 hover:translate-y-[-8px]",
                      "bg-gradient-to-br from-slate-800/40 to-slate-700/40 border-slate-600/50 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20"
                    )}
                  >
                    {/* Product Name */}
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      {product.name}
                    </h3>
                    <p className="text-sm mb-6 text-slate-300">
                      {product.description}
                    </p>

                    {/* Price */}
                    <div className="mb-8">
                      <p className="font-bold text-4xl text-white">
                        {product.priceLabel}
                      </p>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-3 mb-8">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <Check className="w-5 h-5 flex-shrink-0 text-blue-400" />
                          <span className="text-sm text-slate-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      onClick={() =>
                        handleOrderClick(product.name, product.priceLabel)
                      }
                      className="w-full py-3 text-base font-semibold transition-all duration-300 bg-white text-blue-600 hover:bg-blue-50 hover:shadow-lg"
                    >
                      Pesan Sekarang
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bottom CTA */}
          <div className="mt-24 text-center">
            <div className="rounded-2xl p-12 border transition-colors bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Perlu Solusi Kustom?
              </h2>
              <p className="mb-8 max-w-2xl mx-auto text-slate-300">
                Tim ahli kami siap membantu Anda merancang solusi cloud yang
                sempurna untuk kebutuhan spesifik bisnis Anda.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
                Hubungi Tim Sales
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={paymentModal.isOpen}
        onClose={() =>
          setPaymentModal({ ...paymentModal, isOpen: false })
        }
        productName={paymentModal.productName}
        productPrice={paymentModal.productPrice}
      />
    </div>
  );
}
