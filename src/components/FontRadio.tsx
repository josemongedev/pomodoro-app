type Props = { fontName: string };

const FontRadio = ({ fontName }: Props) => {
  return (
    <label htmlFor={fontName} className="cursor-pointer">
      <input
        type="radio"
        name={"fontName"}
        id={fontName}
        className="peer"
        hidden
        value={fontName}
        defaultChecked={fontName === "roboto-slab"}
      />
      <div
        className={`font-${fontName} font-bold w-10 aspect-square grid place-items-center rounded-full bg-whitegray peer-checked:bg-blueblack peer-checked:text-white`}
      >
        Aa
      </div>
    </label>
  );
};

export default FontRadio;
