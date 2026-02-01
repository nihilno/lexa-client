import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CARD_STYLE } from "@/constants";
import { Calendar, CheckCircle, ChevronsRight } from "lucide-react";
import { Link } from "react-router";

function InvoiceCard() {
  return (
    <Card className={CARD_STYLE}>
      <CardContent className="flex items-center gap-8 text-xs sm:text-sm md:gap-16 md:text-base lg:gap-24">
        <h3 className="hidden sm:block">#RT3080</h3>
        <p className="flex w-fit items-center gap-1 whitespace-nowrap">
          <Calendar className="size-4.5 shrink-0" /> Due 19 Aug 2021
        </p>
        <p>$1,800.90</p>
        <Badge className="hidden px-4 text-sm sm:flex">
          <CheckCircle />
          Paid
        </Badge>
        <Button
          asChild
          size="icon-sm"
          variant="outline"
          className="group ml-auto sm:w-20"
          aria-label="View invoice details"
        >
          <Link to="/invoice">
            <ChevronsRight className="size-5 transition-all duration-300 ease-in-out group-hover:translate-x-2 sm:size-6" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default InvoiceCard;
