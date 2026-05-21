import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, ArrowDownToLine, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { navigation, profile } from "@/data/portfolio";

export default function Navigation() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = mounted ? (resolvedTheme || theme) === "dark" : true;

  const handleToggle = () => setTheme(isDark ? "light" : "dark");

  return (
    <header
      data-testid="site-navigation"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#intro"
          data-testid="nav-logo"
          className="font-heading font-bold tracking-tight text-base flex items-center gap-2"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-foreground" />
          {profile.name.split(" ")[0]}
          <span className="text-muted-foreground font-normal hidden sm:inline">
            / {profile.title}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              data-testid={`nav-link-${item.id}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={handleToggle}
            data-testid="theme-toggle-button"
            aria-label="Toggle theme"
            className="relative h-9 w-9 grid place-items-center overflow-hidden rounded-full border border-border hover:bg-accent transition-colors"
          >
            <Sun
              className={`absolute h-4 w-4 transition-all duration-300 ${
                mounted && isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
              }`}
            />
            <Moon
              className={`absolute h-4 w-4 transition-all duration-300 ${
                mounted && isDark ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
              }`}
            />
          </button>

          <Button
            asChild
            size="sm"
            data-testid="download-resume-button"
            className="hidden sm:inline-flex rounded-full font-medium"
          >
            <a href="/MojtabaMousavi-Productdesigner.pdf" download="Mojtaba-Mousavi-Resume.pdf">
              <ArrowDownToLine className="h-4 w-4 mr-1.5" />
              Resume
            </a>
          </Button>

          <button
            onClick={() => setOpen((v) => !v)}
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
            className="md:hidden h-9 w-9 grid place-items-center rounded-full border border-border"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          data-testid="mobile-menu-panel"
          className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl"
        >
          <nav className="px-6 py-4 flex flex-col gap-3">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                data-testid={`mobile-nav-link-${item.id}`}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/80 hover:text-foreground py-1"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/MojtabaMousavi-Productdesigner.pdf"
              download="Mojtaba-Mousavi-Resume.pdf"
              data-testid="mobile-download-resume"
              className="mt-2 inline-flex items-center gap-2 text-sm font-medium"
            >
              <ArrowDownToLine className="h-4 w-4" />
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
