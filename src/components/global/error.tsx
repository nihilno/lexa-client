import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { SearchX } from "lucide-react";
import { Link } from "react-router";

function Error() {
  return (
    <div className="center absolute">
      <Empty className="border border-dashed">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <SearchX />
          </EmptyMedia>
          <EmptyTitle>This invoice is long gone</EmptyTitle>
          <EmptyDescription>
            We couldn&apos;t find the invoice you were looking for. It might
            have been deleted or the link is broken.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button variant="outline" size="sm" asChild>
            <Link to="/invoices">Back to my Invoices</Link>
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  );
}

export default Error;
