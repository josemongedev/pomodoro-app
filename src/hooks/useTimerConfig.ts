import { useState, useEffect } from "react";

export enum EStateName {
  Pomodoro,
  ShortBreak,
  LongBreak,
}
type TTimerState =
  | EStateName.Pomodoro
  | EStateName.ShortBreak
  | EStateName.LongBreak;

export const useTimerConfig = () => {
  const [minutesInterval, setMinutesInterval] = useState(1);
  const [timerState, setTimerState] = useState<TTimerState>(
    EStateName.Pomodoro
  );
  const [timerConfig, setTimerConfig] = useState({
    pomodoro: 25,
    short: 5,
    long: 15,
  });

  const onSetShortBreak = () => setTimerState(EStateName.ShortBreak);
  const onSetLongBreak = () => setTimerState(EStateName.LongBreak);
  const onSetPomodoro = () => setTimerState(EStateName.Pomodoro);

  useEffect(() => {
    switch (timerState) {
      case EStateName.Pomodoro:
      default:
        setMinutesInterval(timerConfig.pomodoro);
        break;
      case EStateName.ShortBreak:
        setMinutesInterval(timerConfig.short);
        break;
      case EStateName.LongBreak:
        setMinutesInterval(timerConfig.long);
        break;
    }
  }, [timerState, timerConfig]);

  return {
    timerState,
    minutesInterval,
    setTimerConfig,
    onSetPomodoro,
    onSetShortBreak,
    onSetLongBreak,
  };
};
