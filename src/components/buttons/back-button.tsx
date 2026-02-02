import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";

function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      type="button"
      size="icon"
      variant="ghost"
      className="group hidden sm:block"
      onClick={() => navigate("/")}
      aria-label="Go back"
    >
      <ChevronLeft className="slow size-7 group-hover:-translate-x-1.5" />
    </Button>
  );
}

export default BackButton;
