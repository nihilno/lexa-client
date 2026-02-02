import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Clock, Hourglass, Search } from "lucide-react";

function InvoiceFilters() {
  return (
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
    </div>
  );
}

export default InvoiceFilters;
