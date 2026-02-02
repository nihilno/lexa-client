import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes, how long data is fresh.
      gcTime: 1000 * 60 * 10, // 10 minutes, how long data stays in cache.
      retry: 1, // total attempts: 2
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 0, // we don't want to retry on failed mutations, mutation logic itself will take care of it
    },
  },
});
