"use client";
import Logo from "@/components/global/logo";
import { ModeToggle } from "@/components/global/theme-toggle";
import { MobileNav } from "@/components/header/mobile-nav";
import { Button, buttonVariants } from "@/components/ui/button";
import { NAVLINKS } from "@/constants";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { Link, NavLink } from "react-router";

export function Header() {
  const scrolled = useScroll(10);

  return (
    <header
      className={cn(
        "slow sticky top-0 z-50 w-full border-b border-transparent",
        {
          "border-border bg-background/95 supports-backdrop-filter:bg-background/50 backdrop-blur-sm":
            scrolled,
        },
      )}
    >
      <nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Logo />
          <ModeToggle />
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {NAVLINKS.map((link, i) => (
            <NavLink
              className={buttonVariants({ variant: "ghost" })}
              to={link.href}
              key={i}
            >
              {link.label}
            </NavLink>
          ))}

          <Button asChild>
            <Link to="/auth">Get Started</Link>
          </Button>
        </div>
        <MobileNav />
      </nav>
    </header>
  );
}
