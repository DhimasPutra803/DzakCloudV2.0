import { Payment } from "@shared/api";
import { Download, Check, Clock, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaymentHistoryProps {
  payments: Payment[];
}

export function PaymentHistory({ payments }: PaymentHistoryProps) {
  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      paid: "bg-green-500/20 text-green-300 border-green-500/30",
      pending: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
      failed: "bg-red-500/20 text-red-300 border-red-500/30",
    };

    const labels: Record<string, string> = {
      paid: "✓ Terbayar",
      pending: "⏱ Menunggu",
      failed: "✗ Gagal",
    };

    return (
      <span
        className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${styles[status]}`}
      >
        {labels[status] || status}
      </span>
    );
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-xl p-6 hover:border-slate-500 transition-all duration-300">
      <h2 className="text-xl font-bold text-white mb-6">Riwayat Pembayaran</h2>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-600">
              <th className="text-left py-3 px-4 text-slate-400 font-medium">
                Invoice
              </th>
              <th className="text-left py-3 px-4 text-slate-400 font-medium">
                Tanggal
              </th>
              <th className="text-left py-3 px-4 text-slate-400 font-medium">
                Paket
              </th>
              <th className="text-right py-3 px-4 text-slate-400 font-medium">
                Jumlah
              </th>
              <th className="text-center py-3 px-4 text-slate-400 font-medium">
                Status
              </th>
              <th className="text-center py-3 px-4 text-slate-400 font-medium">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr
                key={payment.id}
                className="border-b border-slate-600 hover:bg-slate-700/30 transition-colors duration-300"
              >
                <td className="py-3 px-4 text-white font-mono text-xs">
                  {payment.invoiceId}
                </td>
                <td className="py-3 px-4 text-slate-300">{payment.date}</td>
                <td className="py-3 px-4 text-blue-400 font-medium">
                  {payment.package}
                </td>
                <td className="py-3 px-4 text-right text-white font-semibold">
                  {payment.amountLabel}
                </td>
                <td className="py-3 px-4 text-center">
                  {getStatusBadge(payment.status)}
                </td>
                <td className="py-3 px-4 text-center">
                  <button className="text-blue-400 hover:text-blue-300 transition-colors">
                    <Download className="w-4 h-4 inline" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-3">
        {payments.map((payment) => (
          <div
            key={payment.id}
            className="bg-slate-700/50 rounded-lg p-4 border border-slate-600 hover:border-slate-500 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-white font-semibold text-sm">
                  {payment.package}
                </p>
                <p className="text-slate-400 text-xs">{payment.invoiceId}</p>
              </div>
              {getStatusBadge(payment.status)}
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-300 text-xs">{payment.date}</p>
                <p className="text-white font-bold">{payment.amountLabel}</p>
              </div>
              <button className="text-blue-400 hover:text-blue-300 transition-colors">
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-6 pt-6 border-t border-slate-600">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-slate-400 text-sm mb-1">Total Terbayar</p>
            <p className="text-2xl font-bold text-green-400">
              Rp{" "}
              {payments
                .filter((p) => p.status === "paid")
                .reduce((sum, p) => sum + p.amount, 0)
                .toLocaleString("id-ID")}
            </p>
          </div>
          <div>
            <p className="text-slate-400 text-sm mb-1">Menunggu Pembayaran</p>
            <p className="text-2xl font-bold text-yellow-400">
              Rp{" "}
              {payments
                .filter((p) => p.status === "pending")
                .reduce((sum, p) => sum + p.amount, 0)
                .toLocaleString("id-ID")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
