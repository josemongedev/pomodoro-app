import { useEffect, useState } from "react";

const MILLISECONDS_IN_SECOND = 1000;
const SECONDS_IN_MINUTE = 60;
const MILLISECONDS_IN_MINUTE = MILLISECONDS_IN_SECOND * SECONDS_IN_MINUTE;

export const useTimerControls = (minutesInterval: number) => {
  // Just a units convertion so that it works better with dates in javascript
  const millisecondsInterval = minutesInterval * MILLISECONDS_IN_MINUTE;
  const [stopTime, setStopTime] = useState<Date>(new Date());
  // Starts paused and non-idle, meaning it's awaiting until user starts(resumes) the timer
  const [pause, setPause] = useState(true);
  const [idle, setIdle] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState<Date>(
    new Date(millisecondsInterval)
  );

  // When minutesInterval changes(via Setting dialog box reset everything)
  useEffect(() => {
    setPause(() => true);
    setIdle(() => false);
    setTimeRemaining(new Date(millisecondsInterval));
  }, [millisecondsInterval]);

  useEffect(() => {
    const updateTimer = () => {
      if (!pause) {
        const remaining = new Date(
          // Lower bound for time remaining to 0 minutes and 0 seconds
          Math.max(0, stopTime.getTime() - new Date().getTime())
        );
        if (remaining.getMinutes() === 0 && remaining.getSeconds() === 0) {
          setIdle(() => true);
          clearInterval(token);
        }
        setTimeRemaining(remaining); // Update timer
      }
    };
    const token = setInterval(updateTimer, 1000);
    return () => clearInterval(token);
  }, [pause, stopTime]);

  const onTimerStart = () => {
    setIdle(() => false);
    setPause(() => false);
    setStopTime(() => new Date(new Date().getTime() + timeRemaining.getTime()));
  };

  const onTimerPause = () => {
    setPause(() => true);
    setIdle(() => false);
  };

  const onTimerRestart = () => {
    setIdle(() => false);
    setPause(() => false);
    setStopTime(() => new Date(new Date().getTime() + millisecondsInterval));
    setTimeRemaining(() => new Date(millisecondsInterval));
  };

  return {
    onTimerPause,
    onTimerRestart,
    onTimerStart,
    minutes: timeRemaining.getMinutes(),
    seconds: timeRemaining.getSeconds(),
    idle,
    pause,
  };
};
