import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth";
import { Loader2, LogOut } from "lucide-react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

function Logout({ isPending }: { isPending: boolean }) {
  const navigation = useNavigate();

  async function handleLogout() {
    try {
      const { error } = await authClient.signOut();
      if (error) {
        console.error("Logout error:", error);
        toast.error(error.message || "Something went wrong during logout.");
        return;
      }

      navigation("/auth");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Something went wrong during logout.");
    }
  }

  return (
    <Button onClick={handleLogout} disabled={isPending}>
      {isPending ? (
        <Loader2 className="size-4 animate-spin" />
      ) : (
        <>
          <LogOut />
          Logout
        </>
      )}
    </Button>
  );
}

export default Logout;
