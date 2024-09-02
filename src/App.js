import { useRef } from "react";
import { formatTime } from "./formatTime";
import useTimer from "./useTimer";

// use useref to access to an DOM
function App() {
  const { time, startTimer, stopTimer, resetTimer, active } = useTimer(0);
  const timer = formatTime(time);

  return (
    <div className="App container">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{timer}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button className="button" ref={active} onClick={startTimer}>
            Start
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
