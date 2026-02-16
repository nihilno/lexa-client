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
    <div className="center absolute">
      <Loader2 className="animate-spin" />
      {showMessage && (
        <p className="animate-fadeIn opacity-0">
          First load may take a couple of seconds, since API is dormant.
        </p>
      )}
    </div>
  );
}

export default Loader;
