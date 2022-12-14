import { SVGProps } from "react";

type PatternCircleProps = SVGProps<SVGSVGElement>;

export const PatternCircle = ({ ...props }: PatternCircleProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="129" height="129" {...props}>
      <circle
        cx="830.5"
        cy="585.5"
        r="64"
        fill="none"
        stroke="#FFF"
        transform="translate(-766 -521)"
      />
    </svg>
  );
};
