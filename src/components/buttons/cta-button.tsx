import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Link } from "react-router";

function CTAButton({ label, icon, href }: CTAButtonProps) {
  return (
    <Button
      type="button"
      size="lg"
      className="dark:bg-foreground/6 dark:text-foreground dark:hover:bg-foreground/10 focus:ring-foreground/20 bg-foreground/80 rounded-full backdrop-blur-2xl focus:ring-2 dark:border"
      aria-label={label}
      asChild
    >
      {href ? (
        <Link to={href ?? "#"}>
          {icon ? icon : <PlusCircle className="size-4 sm:size-5" />}
          <span className="font-medium sm:text-base">{label}</span>
        </Link>
      ) : (
        <div className="cursor-pointer">
          {icon ? icon : <PlusCircle className="size-4 sm:size-5" />}
          <span className="font-medium sm:text-base">{label}</span>
        </div>
      )}
    </Button>
  );
}

export default CTAButton;
