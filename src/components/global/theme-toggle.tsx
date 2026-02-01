import { Laptop, Moon, Sun } from "lucide-react";
import KeyboardShortcut from "./keyboard-shortcut";
import { useTheme } from "./theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  function cycleTheme() {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  }

  const iconClasses = "size-4 transition-all duration-300 ease-in-out scale-0";

  const icon =
    theme === "light" ? (
      <Sun className={`${iconClasses} scale-100 opacity-100`} />
    ) : theme === "dark" ? (
      <Moon className={`${iconClasses} scale-100 opacity-100`} />
    ) : (
      <Laptop className={`${iconClasses} scale-100 opacity-100`} />
    );

  return (
    <button
      type="button"
      className="bg-card focus-visible:ring-ring h-9 cursor-pointer rounded-md border p-1 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
      onClick={cycleTheme}
    >
      <div className="flex items-center justify-between gap-1">
        {icon} <KeyboardShortcut character="m" />
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
