import { formatPrice } from "@/api/invoices/utilts";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckSquare, CreditCard, FileText, List } from "lucide-react";

function InvoiceTable({
  items,
  totalPayment,
}: {
  items: Item[];
  totalPayment: number;
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-muted-foreground text-sm">
            <div className="flex items-center gap-1">
              <FileText className="size-4" />
              Item Name
            </div>
          </TableHead>
          <TableHead className="text-muted-foreground text-sm">
            <div className="flex items-center gap-1">
              <List className="size-4" />
              Qty.
            </div>
          </TableHead>
          <TableHead className="text-muted-foreground text-sm">
            <div className="flex items-center gap-1">
              <CreditCard className="size-4" />
              Price
            </div>
          </TableHead>
          <TableHead className="text-muted-foreground flex w-full text-sm">
            <div className="ml-auto flex items-center gap-1">
              <CheckSquare className="size-4" />
              Total
            </div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map(({ id, name, quantity, price }) => (
          <TableRow key={id}>
            <TableCell>{name}</TableCell>
            <TableCell>{quantity}</TableCell>
            <TableCell>{formatPrice(price)}</TableCell>
            <TableCell className="text-right">
              {formatPrice(quantity * price)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow className="font-bold">
          <TableCell colSpan={3}>Amount due</TableCell>
          <TableCell className="text-right">
            {formatPrice(totalPayment)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

export default InvoiceTable;
