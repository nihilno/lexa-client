import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CheckCircle,
  ChevronDown,
  Clock,
  Hourglass,
  Search,
} from "lucide-react";
import InvoiceCard from "./invoice-card";

function InvoicesContainer() {
  return (
    <section className="space-y-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <InvoiceCard key={index} />
      ))}
      <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-x-8">
        <div className="relative w-full">
          <Input
            placeholder="Search by name..."
            aria-label="Search invoices by name"
            className="hover:border-foreground/25 pl-8.5 text-sm transition sm:text-base!"
          />
          <Search className="text-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
        </div>

        <Select>
          <SelectTrigger
            aria-label="Filter invoices by status"
            className="hover:border-foreground/25 w-full! text-sm transition sm:text-base!"
          >
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
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

        <Button
          size="icon"
          variant="ghost"
          title="Load more"
          aria-label="Load more invoices"
          className="group border-muted-foreground/35 hover:border-foreground/40 mt-16 w-full rounded-xl border border-dashed sm:col-span-2"
        >
          <ChevronDown className="slow text-foreground/75 size-8 group-hover:translate-y-2" />
        </Button>
      </div>
    </section>
  );
}

export default InvoicesContainer;
