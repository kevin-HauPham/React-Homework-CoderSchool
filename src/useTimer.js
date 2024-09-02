import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);
  const isStart = false;
  const active = useRef(isStart);

  const refInterval = useRef();

  const startTimer = () => {
    if (active.current) {
      refInterval.current = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
      active.current.disabled = true;
    }
  };
  const stopTimer = () => {
    clearInterval(refInterval.current);

    active.current.disabled = false;
  };
  const resetTimer = () => {
    setTime(0);
    active.current.disabled = false;
  };

  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
