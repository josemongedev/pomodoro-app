import { PropsWithChildren } from "react";

type Props = {
  legend: string;
};

const Fields = ({ legend, children }: PropsWithChildren<Props>) => {
  return (
    <fieldset className="w-full">
      <legend className="uppercase text-xxs-sp font-bold text-center w-full leading-none">
        {legend}
      </legend>
      <div className="mt-[18px] flex flex-col gap-2">{children}</div>
    </fieldset>
  );
};

export default Fields;
