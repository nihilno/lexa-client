import useSession from "./use-session";

function useUserId() {
  const { session } = useSession();
  const userId = session?.user?.id;
  return userId;
}

export default useUserId;
