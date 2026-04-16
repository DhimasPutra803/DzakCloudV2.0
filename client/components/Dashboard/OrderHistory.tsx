import { ShoppingCart, Clock, CheckCircle, AlertCircle } from "lucide-react";

interface Order {
  id: string;
  package: string;
  date: string;
  amount: string;
  status: "completed" | "pending" | "cancelled";
  duration: string;
}

const orders: Order[] = [
  {
    id: "ORD-001",
    package: "VPS Pro",
    date: "13 April 2026",
    amount: "Rp 50.000",
    status: "completed",
    duration: "1 Bulan",
  },
  {
    id: "ORD-002",
    package: "VPS Lite",
    date: "13 Maret 2026",
    amount: "Rp 25.000",
    status: "completed",
    duration: "1 Bulan",
  },
  {
    id: "ORD-003",
    package: "Web Host",
    date: "13 Februari 2026",
    amount: "Rp 75.000",
    status: "completed",
    duration: "1 Bulan",
  },
  {
    id: "ORD-004",
    package: "CDN Premium",
    date: "10 Januari 2026",
    amount: "Rp 45.000",
    status: "completed",
    duration: "1 Bulan",
  },
  {
    id: "ORD-005",
    package: "VPS Pro",
    date: "15 Mei 2026",
    amount: "Rp 50.000",
    status: "pending",
    duration: "1 Bulan",
  },
];

export function OrderHistory() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case "pending":
        return <Clock className="w-5 h-5 text-yellow-400" />;
      case "cancelled":
        return <AlertCircle className="w-5 h-5 text-red-400" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      completed: "bg-green-500/20 text-green-300 border-green-500/30",
      pending: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
      cancelled: "bg-red-500/20 text-red-300 border-red-500/30",
    };

    const labels: Record<string, string> = {
      completed: "✓ Selesai",
      pending: "⏱ Menunggu",
      cancelled: "✗ Dibatalkan",
    };

    return (
      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${styles[status]}`}>
        {labels[status] || status}
      </span>
    );
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-xl p-6 hover:border-slate-500 transition-all duration-300">
      <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <ShoppingCart className="w-6 h-6 text-blue-400" />
        Riwayat Pemesanan
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-600">
              <th className="text-left py-3 px-4 text-slate-400 font-medium">
                Order ID
              </th>
              <th className="text-left py-3 px-4 text-slate-400 font-medium">
                Paket
              </th>
              <th className="text-left py-3 px-4 text-slate-400 font-medium">
                Tanggal
              </th>
              <th className="text-left py-3 px-4 text-slate-400 font-medium">
                Durasi
              </th>
              <th className="text-right py-3 px-4 text-slate-400 font-medium">
                Harga
              </th>
              <th className="text-center py-3 px-4 text-slate-400 font-medium">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-slate-600 hover:bg-slate-700/30 transition-colors duration-300"
              >
                <td className="py-3 px-4 text-white font-mono text-xs">
                  {order.id}
                </td>
                <td className="py-3 px-4 text-blue-400 font-medium">
                  {order.package}
                </td>
                <td className="py-3 px-4 text-slate-300">{order.date}</td>
                <td className="py-3 px-4 text-slate-300">{order.duration}</td>
                <td className="py-3 px-4 text-right text-white font-semibold">
                  {order.amount}
                </td>
                <td className="py-3 px-4 text-center">
                  {getStatusBadge(order.status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 pt-6 border-t border-slate-600 flex justify-between items-center">
        <p className="text-slate-400 text-sm">Total Pemesanan: {orders.length}</p>
        <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
          Lihat Semua →
        </button>
      </div>
    </div>
  );
}
