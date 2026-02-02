import { Loader2 } from "lucide-react";

function Loader() {
  return (
    <div className="center absolute">
      <Loader2 className="animate-spin" />
    </div>
  );
}

export default Loader;
