import { useState, useEffect } from "react";
import useOnlineStatus from "../../hooks/useOnlineStatus";
import "./NetworkStatus.scss";

const NetworkStatus = () => {
  const status = useOnlineStatus();
  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    if (!status) {
      setShowStatus(true);
    }
  }, [status]);

  const handleAnimationEnd = () => {
    if (status) {
      setShowStatus(false);
    }
  };

  const statusClass = status ? "bg-green-500 animete-hide" : "bg-red-500";

  return showStatus ? (
    <p
      className={`text-center fixed top-0 left-0 h-6 flex items-center justify-center z-[101] w-full text-white text-sm ${statusClass}`}
      onAnimationEnd={handleAnimationEnd}
    >
      {status ? "online" : "offline"}
    </p>
  ) : null;
};

export default NetworkStatus;
