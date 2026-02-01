"use client";
import Logo from "@/components/global/logo";
import { MobileNav } from "@/components/header/mobile-nav";
import { Button, buttonVariants } from "@/components/ui/button";
import { NAVLINKS } from "@/constants";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../global/theme-toggle";

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
        <Logo />
        <ModeToggle />

        <div className="hidden items-center gap-1 md:flex">
          {NAVLINKS.map((link, i) => (
            <a
              className={buttonVariants({ variant: "ghost" })}
              href={link.href}
              key={i}
            >
              {link.label}
            </a>
          ))}
          <Button variant="outline">Sign In</Button>
          <Button>Get Started</Button>
        </div>
        <MobileNav />
      </nav>
    </header>
  );
}
