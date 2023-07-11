import { TFontOptions } from "../types/timerTypes";

type Props = {
  fontName: TFontOptions;
  selectedFont: TFontOptions;
  onFontChange: (font: TFontOptions) => void;
};

const FontRadio = ({ fontName, selectedFont, onFontChange }: Props) => {
  return (
    <label htmlFor={fontName} className="cursor-pointer">
      <input
        type="radio"
        name={"fontName"}
        id={fontName}
        className="peer"
        hidden
        value={fontName}
        defaultChecked={fontName === selectedFont}
        onChange={() => onFontChange(fontName)}
      />
      <div
        className={`font-${fontName} border-white hover:outline hover:outline-offset-[5px]  hover:outline-1 hover:outline-whitegray  font-bold w-10 aspect-square grid place-items-center rounded-full bg-whitegray peer-checked:bg-blueblack peer-checked:text-white`}
      >
        Aa
      </div>
    </label>
  );
};

export default FontRadio;
