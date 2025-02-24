import { IconProps } from "@/interface/icon.interface";

export function ArrowUp(props: Readonly<IconProps>) {
  const { className, fill, width = "20", height = "20" } = props;

  return (
    <svg
      className={className}
      fill={fill}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 6v13m0-13 4 4m-4-4-4 4"
      />
    </svg>
  );
}
