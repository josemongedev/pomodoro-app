import ColorRadio from "./ColorRadio";
import Fields from "./Fields";
import FontRadio from "./FontRadio";
import MinutesInput from "./MinutesInput";
import { ReactComponent as IconClose } from "../assets/icon-close.svg";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Settings = ({ open, setOpen }: Props) => {
  const onCloseClick = () => setOpen(false);
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
          <form className="px-6 flex items-center flex-col">
            <Fields legend="Time (minutes)">
              <MinutesInput name="pomodoro" initial={25} />
              <MinutesInput name="short-break" initial={5} />
              <MinutesInput name="long-break" initial={15} />
            </Fields>

            <hr className="w-full h-[1px] mt-6 mb-6 bg-hrwhite border-0" />

            <Fields legend="Font">
              <div className="flex justify-center gap-4">
                <FontRadio key="roboto-slab" fontName="roboto-slab" />
                <FontRadio key="kumbh-sans" fontName="kumbh-sans" />
                <FontRadio key="space-mono" fontName="space-mono" />
              </div>
            </Fields>

            <hr className="w-full h-[1px] mt-6 mb-4 bg-hrwhite border-0" />

            <Fields legend="Color">
              <div className="flex justify-center gap-4">
                <ColorRadio color="lightorange" />
                <ColorRadio color="skyblue" />
                <ColorRadio color="fuchsia" />
              </div>
            </Fields>

            <button className="relative mt-8 rounded-[26.5px] bg-lightorange w-[140px] h-[53px] text-white text-xl font-bold">
              Apply
            </button>
          </form>
        </dialog>
      ) : null}
    </>
  );
};

export default Settings;
