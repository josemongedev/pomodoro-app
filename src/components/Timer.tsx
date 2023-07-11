import { useState } from "react";
import { ReactComponent as IconSettings } from "../assets/icon-settings.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { EStateName, useTimerConfig } from "../hooks/useTimerConfig";
import Settings from "./Settings";
import TimerDisplay from "./TimerDisplay";

function Timer() {
  const {
    timerState,
    minutesInterval,
    onSetPomodoro,
    onSetShortBreak,
    onSetLongBreak,
  } = useTimerConfig();

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const onModalToggle = () => setModalOpen((open) => !open);

  const buttonStyle =
    "h-12 font-bold text-xs tablet:text-sm px-5 tablet:px-[25] rounded-3xl w-max";
  const buttonClickedClasses = `${buttonStyle} bg-lightorange text-navy px-[23px]`;
  const buttonInactiveClasses = `${buttonStyle} opacity-40`;
  const getButtonStyleByState = (state: EStateName) =>
    timerState === state ? buttonClickedClasses : buttonInactiveClasses;

  return (
    <article className="container pt-8 pb-12 tablet:pb-[103px] tablet:pt-[80px] 2xl flex items-center flex-col">
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

      <TimerDisplay minutesInterval={1} />

      <button
        className="mt-[79px] tablet:mt-36 desktop:mt-[63px] relative"
        onClick={onModalToggle}
      >
        <IconSettings />
      </button>

      <Settings open={modalOpen} setOpen={setModalOpen} />
    </article>
  );
}

export default Timer;
