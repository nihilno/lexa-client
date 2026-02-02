import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Hourglass } from "lucide-react";

function Status({ status }: { status: Invoice["status"] }) {
  const icon = {
    Draft: <Hourglass className="size-4!" />,
    Pending: <Clock className="size-4!" />,
    Paid: <CheckCircle className="size-4!" />,
  };

  return (
    <Badge className="hidden px-4 text-sm sm:flex">
      {icon[status]}
      {status}
    </Badge>
  );
}

export default Status;
