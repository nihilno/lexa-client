import Loader from "@/components/global/loader";
import useSession from "@/hooks/use-session";
import { Navigate, Outlet } from "react-router";

function RequireAuth() {
  const { session, isPending } = useSession();
  const isAuthenticated = !!session;

  if (isPending) return <Loader />;
  if (!isAuthenticated) return <Navigate to="/auth" replace />;
  return <Outlet />;
}

export default RequireAuth;
