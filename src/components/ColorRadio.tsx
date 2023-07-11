import { TColorOptions } from "../types/timerTypes";
type Props = {
  color: TColorOptions;
  selectedColor: TColorOptions;
  onColorChange: (color: TColorOptions) => void;
};

const ColorRadio = ({ color, selectedColor, onColorChange }: Props) => {
  return (
    <label
      htmlFor={color}
      className={`w-10 aspect-square grid place-items-center rounded-full bg-${color} hover:cursor-pointer hover:outline hover:outline-offset-[5px] hover:outline-1 hover:outline-whitegray `}
    >
      <input
        type="radio"
        className="peer"
        name={"color"}
        id={color}
        value={color}
        hidden
        defaultChecked={color === selectedColor}
        onChange={() => onColorChange(color)}
      />
      <span className="invisible peer-checked:visible">✔</span>
    </label>
  );
};

export default ColorRadio;
