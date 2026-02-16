import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

function Loader() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 4000);

    return () => clearTimeout(timer); // cleanup on unmount
  }, []);

  return (
    <div className="center absolute flex flex-col items-center gap-2">
      <Loader2 className="animate-spin" />
      {showMessage && (
        <p className="animate-fadeIn opacity-0">
          First request may take up to 15 seconds while the server wakes up.
        </p>
      )}
    </div>
  );
}

export default Loader;
