import { IconProps } from "@/interface/icon.interface";

export function ArrowLeftIcon(props: Readonly<IconProps>) {
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
        d="M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
