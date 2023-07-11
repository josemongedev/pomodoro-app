type Props = {
  name: string;
  initial: number;
};

const MinutesInput = ({ name, initial }: Props) => {
  return (
    <label htmlFor={name} className="w-full flex justify-between items-center">
      <span className="text-xs font-bold text-navy opacity-40">
        {name.split("-").join(" ")}
      </span>
      <input
        className="bg-whitegray rounded-[10px] w-[140px] h-10 p-4 font-bold text-md text-blueblack"
        type="number"
        name={name}
        id={name}
        defaultValue={initial}
      />
    </label>
  );
};

export default MinutesInput;
