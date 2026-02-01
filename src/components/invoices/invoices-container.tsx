import {
  CheckCircle,
  ChevronDown,
  Clock,
  Hourglass,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import InvoiceCard from "./invoice-card";

function InvoicesContainer() {
  return (
    <section className="space-y-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <InvoiceCard key={index} />
      ))}
      <div className="flex items-center justify-between">
        <div className="relative">
          <Input
            placeholder="Search by name..."
            aria-label="Search invoices by name"
            className="hover:border-foreground/25 max-w-sm min-w-60 pl-8 transition"
          />
          <Search className="text-foreground absolute top-1/2 left-2 size-4 -translate-y-1/2" />
        </div>
        <Button
          size="icon"
          variant="ghost"
          title="Load more"
          aria-label="Load more invoices"
          className="group translate-y-8"
        >
          <ChevronDown className="slow size-8 group-hover:translate-y-2" />
        </Button>
        <Select>
          <SelectTrigger
            aria-label="Filter invoices by status"
            className="hover:border-foreground/25 relative max-w-sm min-w-60 pl-8 transition"
          >
            <SelectValue placeholder="Filter by status" />
            <SlidersHorizontal className="text-foreground absolute top-1/2 left-2 size-4 -translate-y-1/2" />
          </SelectTrigger>{" "}
          <SelectContent>
            {/* pending: clock, paid: checkcircle, draft: hourglass  */}
            <SelectItem value="paid">
              <CheckCircle className="text-foreground" /> Paid
            </SelectItem>
            <SelectItem value="pending">
              <Clock className="text-foreground" /> Pending
            </SelectItem>
            <SelectItem value="draft">
              <Hourglass className="text-foreground" /> Draft
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </section>
  );
}

export default InvoicesContainer;
