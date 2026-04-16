import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (!email || !password) {
        setError("Email dan password harus diisi");
        setLoading(false);
        return;
      }

      await login(email, password);
      // Redirect to dashboard after successful login
      navigate("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login gagal");
      setLoading(false);
    }
  };

  return (
    <div className={cn(
      "min-h-screen relative overflow-hidden transition-colors",
      isDark
        ? "bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"
        : "bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"
    )}>
      {/* Wave background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className={cn("absolute top-0 left-0 w-full h-96", isDark ? "opacity-20" : "opacity-10")}
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
      </div>

      <Navigation />

      <div className="pt-32 pb-20 px-6 flex items-center justify-center relative z-10">
        <div className="w-full max-w-md">
          {/* Card Container */}
          <div className={cn(
            "border rounded-2xl p-8 backdrop-blur-sm transition-colors",
            "bg-slate-800/40 border-slate-700/50"
          )}>
            <h1 className="text-3xl font-bold text-center mb-2 text-white">
              Login
            </h1>
            <p className="text-center mb-8 text-slate-400">
              Masuk ke akun DzakCloud Anda
            </p>

            {/* Error Message */}
            {error && (
              <div className="mb-6 bg-red-500/20 border border-red-500/50 rounded-lg p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Input */}
              <div>
                <label className="block font-medium mb-2 text-white">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@email.com"
                  className={cn(
                    "w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors",
                    "bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500"
                  )}
                />
              </div>

              {/* Password Input */}
              <div>
                <label className="block font-medium mb-2 text-white">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan password Anda"
                  className={cn(
                    "w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors",
                    "bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500"
                  )}
                />
              </div>

              {/* Sign In Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sedang masuk..." : "Masuk Sekarang"}
              </Button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-slate-600"></div>
              <span className="text-sm text-slate-400">atau</span>
              <div className="flex-1 h-px bg-slate-600"></div>
            </div>

            {/* Google Sign In */}
            <Button
              variant="outline"
              className={cn(
                "w-full py-3 text-base font-medium transition-all duration-300 border",
                "border-slate-600 text-slate-300 hover:bg-slate-700"
              )}
            >
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Sign in with Google
            </Button>

            {/* Sign Up Link */}
            <p className="text-center mt-6 text-slate-400">
              Belum punya akun?{" "}
              <Link
                to="/sign-up"
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                Daftar di sini
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
