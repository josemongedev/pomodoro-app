type Props = {
  name: string;
  initial: number;
};

const MinutesInput = ({ name, initial }: Props) => {
  return (
    <label htmlFor={name}>
      <input type="number" name={name} id={name} defaultValue={initial} />
    </label>
  );
};

export default MinutesInput;
