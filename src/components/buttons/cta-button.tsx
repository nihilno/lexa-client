import { LayersPlus } from "lucide-react";
import { Button } from "../ui/button";

function CTAButton() {
  return (
    <Button
      size="lg"
      className="dark:bg-foreground/6 dark:text-foreground dark:hover:bg-foreground/10 focus:ring-foreground/20 rounded-full backdrop-blur-2xl focus:ring-2 dark:border"
    >
      <div>
        <LayersPlus className="size-6" />
      </div>
      <h3 className="text-base font-medium">New Invoice</h3>
    </Button>
  );
}

export default CTAButton;
