import { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer); // Cleanup interval
    }
  }, [time]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-gray-800">
      <h1 className="text-xl font-medium mb-4">do nothing for a minute</h1>
      <div className="text-6xl font-bold font-mono">{formatTime(time)}</div>
    </div>
  );
};

export default Timer;
