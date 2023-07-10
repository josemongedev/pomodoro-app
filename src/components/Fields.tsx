import { PropsWithChildren } from "react";

type Props = {
  legend: string;
};

const Fields = ({ legend, children }: PropsWithChildren<Props>) => {
  return (
    <fieldset>
      <legend>{legend}</legend>
      <div>{children}</div>
    </fieldset>
  );
};

export default Fields;
