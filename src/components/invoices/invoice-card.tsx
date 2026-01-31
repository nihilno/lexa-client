import { Search } from "lucide-react";
import { Link } from "react-router";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

function InvoiceCard() {
  return (
    <Card className="bg-card/50 dark:hover:bg-card/85 border-border/50 dark:hover:border-border/85 hover:bg-foreground/2 border shadow backdrop-blur-2xl transition">
      <CardContent className="flex items-center gap-24">
        <h3>#RT3080</h3>
        <p>Due 19 Aug 2021</p>
        <p>$1,800.90</p>
        <Badge className="px-4 text-sm">Paid</Badge>
        <Button
          asChild
          size="icon-sm"
          variant="outline"
          className="ml-auto w-20"
        >
          <Link to="#">
            <Search />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default InvoiceCard;
