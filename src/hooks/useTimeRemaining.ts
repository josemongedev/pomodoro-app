import { useEffect, useState } from "react";

interface TimerParams {
  start: Date;
  stop: Date;
}
export const useTimeRemaining = (
  { start, stop }: TimerParams,
  pause: boolean
) => {
  const [timerFinished, setTimerFinished] = useState(false);
  const [remainingTime, setRemainingTime] = useState({
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause) {
        // Timer is either finished or hasn't started
        if (start.getTime() === stop.getTime()) {
          setTimerFinished(false);
          clearInterval(interval);
          return;
        }
        const currentTime = new Date();
        if (stop.getTime() <= currentTime.getTime()) {
          setRemainingTime({ minutes: 0, seconds: 0 });
          setTimerFinished(true);
          clearInterval(interval);
          return;
        }
        const timeDiff = new Date(stop.getTime() - currentTime.getTime()); //Get seconds
        setRemainingTime({
          minutes: timeDiff.getMinutes(),
          seconds: timeDiff.getSeconds(),
        });
        setTimerFinished(false);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [start, stop, pause]);

  return { ...remainingTime, timerFinished };
};
