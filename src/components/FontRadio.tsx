type Props = { fontName: string };

const FontRadio = ({ fontName }: Props) => {
  const kebabName = fontName.toLowerCase().split(" ").join("-");
  return (
    <div>
      <span>{fontName}</span>
      <label htmlFor={kebabName}>
        <input type="radio" name={kebabName} id={kebabName} />
        <span className={`font-${kebabName}`}>Aa</span>
      </label>
    </div>
  );
};

export default FontRadio;
