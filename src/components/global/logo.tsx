import { Link } from "react-router";
import { Button } from "../ui/button";

function Logo() {
  return (
    <Button className="text-sm" size="icon" variant="outline" asChild>
      <Link to="/">MP</Link>
    </Button>
  );
}

export default Logo;
