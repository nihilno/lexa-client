import { authClient } from "@/lib/auth";

const { useSession: hook } = authClient;

function useSession() {
  const { data: session, isPending, error, isRefetching, refetch } = hook();
  return {
    session,
    isPending,
    error,
    isRefetching,
    refetch,
  };
}

export default useSession;
