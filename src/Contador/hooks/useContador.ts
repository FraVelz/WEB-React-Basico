import { useEffect, useState } from "react";

export function useContador() {
  const [count, setCount] = useState(0);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    if (!alert) return;
    const timer = setTimeout(() => setAlert(false), 5000);
    return () => clearTimeout(timer);
  }, [alert]);

  const incrementar = () => {
    setCount(c => c + 1);
    setAlert(false);
  };

  const decrementar = () => {
    if (count > 0) {
      setCount(c => c - 1);
      setAlert(false);
    } else {
      setAlert(true);
    }
  };

  return { count, alert, incrementar, decrementar };
}
