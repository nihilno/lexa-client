import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { CheckCircle, Clock, Hourglass } from "lucide-react";

function Status({
  status,
  size = "sm",
}: {
  status: Invoice["status"];
  size?: "sm" | "lg";
}) {
  const icon = {
    Draft: <Hourglass className="size-4!" />,
    Pending: <Clock className="size-4!" />,
    Paid: <CheckCircle className="size-4!" />,
  };

  return (
    <Badge
      className={cn(
        "hidden px-4 text-sm sm:flex",
        size === "lg" && "h-10 animate-pulse sm:text-base!",
      )}
    >
      {icon[status]}
      {status}
    </Badge>
  );
}

export default Status;
