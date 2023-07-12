import React, { useEffect, useRef } from "react";
import { useTimerControls } from "../hooks/useTimerControls";
import RadialProgressbar from "./RadialProgressbar";
import { TColorOptions } from "../types/timerTypes";

type Props = { minutesInterval: number; accentColor: TColorOptions };

const TimerDisplay = React.memo(({ minutesInterval, accentColor }: Props) => {
  const {
    minutes,
    seconds,
    onTimerPause,
    onTimerRestart,
    onTimerStart,
    pause,
    idle,
  } = useTimerControls(minutesInterval);

  const addLeadZeroPad = (timeUnit: number) =>
    timeUnit < 10 ? `0${timeUnit}` : timeUnit;

  const hideStartButton = () => (idle || !pause ? "hidden" : "");
  const hidePauseButton = () => (idle || pause ? "hidden" : "");
  const hideRestartButton = () => (!idle ? "hidden" : "");

  const buttonClickedRef = useRef<HTMLAudioElement>(null);
  const alarmCompleteRef = useRef<HTMLAudioElement>(null);

  const onButtonClicked = (onTimerHandler: () => void) => {
    buttonClickedRef.current
      ?.play()
      .then(() => {
        onTimerHandler();
      })
      .catch(console.error);
  };

  useEffect(() => {
    const playTimerComplete = async () => {
      if (idle && minutes === 0 && seconds === 0)
        await alarmCompleteRef.current?.play();
    };
    playTimerComplete().catch(console.error);
  }, [idle, minutes, seconds]);

  return (
    <section className="w-[300px] tablet:w-[410px] aspect-square rounded-full bg-blueblack grid place-items-center shadow-lg">
      <div className="w-full bg-gradient-to-br from-black to-blue rounded-full grid place-items-center p-[22px]">
        <div className="w-full aspect-square bg-blueblack rounded-full grid grid-rows-6 grid-cols-1 place-items-center">
          <span className="row-start-3 row-end-5 text-4xl tablet:text-5xl desktop:text-6xl font-bold">
            {addLeadZeroPad(minutes)}:{addLeadZeroPad(seconds)}
          </span>
          <div className="w-full flex justify-center row-start-5 relative z-10">
            <button
              onClick={() => onButtonClicked(onTimerStart)}
              className={`uppercase hover:text-${accentColor} font-bold text-md-sp tablet:text-xl-sp ${hideStartButton()}`}
            >
              &nbsp;start
            </button>
            <button
              onClick={() => onButtonClicked(onTimerPause)}
              className={`uppercase hover:text-${accentColor} font-bold text-md-sp tablet:text-xl-sp ${hidePauseButton()}`}
            >
              &nbsp;pause
            </button>
            <button
              onClick={() => onButtonClicked(onTimerRestart)}
              className={`uppercase hover:text-${accentColor} font-bold text-md-sp tablet:text-xl-sp ${hideRestartButton()}`}
            >
              &nbsp;restart
            </button>
            <audio
              ref={buttonClickedRef}
              src="/pomodoro-app/audio/button-clicked.mp3"
              hidden
            ></audio>
            <audio
              ref={alarmCompleteRef}
              src="/pomodoro-app/audio/alarm-complete.mp3"
              hidden
            ></audio>
          </div>
          <RadialProgressbar
            minutes={minutes}
            seconds={seconds}
            interval={minutesInterval}
            strokeSvg={`stroke-${accentColor}`}
          />
        </div>
      </div>
    </section>
  );
});

export default TimerDisplay;
