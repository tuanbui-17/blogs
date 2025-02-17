import { QuoteLeftIcon } from "@/components/Icon/QuoteLeftIcon";
import { QuoteRightIcon } from "@/components/Icon/QuoteRightIcon";
import { QUOTE } from "@/interface/block.interface";
import React from "react";

const Quote = ({ body, title }: Readonly<QUOTE>) => {
  return (
    <div>
      <div className="mx-12 flex flex-col items-center lg:mx-0">
        {title && <h2 className="my-4">{title}</h2>}
        <div className="relative text-center">
          <QuoteLeftIcon
            className="absolute -left-4 top-0 h-4 w-4 dark:text-white-700"
            fill="currentColor"
          />
          <p className="px-6 py-1 text-lg italic">{body}</p>
          <QuoteRightIcon
            className="absolute -right-4 bottom-0 h-4 w-4 dark:text-white-700"
            fill="currentColor"
          />
        </div>
        <span className="my-2 h-1 w-12 rounded-lg dark:bg-accent-400"></span>
      </div>
    </div>
  );
};

export default Quote;
