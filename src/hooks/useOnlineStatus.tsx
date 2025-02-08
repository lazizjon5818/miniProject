import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [online, setOnline] = useState<boolean>(navigator.onLine);
  const [firstEnter, setFirstEnter] = useState<boolean>(true);

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    if (firstEnter) {
      setFirstEnter(false);
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [firstEnter]);

  return { online, firstEnter };
};

export default useOnlineStatus;
