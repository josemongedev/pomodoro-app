type Props = {
  name: string;
};

const ColorRadio = ({ name }: Props) => {
  return (
    <label htmlFor={name}>
      <input type="radio" name={name} id={name} />
    </label>
  );
};

export default ColorRadio;
