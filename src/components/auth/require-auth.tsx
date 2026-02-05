import Loader from "@/components/global/loader";
import useSession from "@/hooks/use-session";
import { Navigate, Outlet, useLocation } from "react-router";

function RequireAuth() {
  const { session, isPending } = useSession();
  const isAuthenticated = !!session;

  const location = useLocation();

  if (isPending) return <Loader />;
  if (!isAuthenticated)
    return <Navigate to="/auth" state={{ from: location }} replace />;
  return <Outlet />;
}

export default RequireAuth;
