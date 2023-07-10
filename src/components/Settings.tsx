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
        <dialog open>
          <h1 className="font">Settings</h1>
          <button onClick={onCloseClick}>
            <IconClose />
          </button>
          <hr />
          <form>
            <Fields legend="Time (minutes)">
              <MinutesInput name="pomodoro" initial={25} />
              <MinutesInput name="short-break" initial={5} />
              <MinutesInput name="long-break" initial={15} />
            </Fields>

            <Fields legend="Font">
              <FontRadio key="roboto-slab" fontName="Roboto Slab" />
              <FontRadio key="kumbh-sans" fontName="Kumbh Sans" />
              <FontRadio key="space-mono" fontName="Space Mono" />
            </Fields>

            <Fields legend="Color">
              <ColorRadio name="lightorange" />
              <ColorRadio name="skyblue" />
              <ColorRadio name="fuchsia" />
            </Fields>

            <button>Apply</button>
          </form>

          <button>Icon settings</button>
        </dialog>
      ) : null}
    </>
  );
};

export default Settings;
