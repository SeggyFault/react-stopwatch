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
    <div className="flex flex-col h-screen justify-center items-center gap-4">
      <div className="text-9xl">{formatTime()}</div>
      <div className="flex gap-2">
        <button className="px-4 py-2 border border-green-800 rounded-md bg-green-600 hover:bg-green-700 text-white text-3xl" onClick={start}>Start</button>
        <button className="px-4 py-2 border border-red-800 rounded-md bg-red-600 hover:bg-red-700 text-white text-3xl" onClick={stop}>Stop</button>
        <button className="px-4 py-2 border border-blue-800 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-3xl" onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default Stopwatch;