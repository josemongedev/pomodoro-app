import { forwardRef, useState } from "react";
import { ReactComponent as IconClose } from "../assets/icon-close.svg";
import { TColorOptions, TFontOptions, TSettings } from "../types/timerTypes";
import ColorRadio from "./ColorRadio";
import Fields from "./Fields";
import FontRadio from "./FontRadio";
import MinutesInput from "./MinutesInput";

type Props = {
  onDialogClose: () => void;
  onSettingsChange: (settings: TSettings) => void;
  settings: TSettings;
};

const Settings = forwardRef<HTMLDialogElement, Props>(
  ({ onDialogClose, onSettingsChange, settings }, dialogRef) => {
    const [newSettings, setNewSettings] = useState(settings);

    const onConfigApply: React.FormEventHandler<HTMLFormElement> = (e) => {
      e.preventDefault();
      const configFormData = new FormData(e.currentTarget);

      onSettingsChange({
        ...newSettings,
        // Only storing the new timer durations until Apply button is clicked to avoid unnecesary re-renders
        duration: {
          pomodoro: Number(configFormData.get("pomodoro")),
          short: Number(configFormData.get("short-break")),
          long: Number(configFormData.get("long-break")),
        },
      });
      onDialogClose();
    };

    const onColorChange = (color: TColorOptions) =>
      setNewSettings(() => ({ ...settings, color }));
    const onFontChange = (font: TFontOptions) =>
      setNewSettings(() => ({ ...settings, font }));

    return (
      <dialog
        ref={dialogRef}
        className="w-[327px] h-[549px] tablet:w-[540px] tablet:h-[464px] rounded-[15px] py-6 px-0 tablet:py-[34px] z-50 overflow-visible backdrop:bg-modal"
      >
        <div className="px-6 tablet:px-10 flex justify-between">
          <h1 className="text-2xl tablet:text-3xl font-bold">Settings</h1>
          <button onClick={onDialogClose}>
            <IconClose />
          </button>
        </div>
        <hr className="h-[1px] mt-7 tablet:mt-[31px] mb-6 bg-hrwhite border-0" />
        <form
          className="px-6 tablet:px-10 flex items-center flex-col"
          onSubmit={onConfigApply}
        >
          <Fields legend="Time (minutes)">
            <div className="w-full mt-[26px] tablet:w-[462px] tablet:flex-row flex flex-col gap-2 tablet:gap-[22px] flex-grow">
              <MinutesInput
                name="pomodoro"
                value={settings.duration.pomodoro}
              />
              <MinutesInput
                name="short-break"
                value={settings.duration.short}
              />
              <MinutesInput name="long-break" value={settings.duration.long} />
            </div>
          </Fields>

          <hr className="w-full h-[1px] mt-6 mb-6 bg-hrwhite border-0" />

          <Fields legend="Font">
            <FontRadio
              key="kumbh-sans"
              fontName="kumbh-sans"
              selectedFont={settings.font}
              onFontChange={onFontChange}
            />
            <FontRadio
              key="roboto-slab"
              fontName="roboto-slab"
              selectedFont={settings.font}
              onFontChange={onFontChange}
            />
            <FontRadio
              key="space-mono"
              fontName="space-mono"
              selectedFont={settings.font}
              onFontChange={onFontChange}
            />
          </Fields>

          <hr className="w-full h-[1px] mt-6 mb-4 tablet:mb-6 bg-hrwhite border-0" />

          <Fields legend="Color">
            <ColorRadio
              color="lightorange"
              selectedColor={settings.color}
              onColorChange={onColorChange}
            />
            <ColorRadio
              color="skyblue"
              selectedColor={settings.color}
              onColorChange={onColorChange}
            />
            <ColorRadio
              color="fuchsia"
              selectedColor={settings.color}
              onColorChange={onColorChange}
            />
          </Fields>

          <button className="relative mt-8 rounded-[26.5px] bg-lightorange w-[140px] h-[53px] text-white text-xl font-bold hover:bg-lighterorange">
            Apply
          </button>
        </form>
      </dialog>
    );
  }
);

export default Settings;
