import { Logo } from "@/components/global/logo";
import { Button } from "@/components/ui/button";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router";
import { ModeToggle } from "../global/theme-toggle";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const scrolled = useScroll(10);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent py-4 transition-all duration-700 ease-in-out",
        {
          "border-border bg-background/95 supports-backdrop-filter:bg-background/50 backdrop-blur-sm":
            scrolled,
        },
      )}
    >
      <nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between">
        <div className="flex items-center gap-5">
          <NavLink className="hover:bg-accent rounded-md px-3 py-2.5" to="/">
            <Logo className="h-4" />
          </NavLink>
          <DesktopNav />
          <ModeToggle />
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="outline">Sign In</Button>
          <Button>Get Started</Button>
        </div>
        <MobileNav />
      </nav>
    </header>
  );
}
