import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth";
import { NavLink } from "react-router";
import Logout from "./logout";
const { useSession } = authClient;

function AuthButtons() {
  const { data: session, isPending, error } = useSession();
  console.log(session, isPending, error);

  return (
    <div>
      {session ? (
        <Logout />
      ) : (
        <Button>
          <NavLink to="auth">Get Started</NavLink>
        </Button>
      )}
    </div>
  );
}

export default AuthButtons;
