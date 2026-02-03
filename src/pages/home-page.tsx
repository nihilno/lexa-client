import { Button } from "@/components/ui/button";
import { Link } from "react-router";

function HomePage() {
  return (
    <div className="flex min-h-dvh items-center justify-center gap-2">
      <Button>
        <Link to="/invoices">Invoices</Link>
      </Button>
      <Button>
        <Link to="/auth">Auth</Link>
      </Button>
      <Button>
        <Link to="/xd">404</Link>
      </Button>
    </div>
  );
}

export default HomePage;
