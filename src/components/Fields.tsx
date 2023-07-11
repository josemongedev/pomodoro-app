import { PropsWithChildren } from "react";

type Props = {
  legend: string;
};

const Fields = ({ legend, children }: PropsWithChildren<Props>) => {
  return (
    <fieldset className="w-full  tablet:flex tablet:justify-between tablet:items-center tablet:flex-wrap">
      <div className="w-full tablet:w-auto uppercase text-xxs-sp tablet:text-sm-sp font-bold text-center  leading-none">
        {legend}
      </div>
      <div className="mt-[18px] tablet:mt-[0px] flex justify-center gap-4 ">
        {children}
      </div>
    </fieldset>
  );
};

export default Fields;
