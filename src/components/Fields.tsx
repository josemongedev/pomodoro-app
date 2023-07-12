import { PropsWithChildren } from "react";

type Props = {
  legend: string;
};

const Fields = ({ legend, children }: PropsWithChildren<Props>) => {
  return (
    <fieldset className="w-full flex flex-col tablet:flex-row tablet:justify-between tablet:items-center tablet:flex-wrap gap-[18px] tablet:gap-0">
      <legend className="float-left w-full tablet:w-auto uppercase text-xxs-sp tablet:text-sm-sp font-bold text-center  leading-none">
        {legend}
      </legend>
      <div className="flex justify-center gap-4 ">{children}</div>
    </fieldset>
  );
};

export default Fields;
