import { useState } from "react";
import { ReactComponent as IconClose } from "../assets/icon-close.svg";
import { TColorOptions, TFontOptions, TSettings } from "../types/timerTypes";
import ColorRadio from "./ColorRadio";
import Fields from "./Fields";
import FontRadio from "./FontRadio";
import MinutesInput from "./MinutesInput";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSettingsChange: (settings: TSettings) => void;
  settings: TSettings;
};

const Settings = ({ open, setOpen, onSettingsChange, settings }: Props) => {
  const [newSettings, setNewSettings] = useState(settings);
  const onCloseClick = () => setOpen(false);

  const onConfigApply: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSettingsChange(newSettings);
  };

  const onColorChange = (color: TColorOptions) =>
    setNewSettings(() => ({ ...settings, color }));
  const onFontChange = (font: TFontOptions) =>
    setNewSettings(() => ({ ...settings, font }));

  return (
    <>
      {open ? (
        <dialog
          open
          className="top-[46px] w-[327px] h-[549px] rounded-[15px] py-6 px-0 z-50"
        >
          <div className="px-6 flex justify-between">
            <h1 className="text-2xl font-bold">Settings</h1>
            <button onClick={onCloseClick}>
              <IconClose />
            </button>
          </div>
          <hr className="h-[1px] mt-7 mb-6 bg-hrwhite border-0" />
          <form
            className="px-6 flex items-center flex-col"
            onSubmit={onConfigApply}
          >
            <Fields legend="Time (minutes)">
              <MinutesInput
                name="pomodoro"
                value={settings.duration.pomodoro}
              />
              <MinutesInput
                name="short-break"
                value={settings.duration.shortBreak}
              />
              <MinutesInput
                name="long-break"
                value={settings.duration.longBreak}
              />
            </Fields>

            <hr className="w-full h-[1px] mt-6 mb-6 bg-hrwhite border-0" />

            <Fields legend="Font">
              <div className="flex justify-center gap-4">
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
              </div>
            </Fields>

            <hr className="w-full h-[1px] mt-6 mb-4 bg-hrwhite border-0" />

            <Fields legend="Color">
              <div className="flex justify-center gap-4">
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
              </div>
            </Fields>

            <button className="relative mt-8 rounded-[26.5px] bg-lightorange w-[140px] h-[53px] text-white text-xl font-bold hover:bg-lighterorange">
              Apply
            </button>
          </form>
        </dialog>
      ) : null}
    </>
  );
};

export default Settings;
