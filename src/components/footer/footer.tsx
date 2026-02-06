import Logo from "@/components/global/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

export function Footer() {
  const companyLinks = [
    "About Us",
    "Careers",
    "Brand assets",
    "Privacy Policy",
    "Terms of Service",
  ];

  const resourceLinks = [
    "Blog",
    "Help Center",
    "Contact Support",
    "Community",
    "Security",
  ];

  const socialLinks = [
    FacebookIcon,
    GithubIcon,
    InstagramIcon,
    LinkedinIcon,
    TwitterIcon,
    YoutubeIcon,
  ];
  return (
    <footer className="relative">
      <div
        className={cn(
          "mx-auto max-w-5xl lg:border-x",
          "dark:bg-[radial-gradient(35%_80%_at_30%_0%,--theme(--color-foreground/.1),transparent)]",
        )}
      >
        <div className="bg-border absolute inset-x-0 h-px w-full" />
        <div className="grid max-w-5xl grid-cols-6 gap-6 p-4">
          <div className="col-span-6 flex flex-col gap-4 pt-5 md:col-span-4">
            <Logo />
            <p className="text-muted-foreground max-w-sm font-mono text-sm text-balance">
              A comprehensive financial technology platform.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((Item, index) => (
                <Button key={index} size="icon-sm" variant="outline">
                  {Item === GithubIcon ? (
                    <a
                      href="https://github.com/nihilno"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="animate-pulse"
                    >
                      <Item className="size-3.5" />
                    </a>
                  ) : (
                    <Item className="size-3.5" />
                  )}
                </Button>
              ))}
            </div>
          </div>
          <div className="col-span-3 w-full md:col-span-1">
            <span className="text-muted-foreground text-xs">Resources</span>
            <ul className="mt-2 flex flex-col gap-2">
              {resourceLinks.map((title) => (
                <li className="cursor-pointer hover:underline" key={title}>
                  {title}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-3 w-full md:col-span-1">
            <span className="text-muted-foreground text-xs">Company</span>
            <ul className="mt-2 flex flex-col gap-2">
              {companyLinks.map((title) => (
                <li className="cursor-pointer hover:underline" key={title}>
                  {title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-border absolute inset-x-0 h-px w-full" />
        <div className="flex max-w-4xl flex-col justify-between gap-2 py-4">
          <p className="text-muted-foreground text-center text-sm font-light">
            &copy; {new Date().getFullYear()}{" "}
            <a
              className="text-foreground cursor-pointer hover:underline"
              href="https://github.com/nihilno"
              target="_blank"
              rel="noopener noreferrer"
            >
              MP
            </a>
            , All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
