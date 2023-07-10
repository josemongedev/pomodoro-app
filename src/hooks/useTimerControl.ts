import { useState, useMemo, useEffect } from "react";
import { useTimeRemaining } from "./useTimeRemaining";

export const useTimerControl = (minutesInterval: number) => {
  const [currentInterval, setCurrentInterval] = useState(0);
  const [startTime, setStartTime] = useState<Date>(new Date());
  const [pause, setPause] = useState(false);
  const [idle, setIdle] = useState(true);

  const time = useMemo(() => {
    return {
      start: startTime,
      stop: new Date(startTime.getTime() + currentInterval),
    };
  }, [currentInterval, startTime]);
  const { minutes, seconds, timerFinished } = useTimeRemaining(time, pause);

  const onTimerStart = () => {
    setIdle(false);
    setPause(false);
    setStartTime(new Date());
    console.log(currentInterval);
    const newInterval =
      currentInterval === 0 ? minutesInterval * 60000 : currentInterval;
    setCurrentInterval(newInterval);
  };

  const onTimerPause = () => {
    setPause(true);
    const currentTime = new Date();
    setCurrentInterval(time.stop.getTime() - currentTime.getTime());
  };

  const onTimerRestart = () => {
    setIdle(false);
    setPause(false);
    setStartTime(new Date());
    setCurrentInterval(minutesInterval * 60000);
  };

  useEffect(() => {
    timerFinished && setIdle(true);
  }, [timerFinished]);

  return {
    onTimerPause,
    onTimerRestart,
    onTimerStart,
    minutes,
    seconds,
    idle,
    pause,
    timerFinished,
  };
};
