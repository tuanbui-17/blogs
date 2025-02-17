import { IconProps } from "@/interface/icon.interface";

export function ChevronRightIcon(props: Readonly<IconProps>) {
  const { className, fill, width = "20", height = "20" } = props;

  return (
    <svg
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m14 8-4 4 4 4"
      />
    </svg>
  );
}
