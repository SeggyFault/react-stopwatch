import {useState, useEffect, useRef} from "react";

function Stopwatch() {

  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {

  }, [isRunning]);

  function start() {

  }

  function stop() {

  }

  function reset() {

  }

  function formatTime() {
    return `00:00:00`
  }

  return(
    <div>
      <div>{formatTime()}</div>
      <div>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default Stopwatch;