import { PlusCircle } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../ui/button";

function CTAButton({
  label,
  icon,
  href,
}: {
  label: string;
  icon?: React.ReactNode;
  href?: string;
}) {
  return (
    <Button
      type="button"
      size="lg"
      className="dark:bg-foreground/6 dark:text-foreground dark:hover:bg-foreground/10 focus:ring-foreground/20 bg-foreground/80 rounded-full backdrop-blur-2xl focus:ring-2 dark:border"
      asChild
    >
      <Link to={href ?? "#"}>
        {icon ? icon : <PlusCircle className="size-5" />}
        <h3 className="text-base font-medium">{label}</h3>
      </Link>
    </Button>
  );
}

export default CTAButton;
