import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./global/theme-provider";
import { Toaster } from "./ui/sonner";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {children}
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default Providers;
