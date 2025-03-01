import React from "react";

const Tooltip = ({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="relative group">
      {children}
      <div className="absolute -top-11 left-1/2 transform -translate-x-1/2 bg-zinc-700 text-white text-sm font-medium capitalize px-3 py-[6px] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {text}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-zinc-700 rotate-45"></div>
      </div>
    </div>
  );
};

export default Tooltip;
