import { useMemo } from "react";

type Props = {
  minutes: number;
  seconds: number;
  interval: number;
  strokeSvg: string;
};

const SVG_WIDTH = 340; //tablet and desktop width
const RADIUS = 317 / 2;
const CIRCUMFERENCE = RADIUS * 2 * Math.PI;

const RadialProgressbar = ({
  minutes,
  seconds,
  interval,
  strokeSvg,
}: Props) => {
  const progressOffset = useMemo(() => {
    const percent = (minutes * 60 + seconds) / (interval * 60);
    return CIRCUMFERENCE - CIRCUMFERENCE * percent;
  }, [interval, minutes, seconds]);
  return (
    <svg
      className="absolute scale-[0.735] tablet:scale-100"
      width={SVG_WIDTH}
      height={SVG_WIDTH}
      viewBox={`0 0 ${SVG_WIDTH} ${SVG_WIDTH}`}
    >
      <circle
        cx={SVG_WIDTH / 2}
        cy={SVG_WIDTH / 2}
        strokeWidth={"11px"}
        r={RADIUS}
        className="fill-none stroke-blueblack"
      />
      <circle
        cx={SVG_WIDTH / 2}
        cy={SVG_WIDTH / 2}
        strokeWidth={"11px"}
        r={RADIUS}
        className={`fill-none ${strokeSvg}`}
        style={{
          strokeDasharray: CIRCUMFERENCE,
          strokeDashoffset: progressOffset,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
        transform={`rotate(-90 ${SVG_WIDTH / 2} ${SVG_WIDTH / 2})`}
      />
    </svg>
  );
};

export default RadialProgressbar;
