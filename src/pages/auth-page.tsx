import { LoginForm, RegisterForm } from "@/components/auth/auth-form";
import AuthProviders from "@/components/auth/auth-providers";
import { FloatingPaths } from "@/components/auth/floating-paths";
import Logo from "@/components/global/logo";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";
import { ModeToggle } from "../components/global/theme-toggle";

export function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="relative md:h-screen md:overflow-hidden lg:grid lg:grid-cols-2">
      <div className="bg-secondary dark:bg-secondary/20 relative hidden h-full flex-col border-r p-10 lg:flex">
        <div className="to-background absolute inset-0 bg-gradient-to-b from-transparent via-transparent" />
        <Logo link={false} />

        <div className="z-10 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-xl">
              &ldquo;This Platform has helped me to save time and serve my
              clients faster than ever before.&rdquo;
            </p>
            <footer className="font-mono text-sm font-semibold">
              ~ Ali Hassan
            </footer>
          </blockquote>
        </div>
        <div className="absolute inset-0">
          <FloatingPaths position={1} />
          <FloatingPaths position={-1} />
        </div>
      </div>
      <div className="bg-[radial-gradient(70%_70%_at_30%_0%,--theme(--color-foreground/.15),transparent)] relative flex min-h-screen flex-col justify-center p-4">
        <Button asChild className="absolute top-7 left-5" variant="ghost">
          <NavLink to="/">
            <ChevronLeftIcon />
            Home
          </NavLink>
        </Button>
        <div className="mx-auto space-y-4 sm:w-sm">
          <div className="flex items-center gap-2">
            <Logo link={false} />
            <ModeToggle />
          </div>
          <div className="flex flex-col space-y-1">
            <h1 className="text-2xl font-bold tracking-wide">
              Sign In or Join Now!
            </h1>
            <p className="text-muted-foreground text-base">
              login or create your Lexa account.
            </p>
          </div>

          <AuthProviders />

          <div className="flex w-full items-center justify-center">
            <div className="bg-border h-px w-full" />
            <span className="text-muted-foreground px-2 text-xs">OR</span>
            <div className="bg-border h-px w-full" />
          </div>

          {isLogin ? <LoginForm /> : <RegisterForm />}

          <div className="grid grid-cols-2 gap-2">
            <Button
              className="w-full"
              variant={isLogin ? "secondary" : "ghost"}
              onClick={() => setIsLogin(true)}
              aria-pressed={isLogin}
            >
              Sign In
            </Button>
            <Button
              className="w-full"
              variant={!isLogin ? "secondary" : "ghost"}
              onClick={() => setIsLogin(false)}
              aria-pressed={!isLogin}
            >
              Sign Up
            </Button>
          </div>

          <p className="text-muted-foreground mt-8 text-sm">
            By clicking continue, you agree to our{" "}
            <span className="hover:text-primary underline underline-offset-4">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="hover:text-primary underline underline-offset-4">
              Privacy Policy
            </span>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
