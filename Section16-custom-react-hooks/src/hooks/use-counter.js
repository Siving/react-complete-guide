import { useState, useEffect } from "react";

// forwards = true: add. Forwards = false: subtract. Default is forwards = true
const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]); // Best practice to have forwards as dependency

  return counter;
};

export default useCounter;
