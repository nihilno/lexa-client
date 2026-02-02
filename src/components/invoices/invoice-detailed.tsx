import { formatId } from "@/api/invoices/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { CARD_STYLE } from "@/constants";
import { format } from "date-fns";
import InvoiceTable from "./invoice-table";

function InvoiceDetailed({ invoice }: { invoice: InvoiceWithItems }) {
  const {
    id: invoiceId,
    description,
    createdAt,
    paymentDue,
    recipientName,
    recipientEmail,
    recipientStreet,
    recipientCity,
    recipientPostalCode,
    recipientCountry,
    senderStreet,
    senderCity,
    senderPostalCode,
    senderCountry,
    items,
    totalPayment,
  } = invoice;

  return (
    <Card className={CARD_STYLE}>
      <CardHeader className="flex flex-col justify-between gap-8 border-b border-dashed sm:flex-row sm:items-center sm:gap-0">
        <article className="line-clamp-2">
          <h2 className="text-lg font-bold">{formatId(invoiceId)}</h2>
          <h3 className="text-muted-foreground capitalize">{description}</h3>
        </article>
        <ul className="text-muted-foreground line-clamp-4 text-sm">
          <li>{senderStreet}</li>
          <li>{senderCity}</li>
          <li>{senderPostalCode}</li>
          <li>{senderCountry}</li>
        </ul>
      </CardHeader>
      <CardContent>
        <section className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-0">
          <div className="flex flex-col justify-between gap-2">
            <div>
              <Label className="text-muted-foreground text-sm">
                Invoice Date
              </Label>
              <p className="font-medium">{format(createdAt, "dd MMM yyyy")}</p>
            </div>
            <div>
              <Label className="text-muted-foreground text-sm">
                Payment Due
              </Label>
              <p className="font-medium">{format(paymentDue, "dd MMM yyyy")}</p>
            </div>
          </div>
          <div>
            <Label className="text-muted-foreground text-sm">Bill to</Label>
            <p className="font-medium">{recipientName}</p>
            <ul className="text-muted-foreground mt-4 text-sm">
              <li>{recipientStreet}</li>
              <li>{recipientCity}</li>
              <li>{recipientPostalCode}</li>
              <li>{recipientCountry}</li>
            </ul>
          </div>
          <div>
            <Label className="text-muted-foreground text-sm">Sent to</Label>
            <p className="font-medium">{recipientEmail}</p>
          </div>
        </section>
      </CardContent>

      <CardFooter className="bg-angled-lines border-border/50 mx-6 mt-8 rounded-xl border p-6">
        <InvoiceTable items={items} totalPayment={totalPayment} />
      </CardFooter>
    </Card>
  );
}

export default InvoiceDetailed;
