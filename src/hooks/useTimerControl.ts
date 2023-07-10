import { useState, useMemo, useEffect } from "react";
import { useTimeRemaining } from "./useTimeRemaining";

const MILLISECONDS_IN_SECOND = 1000;
const SECONDS_IN_MINUTE = 60;
const MILLISECONDS_IN_MINUTE = MILLISECONDS_IN_SECOND * SECONDS_IN_MINUTE;

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
    const newInterval =
      currentInterval === 0
        ? minutesInterval * MILLISECONDS_IN_MINUTE
        : currentInterval;
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
    setCurrentInterval(minutesInterval * MILLISECONDS_IN_MINUTE);
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
