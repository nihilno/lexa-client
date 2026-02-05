import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

function Logout() {
  const navigation = useNavigate();

  async function handleLogout() {
    try {
      const { error } = await authClient.signOut();
      if (error) {
        console.error("Logout error:", error);
        toast.error(error.message || "Something went wrong during logout.");
        return;
      }

      toast.success("You have been logged out.");
      navigation("/auth");
    } catch (error) {
      console.error("Logout error:", error);
    }
  }

  return (
    <Button onClick={handleLogout}>
      <LogOut />
      Logout
    </Button>
  );
}

export default Logout;
