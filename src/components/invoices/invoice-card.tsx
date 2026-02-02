import { formatId, formatPrice } from "@/api/invoices/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CARD_STYLE } from "@/constants";
import { format } from "date-fns";
import { Calendar, ChevronsRight } from "lucide-react";
import { Link } from "react-router";
import Status from "./status";

function InvoiceCard({ invoice }: { invoice: Invoice }) {
  const { id, paymentDue, status, totalPayment } = invoice;

  return (
    <Card className={CARD_STYLE}>
      <CardContent className="grid grid-cols-[1fr_1fr_1fr] items-center gap-[5vw] sm:grid-cols-[1fr_1fr_1fr_1fr_1fr] sm:gap-4">
        <h3 className="hidden sm:block">{formatId(id)}</h3>
        <p className="flex w-fit items-center gap-1 whitespace-nowrap">
          <Calendar className="size-4.5 shrink-0" /> Due{" "}
          {format(paymentDue, "MM/dd/yyyy")}
        </p>
        <p>{formatPrice(totalPayment)}</p>
        <Status status={status} />
        <Button
          asChild
          size="icon-sm"
          variant="outline"
          className="group ml-auto sm:w-20"
          aria-label="View invoice details"
        >
          <Link to={`/invoices/${id}`}>
            <ChevronsRight className="size-5 transition-all duration-300 ease-in-out group-hover:translate-x-2 sm:size-6" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default InvoiceCard;
