import { useMemo } from "react";

type Props = {
  minutes: number;
  seconds: number;
  interval: number;
  strokeSvg: string;
};

const radius = 317 / 2;
const cirumference = radius * 2 * Math.PI;

const RadialProgressbar = ({
  minutes,
  seconds,
  interval,
  strokeSvg,
}: Props) => {
  const progressOffset = useMemo(() => {
    const percent = (minutes * 60 + seconds) / (interval * 60);
    return cirumference - cirumference * percent;
  }, [interval, minutes, seconds]);
  const svgWidth = 339;
  return (
    <svg
      className="absolute scale-[0.735] tablet:scale-100"
      width={svgWidth}
      height={svgWidth}
      viewBox={`0 0 ${svgWidth} ${svgWidth}`}
    >
      <circle
        cx={svgWidth / 2}
        cy={svgWidth / 2}
        strokeWidth={"11px"}
        r={radius}
        className="fill-none stroke-blueblack"
      />
      <circle
        cx={svgWidth / 2}
        cy={svgWidth / 2}
        strokeWidth={"11px"}
        r={radius}
        className={`fill-none ${strokeSvg}`}
        style={{
          strokeDasharray: cirumference,
          strokeDashoffset: progressOffset,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
        transform={`rotate(-90 ${svgWidth / 2} ${svgWidth / 2})`}
      />
    </svg>
  );
};

export default RadialProgressbar;
