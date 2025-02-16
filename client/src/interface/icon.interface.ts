import { SVGAttributes } from "react";

export type IconProps = Pick<
  SVGAttributes<SVGElement>,
  "className" | "width" | "height" | "fill"
>;