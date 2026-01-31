import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "../ui/button";

function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      type="button"
      size="icon"
      variant="ghost"
      className="group"
      onClick={() => navigate(-1)}
    >
      <ChevronLeft className="size-7 transition-all duration-500 ease-in-out group-hover:-translate-x-1.5" />
    </Button>
  );
}

export default BackButton;
