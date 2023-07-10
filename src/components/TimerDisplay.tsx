import React from "react";
import { useTimerControl } from "../hooks/useTimerControl";

type Props = { minutesInterval: number };

const TimerDisplay = React.memo(({ minutesInterval }: Props) => {
  const {
    minutes,
    seconds,
    onTimerPause,
    onTimerRestart,
    onTimerStart,
    pause,
    idle,
    timerFinished,
  } = useTimerControl(minutesInterval);

  const addLeadZeroPad = (timeUnit: number) =>
    timeUnit < 10 ? `0${timeUnit}` : timeUnit;

  const hideStartButton = () =>
    !timerFinished && (idle || pause) ? "" : "hidden";
  const hidePauseButton = () => (pause || idle ? "hidden" : "");
  const hideRestartButton = () => (timerFinished && idle ? "" : "hidden");

  return (
    <section className="w-[300px] tablet:w-[410px] aspect-square rounded-full bg-blueblack grid place-items-center shadow-lg">
      <div className="w-full bg-gradient-to-br from-black to-blue rounded-full grid place-items-center p-[22px]">
        <div className="w-full aspect-square bg-blueblack rounded-full grid grid-rows-3 grid-cols-1 place-items-center">
          <span className="row-start-2">
            {addLeadZeroPad(minutes)}:{addLeadZeroPad(seconds)}
          </span>
          <div className="row-start-3">
            <button
              onClick={onTimerStart}
              className={`uppercase ${hideStartButton()}`}
            >
              start
            </button>
            <button
              onClick={onTimerPause}
              className={`uppercase ${hidePauseButton()}`}
            >
              pause
            </button>
            <button
              onClick={onTimerRestart}
              className={`uppercase ${hideRestartButton()}`}
            >
              restart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

export default TimerDisplay;
