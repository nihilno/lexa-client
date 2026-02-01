import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CARD_STYLE } from "@/constants";
import { CheckSquare, CreditCard, FileText, List } from "lucide-react";

function InvoiceDetailed() {
  return (
    <Card className={CARD_STYLE}>
      <CardHeader className="flex flex-col justify-between gap-8 border-b border-dashed sm:flex-row sm:items-center sm:gap-0">
        <article className="line-clamp-2">
          <h2 className="text-lg font-bold">#XM9141</h2>
          <h3 className="text-muted-foreground">Graphic Design</h3>
        </article>
        <ul className="text-muted-foreground line-clamp-4 text-sm">
          <li>19 Union Terrace</li>
          <li>London</li>
          <li>E1 3EZ</li>
          <li>United Kingdom</li>
        </ul>
      </CardHeader>
      <CardContent>
        <section className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-0">
          <div className="flex flex-col justify-between gap-2">
            <div>
              <Label className="text-muted-foreground text-sm">
                Invoice Date
              </Label>
              <p className="font-medium">08 Aug 2023</p>
            </div>
            <div>
              <Label className="text-muted-foreground text-sm">
                Payment Due
              </Label>
              <p className="font-medium">08 Aug 2024</p>
            </div>
          </div>
          <div>
            <Label className="text-muted-foreground text-sm">Bill to</Label>
            <p className="font-medium">Alex Grim</p>
            <ul className="text-muted-foreground mt-4 text-sm">
              <li>Church Way</li>
              <li>Bradford</li>
              <li>BD1 9PB</li>
              <li>United Kingdom</li>
            </ul>
          </div>
          <div>
            <Label className="text-muted-foreground text-sm">Sent to</Label>
            <p className="font-medium">alexgrim@mail.com</p>
          </div>
        </section>
      </CardContent>
      <CardFooter className="bg-angled-lines border-border/50 mx-6 mt-8 rounded-xl border p-6">
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
            <TableRow className="text-foreground/90">
              <TableCell>Banner Design</TableCell>
              <TableCell>1</TableCell>
              <TableCell>$156.00</TableCell>
              <TableCell className="text-right">$156.00</TableCell>
            </TableRow>
            <TableRow className="text-foreground/90">
              <TableCell>Email Design</TableCell>
              <TableCell>2</TableCell>
              <TableCell>$200.00</TableCell>
              <TableCell className="text-right">$400.00</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow className="font-bold">
              <TableCell colSpan={3}>Amount due</TableCell>
              <TableCell className="text-right">$556.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardFooter>
    </Card>
  );
}

export default InvoiceDetailed;
