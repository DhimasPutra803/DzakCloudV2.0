import { Wallet, TrendingUp } from "lucide-react";

interface Spending {
  package: string;
  amount: number;
  percentage: number;
  count: number;
  color: string;
}

const spendingData: Spending[] = [
  {
    package: "VPS Pro",
    amount: 100000,
    percentage: 57,
    count: 2,
    color: "bg-blue-500",
  },
  {
    package: "Web Host",
    amount: 75000,
    percentage: 43,
    count: 1,
    color: "bg-purple-500",
  },
];

export function Spending() {
  const totalSpending = spendingData.reduce((sum, item) => sum + item.amount, 0);
  const monthlyAverage = (totalSpending / 3).toFixed(0);

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-xl p-6 hover:border-slate-500 transition-all duration-300">
      <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <Wallet className="w-6 h-6 text-green-400" />
        Pengeluaran Anda
      </h2>

      {/* Total Spending */}
      <div className="mb-8 bg-slate-700/50 rounded-lg p-6">
        <p className="text-slate-400 text-sm mb-2">Total Pengeluaran</p>
        <h3 className="text-4xl font-bold text-white mb-4">
          Rp {totalSpending.toLocaleString("id-ID")}
        </h3>
        <div className="flex gap-4 text-sm">
          <div>
            <p className="text-slate-400">Rata-rata Bulanan</p>
            <p className="text-green-400 font-semibold">
              Rp {monthlyAverage}
            </p>
          </div>
          <div>
            <p className="text-slate-400">Periode</p>
            <p className="text-slate-300 font-semibold">3 Bulan</p>
          </div>
        </div>
      </div>

      {/* Spending Breakdown */}
      <div className="space-y-4">
        <p className="text-slate-400 font-medium text-sm">Breakdown Pengeluaran</p>
        {spendingData.map((item, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-white font-medium text-sm">{item.package}</span>
              <span className="text-slate-300 text-sm">
                Rp {item.amount.toLocaleString("id-ID")} ({item.percentage}%)
              </span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
              <div
                className={`${item.color} h-full rounded-full transition-all duration-300`}
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
            <p className="text-slate-400 text-xs">{item.count}x pembelian</p>
          </div>
        ))}
      </div>

      {/* Trend */}
      <div className="mt-6 pt-6 border-t border-slate-600 flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-lg p-4">
        <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0" />
        <div>
          <p className="text-green-300 font-medium text-sm">Trend Positif</p>
          <p className="text-green-200/70 text-xs">
            Pengeluaran meningkat 12% dibanding periode sebelumnya
          </p>
        </div>
      </div>
    </div>
  );
}
