import { Link } from "react-router";
import { Button } from "../ui/button";

function Logo({ link = true }: { link?: boolean }) {
  return (
    <Button className="text-sm" size="icon" variant="outline" asChild>
      {link ? <Link to="/">MP</Link> : <span>MP</span>}
    </Button>
  );
}

export default Logo;
