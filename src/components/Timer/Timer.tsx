import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(60); // Initial timer value
  const [isComplete, setIsComplete] = useState(false); // Track timer completion

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer); // Cleanup interval
    } else {
      setIsComplete(true); // Mark as complete
    }
  }, [time]);

  const handleRestart = () => {
    setTime(60);
    setIsComplete(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      {!isComplete ? (
        <>
          <h1 className="text-xl font-medium mb-4">do nothing for a minute</h1>
          <div className="text-6xl font-bold font-mono">{`00:${time
            .toString()
            .padStart(2, "0")}`}</div>
        </>
      ) : (
        <>
          <h2 className="text-lg font-semibold mb-4">that wasn't so bad, was it?</h2>
          <button
            onClick={handleRestart}
            className="bg-black text-white py-2 px-4 rounded-lg mb-8 hover:bg-gray-800"
          >
            do nothing again
          </button>
          <hr className="w-1/4 border-t-2 border-gray-300 mb-8" />
          <p className="text-md font-medium mb-4">want to do something?</p>
          <div className="flex gap-4">
            <button className="border border-gray-800 py-2 px-4 rounded-lg hover:bg-gray-100">
              read
            </button>
            <button className="border border-gray-800 py-2 px-4 rounded-lg hover:bg-gray-100">
              write
            </button>
            <button className="border border-gray-800 py-2 px-4 rounded-lg hover:bg-gray-100">
              talk
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Timer;
