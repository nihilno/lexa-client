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
        "px-4 text-sm",
        size === "lg" && "h-10 w-full sm:w-30 sm:text-base!",
        size === "sm" && "hidden sm:flex",
      )}
    >
      {icon[status]}
      {status}
    </Badge>
  );
}

export default Status;
