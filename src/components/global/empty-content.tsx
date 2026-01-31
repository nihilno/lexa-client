import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { ArrowUpRightIcon, FileText, LayersPlus, Upload } from "lucide-react";
import CTAButton from "../buttons/cta-button";

export function EmptyFallback() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FileText />
        </EmptyMedia>
        <EmptyTitle>No Invoices Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any invoices yet. Get started by creating
          your first invoice.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        <CTAButton
          label="New Invoice"
          icon={<LayersPlus className="size-5" />}
        />
        <Button variant="outline">
          <Upload />
          Import Invoice
        </Button>
      </EmptyContent>
      <Button
        variant="link"
        asChild
        className="text-muted-foreground"
        size="sm"
      >
        <a href="#">
          Learn More <ArrowUpRightIcon />
        </a>
      </Button>
    </Empty>
  );
}

export default EmptyFallback;
