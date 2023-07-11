import "./ColorRadio.css";
type Props = {
  color: string;
};

const ColorRadio = ({ color }: Props) => {
  return (
    <label
      htmlFor={color}
      className={`w-10 aspect-square grid place-items-center rounded-full bg-${color} hover:cursor-pointer`}
    >
      <input
        type="radio"
        name={"color"}
        id={color}
        value={color}
        hidden
        defaultChecked={"lightorange" === color}
      />
      <span className="check-icon">✔</span>
    </label>
  );
};

export default ColorRadio;
