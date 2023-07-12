import moment from "moment";
import { useLayoutEffect, useState } from "react";

export const useTimerControls = (minutesInterval: number) => {
  // INTERNAL TIMER STATES
  // Starts paused and non-idle, meaning it's awaiting until user starts(resumes) the timer
  const [pause, setPause] = useState(true);
  const [idle, setIdle] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(
    moment.duration(minutesInterval, "minutes")
  );

  // CONTROL HANDLERS
  const onTimerStart = () => {
    setPause(() => false);
    setIdle(() => false);
  };

  const onTimerPause = () => {
    setPause(() => true);
    setIdle(() => false);
  };

  const onTimerRestart = () => {
    setPause(() => true);
    setIdle(() => false);
    setTimeRemaining(() => moment.duration(minutesInterval, "minutes"));
  };

  // UPDATES EFFECTS
  useLayoutEffect(() => {
    // When minutesInterval changes(via Settings dialog box) reset everything
    setPause(() => true);
    setIdle(() => false);
    setTimeRemaining(() => moment.duration(minutesInterval, "minutes"));
  }, [minutesInterval]);

  useLayoutEffect(() => {
    const updateTimer = () => {
      if (!pause) {
        // Clone to avoid undesired effects
        const remaining = timeRemaining.clone();
        remaining.subtract(1, "seconds");
        if (remaining.get("seconds") === 0 && remaining.get("minutes") === 0) {
          setIdle(() => true);
          clearInterval(token);
        }
        setTimeRemaining(() => remaining); // Update timer
      }
    };
    const token = setInterval(updateTimer, 1000);
    return () => clearInterval(token);
  }, [pause, timeRemaining]);

  return {
    onTimerPause,
    onTimerRestart,
    onTimerStart,
    minutes: timeRemaining.get("minutes"),
    seconds: timeRemaining.get("seconds"),
    idle,
    pause,
  };
};
