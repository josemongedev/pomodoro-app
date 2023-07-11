type Props = {
  name: string;
  value: number;
};

const MinutesInput = ({ name, value }: Props) => {
  return (
    <label
      htmlFor={name}
      className="w-full flex justify-between items-center tablet:flex-col tablet:gap-[10px] tablet:items-start"
    >
      <span className="text-xs font-bold text-navy opacity-40">
        {name.split("-").join(" ")}
      </span>
      <input
        min={1}
        max={60}
        className="bg-whitegray rounded-[10px] w-[140px] h-10 tablet:h-12 p-4 font-bold text-md text-blueblack"
        type="number"
        name={name}
        id={name}
        defaultValue={value}
      />
    </label>
  );
};

export default MinutesInput;
