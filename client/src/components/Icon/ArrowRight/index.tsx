import { IconProps } from "@/interface/icon.interface";

export function ArrowRightIcon(props: Readonly<IconProps>) {
  const { className, fill, width = "20", height = "20" } = props;

  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill={fill}
      aria-hidden="true"
      data-slot="icon"
      width={width}
      height={height}
    >
      <path
        fillRule="evenodd"
        d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
