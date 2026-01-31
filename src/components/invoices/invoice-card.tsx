import { CARD_STYLE } from "@/constants";
import { Calendar, ChevronsRight } from "lucide-react";
import { Link } from "react-router";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

function InvoiceCard() {
  return (
    <Card className={CARD_STYLE}>
      <CardContent className="flex items-center gap-24">
        <h3>#RT3080</h3>
        <p className="flex items-center gap-1">
          <Calendar className="size-4.5" /> Due 19 Aug 2021
        </p>
        <p>$1,800.90</p>
        <Badge className="px-4 text-sm">Paid</Badge>
        <Button
          asChild
          size="icon-sm"
          variant="outline"
          className="group ml-auto w-20"
        >
          <Link to="/invoice">
            <ChevronsRight className="size-6 transition-all duration-300 ease-in-out group-hover:translate-x-2" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default InvoiceCard;
