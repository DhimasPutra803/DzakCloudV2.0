import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const NotFound = () => {
  const location = useLocation();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center transition-colors bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">404</h1>
        <p className="text-xl mb-4 text-slate-300">Oops! Page not found</p>
        <a href="/" className="text-blue-400 hover:text-blue-300 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
