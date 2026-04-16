import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { LogOut, User, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;
  const isDark = theme === "dark";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-colors",
      "bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 border-b border-slate-700/50"
    )}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 md:gap-3 flex-shrink-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fe2a87e83b0fd4507b87a8e31dcf180cf%2F97210de4246741488f90647f07f1b9c8?format=webp&width=800&height=1200"
            alt="DzakCloud Logo"
            className="h-7 md:h-8 w-auto"
          />
          <span className={cn("font-semibold text-base md:text-lg text-white hidden sm:inline")}>
            DzakCloud
          </span>
        </Link>

        {/* Desktop Menu Items */}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            to="/"
            className={cn(
              "text-sm transition-colors",
              isActive("/")
                ? "text-white font-semibold"
                : "text-slate-200 hover:text-white"
            )}
          >
            Home
          </Link>
          <Link
            to="/contact"
            className={cn(
              "text-sm transition-colors",
              isActive("/contact")
                ? "text-white font-semibold"
                : "text-slate-200 hover:text-white"
            )}
          >
            Contact
          </Link>
          <Link
            to="/services"
            className={cn(
              "text-sm transition-colors",
              isActive("/services")
                ? "text-white font-semibold"
                : "text-slate-200 hover:text-white"
            )}
          >
            Services
          </Link>
          <Link
            to="/about"
            className={cn(
              "text-sm transition-colors",
              isActive("/about")
                ? "text-white font-semibold"
                : "text-slate-200 hover:text-white"
            )}
          >
            About
          </Link>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard">
                <Button
                  variant="ghost"
                  className={cn(
                    "text-sm flex items-center gap-2",
                    "text-slate-200 hover:text-white hover:bg-slate-700/50"
                  )}
                >
                  <User className="w-4 h-4" />
                  {user?.name}
                </Button>
              </Link>
              <Button
                onClick={logout}
                className={cn(
                  "text-sm",
                  "bg-red-600/20 text-red-300 hover:bg-red-600/30 border border-red-600/50"
                )}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button
                  variant="ghost"
                  className={cn(
                    "text-sm",
                    "text-slate-200 hover:text-white hover:bg-slate-700/50"
                  )}
                >
                  Log In
                </Button>
              </Link>
              <Link to="/sign-up">
                <Button className="text-sm bg-blue-600 hover:bg-blue-700 text-white">
                  Sign up
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex items-center justify-center p-2 text-slate-200 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-slate-900/95 border-b border-slate-700/50 backdrop-blur-sm animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {/* Mobile Menu Items */}
            <Link
              to="/"
              onClick={closeMenu}
              className={cn(
                "block px-4 py-2 rounded-lg text-sm transition-colors",
                isActive("/")
                  ? "text-white font-semibold bg-blue-600/20"
                  : "text-slate-200 hover:text-white hover:bg-slate-700/50"
              )}
            >
              Home
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className={cn(
                "block px-4 py-2 rounded-lg text-sm transition-colors",
                isActive("/contact")
                  ? "text-white font-semibold bg-blue-600/20"
                  : "text-slate-200 hover:text-white hover:bg-slate-700/50"
              )}
            >
              Contact
            </Link>
            <Link
              to="/services"
              onClick={closeMenu}
              className={cn(
                "block px-4 py-2 rounded-lg text-sm transition-colors",
                isActive("/services")
                  ? "text-white font-semibold bg-blue-600/20"
                  : "text-slate-200 hover:text-white hover:bg-slate-700/50"
              )}
            >
              Services
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className={cn(
                "block px-4 py-2 rounded-lg text-sm transition-colors",
                isActive("/about")
                  ? "text-white font-semibold bg-blue-600/20"
                  : "text-slate-200 hover:text-white hover:bg-slate-700/50"
              )}
            >
              About
            </Link>

            {/* Divider */}
            <div className="border-t border-slate-700 my-4"></div>

            {/* Mobile Auth Buttons */}
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  onClick={closeMenu}
                  className="block"
                >
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start text-sm flex items-center gap-2",
                      "text-slate-200 hover:text-white hover:bg-slate-700/50"
                    )}
                  >
                    <User className="w-4 h-4" />
                    {user?.name}
                  </Button>
                </Link>
                <Button
                  onClick={() => {
                    logout();
                    closeMenu();
                  }}
                  className={cn(
                    "w-full text-sm",
                    "bg-red-600/20 text-red-300 hover:bg-red-600/30 border border-red-600/50"
                  )}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="block"
                >
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start text-sm",
                      "text-slate-200 hover:text-white hover:bg-slate-700/50"
                    )}
                  >
                    Log In
                  </Button>
                </Link>
                <Link
                  to="/sign-up"
                  onClick={closeMenu}
                  className="block"
                >
                  <Button className="w-full text-sm bg-blue-600 hover:bg-blue-700 text-white">
                    Sign up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
