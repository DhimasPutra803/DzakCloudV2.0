import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { X, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productPrice: string;
}

export function PaymentModal({
  isOpen,
  onClose,
  productName,
  productPrice,
}: PaymentModalProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [paymentMethod, setPaymentMethod] = useState<string>("card");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handlePayment = async () => {
    setLoading(true);
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setSuccess(true);
    setLoading(false);
  };

  const handleClose = () => {
    setSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className={cn(
        "border rounded-2xl max-w-md w-full mx-4 overflow-hidden transition-colors",
        isDark
          ? "bg-gradient-to-br from-slate-800 to-slate-700 border-slate-600"
          : "bg-gradient-to-br from-slate-100 to-white border-slate-200"
      )}>
        {/* Header */}
        <div className={cn(
          "relative p-6 border-b transition-colors",
          isDark ? "border-slate-600" : "border-slate-200"
        )}>
          <h2 className={cn("text-2xl font-bold", isDark ? "text-white" : "text-slate-900")}>Checkout</h2>
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        {!success ? (
          <div className="p-6 space-y-6">
            {/* Product Summary */}
            <div className={cn(
              "rounded-lg p-4 transition-colors",
              isDark ? "bg-slate-700/50" : "bg-slate-200/50"
            )}>
              <div className="flex justify-between items-center mb-2">
                <p className={cn(isDark ? "text-slate-300" : "text-slate-600")}>Paket:</p>
                <p className={cn("font-semibold", isDark ? "text-white" : "text-slate-900")}>{productName}</p>
              </div>
              <div className={cn(
                "flex justify-between items-center border-t pt-2 transition-colors",
                isDark ? "border-slate-600" : "border-slate-300"
              )}>
                <p className={cn(isDark ? "text-slate-300" : "text-slate-600")}>Total:</p>
                <p className="text-2xl font-bold text-blue-400">{productPrice}</p>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="space-y-3">
              <p className={cn("font-semibold", isDark ? "text-white" : "text-slate-900")}>Metode Pembayaran</p>

              {[
                { id: "card", label: "Kartu Kredit/Debit", icon: "💳" },
                { id: "bank", label: "Transfer Bank", icon: "🏦" },
                { id: "wallet", label: "E-Wallet", icon: "📱" },
              ].map((method) => (
                <label
                  key={method.id}
                  className={cn(
                    "flex items-center p-4 border rounded-lg cursor-pointer transition-colors",
                    isDark
                      ? "border-slate-600 hover:border-blue-500"
                      : "border-slate-300 hover:border-blue-400"
                  )}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={method.id}
                    checked={paymentMethod === method.id}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4"
                  />
                  <span className="ml-3 text-lg">{method.icon}</span>
                  <span className={cn("ml-3 font-medium", isDark ? "text-white" : "text-slate-900")}>{method.label}</span>
                </label>
              ))}
            </div>

            {/* Form Fields */}
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Nama Lengkap"
                className={cn(
                  "w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors",
                  isDark
                    ? "bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    : "bg-slate-100 border-slate-300 text-slate-900 placeholder:text-slate-500"
                )}
              />
              <input
                type="email"
                placeholder="Email"
                className={cn(
                  "w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors",
                  isDark
                    ? "bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    : "bg-slate-100 border-slate-300 text-slate-900 placeholder:text-slate-500"
                )}
              />
            </div>

            {/* Payment Button */}
            <Button
              onClick={handlePayment}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 disabled:opacity-50"
            >
              {loading ? "Memproses..." : `Bayar ${productPrice}`}
            </Button>

            <p className={cn("text-center text-sm", isDark ? "text-slate-400" : "text-slate-500")}>
              Transaksi Anda dilindungi dengan enkripsi 256-bit
            </p>
          </div>
        ) : (
          /* Success Message */
          <div className="p-6 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
              <Check className="w-8 h-8 text-green-400" />
            </div>
            <div>
              <h3 className={cn("text-xl font-bold mb-2", isDark ? "text-white" : "text-slate-900")}>Pembayaran Berhasil!</h3>
              <p className={cn("mb-4", isDark ? "text-slate-300" : "text-slate-700")}>
                Paket <strong>{productName}</strong> telah diaktifkan
              </p>
              <p className={cn("text-sm mb-6", isDark ? "text-slate-400" : "text-slate-500")}>
                Anda akan menerima email konfirmasi dalam beberapa menit
              </p>
            </div>
            <Button
              onClick={handleClose}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2"
            >
              Kembali
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
