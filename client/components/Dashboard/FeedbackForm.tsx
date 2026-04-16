import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle, MessageCircle } from "lucide-react";

export function FeedbackForm() {
  const [feedback, setFeedback] = useState("");
  const [category, setCategory] = useState("suggestion");
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback.trim()) {
      setSubmitted(true);
      setFeedback("");
      setRating(5);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const categories = [
    { value: "suggestion", label: "💡 Saran" },
    { value: "bug", label: "🐛 Laporan Bug" },
    { value: "feature", label: "✨ Permintaan Fitur" },
    { value: "complaint", label: "⚠️ Keluhan" },
    { value: "praise", label: "👍 Pujian" },
  ];

  return (
    <div className="space-y-6">
      {/* Feedback Form */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-xl p-6 hover:border-slate-500 transition-all duration-300">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <MessageCircle className="w-6 h-6 text-blue-400" />
          Kirim Feedback & Saran
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Category Selection */}
          <div>
            <label className="block text-white font-medium mb-3">
              Kategori Feedback
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setCategory(cat.value)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                    category === cat.value
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
                      : "bg-slate-700 text-slate-300 hover:bg-slate-600 border border-slate-600"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div>
            <label className="block text-white font-medium mb-3">
              Kepuasan Layanan
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`text-3xl transition-transform duration-300 hover:scale-125 ${
                    star <= rating ? "opacity-100" : "opacity-40"
                  }`}
                >
                  ⭐
                </button>
              ))}
            </div>
          </div>

          {/* Feedback Text */}
          <div>
            <label className="block text-white font-medium mb-2">
              Pesan Anda
            </label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Tulis feedback, saran, atau keluhan Anda di sini..."
              rows={5}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 resize-none"
            />
            <p className="text-slate-400 text-sm mt-2">
              {feedback.length}/500 karakter
            </p>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={!feedback.trim()}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            Kirim Feedback
          </Button>
        </form>
      </div>

      {/* Success Message */}
      {submitted && (
        <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-green-300 font-semibold mb-1">
                Terima kasih atas feedback Anda!
              </h3>
              <p className="text-green-200/80 text-sm">
                Kami sangat menghargai masukan Anda dan akan menggunakannya untuk
                meningkatkan layanan kami.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Info Card */}
      <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-600/30 rounded-xl p-6">
        <h3 className="text-blue-300 font-semibold mb-2">📢 Info Penting</h3>
        <p className="text-blue-200/80 text-sm">
          Feedback Anda sangat berharga bagi kami. Setiap masukan akan ditinjau
          oleh tim kami dan kami berkomitmen untuk terus meningkatkan kualitas
          layanan.
        </p>
      </div>
    </div>
  );
}
