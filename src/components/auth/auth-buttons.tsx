import { Button } from "@/components/ui/button";
import useSession from "@/hooks/use-session";
import { NavLink } from "react-router";
import Logout from "./logout";

function AuthButtons() {
  const { session, isPending } = useSession();

  return (
    <div>
      {session ? (
        <Logout isPending={isPending} />
      ) : (
        <Button asChild>
          <NavLink to="auth">Get Started</NavLink>
        </Button>
      )}
    </div>
  );
}

export default AuthButtons;
