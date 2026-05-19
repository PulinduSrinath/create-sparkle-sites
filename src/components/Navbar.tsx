import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/hooks/use-theme";
import ZetasLogo from "./ZetasLogo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="relative w-14 h-7 rounded-full border border-border dark:border-white/20 bg-muted dark:bg-white/5 backdrop-blur-sm flex items-center px-1 transition-colors duration-300 hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/40 active:scale-95"
    >
      <span
        className={`absolute inset-0 rounded-full transition-all duration-500 ${
          isDark ? "bg-primary/10" : "bg-amber-400/10"
        }`}
      />
      <span
        className={`relative z-10 w-5 h-5 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
          isDark ? "bg-primary translate-x-7" : "bg-amber-400 translate-x-0"
        }`}
        style={{
          boxShadow: isDark ? "0 0 8px rgba(34,211,238,0.6)" : "0 0 8px rgba(251,191,36,0.7)",
        }}
      >
        {isDark ? <Moon size={12} className="text-black" strokeWidth={2.5} /> : <Sun size={12} className="text-black" strokeWidth={2.5} />}
      </span>
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50 animate-nav-enter">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-3 sm:py-4 sm:px-6">
        <Link to="/">
          <ZetasLogo />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`transition-colors duration-300 text-sm font-medium ${
                location.pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold text-primary-foreground bg-primary hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-2 flex-shrink-0">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden glass-card border-t border-border/30 transition-[max-height,opacity] duration-300 ease-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 p-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={`transition-colors text-sm ${
                location.pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="px-5 py-2.5 rounded-lg text-sm font-semibold text-primary-foreground bg-primary text-center"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
