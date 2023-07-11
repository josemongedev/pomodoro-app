import { useRef, useState } from "react";
import { ReactComponent as IconSettings } from "../assets/icon-settings.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { EStateName, useTimerConfig } from "../hooks/useTimerConfig";
import { TSettings } from "../types/timerTypes";
import Settings from "./Settings";
import TimerDisplay from "./TimerDisplay";

function Timer() {
  const {
    timerState,
    minutesInterval,
    onSetPomodoro,
    onSetShortBreak,
    onSetLongBreak,
    setTimerConfig,
  } = useTimerConfig();

  const dialogRef = useRef<HTMLDialogElement>(null);
  const onDialogClose = () => dialogRef?.current?.close();
  const [settings, setSettings] = useState<TSettings>({
    duration: { pomodoro: 25, short: 5, long: 15 },
    font: "kumbh-sans",
    color: "lightorange",
  });

  const onModalShow = () => dialogRef.current?.showModal();
  const onSettingsChange = (settings: TSettings) => {
    setSettings(() => settings);
    setTimerConfig(settings.duration);
  };

  const buttonStyle =
    "h-12 font-bold text-xs tablet:text-sm px-5 tablet:px-[25] rounded-3xl w-max";
  const buttonClickedClasses = `${buttonStyle} bg-${settings.color} text-navy px-[23px]`;
  const buttonInactiveClasses = `${buttonStyle} opacity-40 hover:opacity-100`;
  const getButtonStyleByState = (state: EStateName) =>
    timerState === state ? buttonClickedClasses : buttonInactiveClasses;

  return (
    <article
      className={`container pt-8 pb-12 tablet:pb-[103px] tablet:pt-[80px] 2xl flex items-center flex-col font-${settings.font}`}
    >
      <div className="flex flex-col gap-[45px] tablet:gap-[55px] items-center mb-12 tablet:mb-[109px]">
        <Logo />
        <nav className="relative w-[327px]  tablet:w-[373px] bg-blueblack text-bluegray rounded-full flex justify-between py-2 px-1.5 tablet:px-2">
          <button
            onClick={onSetPomodoro}
            className={getButtonStyleByState(EStateName.Pomodoro)}
          >
            pomodoro
          </button>
          <button
            onClick={onSetShortBreak}
            className={getButtonStyleByState(EStateName.ShortBreak)}
          >
            short break
          </button>
          <button
            onClick={onSetLongBreak}
            className={getButtonStyleByState(EStateName.LongBreak)}
          >
            long break
          </button>
        </nav>
      </div>

      <TimerDisplay
        minutesInterval={minutesInterval}
        accentColor={settings.color}
      />

      <button
        className="mt-[79px] tablet:mt-36 desktop:mt-[63px] relative"
        onClick={onModalShow}
      >
        <IconSettings />
      </button>
      <Settings
        ref={dialogRef}
        onDialogClose={onDialogClose}
        onSettingsChange={onSettingsChange}
        settings={settings}
      />
    </article>
  );
}

export default Timer;
