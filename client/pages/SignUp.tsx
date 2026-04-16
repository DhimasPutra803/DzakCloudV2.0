import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { useTheme } from "@/contexts/ThemeContext";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export default function SignUp() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

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
            <h1 className="text-3xl font-bold text-center mb-2 text-white">Sign Up</h1>
            <p className="text-center mb-8 text-slate-400">Create your DzakCloud account</p>

            <form className="space-y-5">
              {/* Full Name Input */}
              <div>
                <label className="block font-medium mb-2 text-white">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className={cn(
                    "w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors",
                    "bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500"
                  )}
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block font-medium mb-2 text-white">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className={cn(
                    "w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors",
                    "bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500"
                  )}
                />
              </div>

              {/* Password Input */}
              <div>
                <label className="block font-medium mb-2 text-white">Password</label>
                <input
                  type="password"
                  placeholder="Your Password"
                  className={cn(
                    "w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors",
                    "bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500"
                  )}
                />
              </div>

              {/* Confirm Password Input */}
              <div>
                <label className="block font-medium mb-2 text-white">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className={cn(
                    "w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors",
                    "bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500"
                  )}
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center gap-3">
                <Checkbox id="terms" className="border-slate-500" />
                <label htmlFor="terms" className="text-sm cursor-pointer text-slate-300">
                  I agree to the{" "}
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Sign Up Button */}
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-medium">
                Sign Up
              </Button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-slate-600"></div>
              <span className="text-sm text-slate-400">or</span>
              <div className="flex-1 h-px bg-slate-600"></div>
            </div>

            {/* Google Sign Up */}
            <Button
              variant="outline"
              className={cn(
                "w-full py-3 text-base font-medium border",
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
              Sign up with Google
            </Button>

            {/* Already have account? Login link */}
            <p className="text-center mt-6 text-slate-400">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-400 hover:text-blue-300 font-medium">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
