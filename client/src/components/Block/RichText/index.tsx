import { RICHTEXT } from "@/interface/block.interface";
import React, { JSX } from "react";
import ReactMarkdown from "react-markdown";

const anchor = (title: string) => {
  return title.replace(/\s/g, "-").toLowerCase();
};

const createHeading = (Tag: keyof JSX.IntrinsicElements) => {
  return (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    return <Tag id={anchor(String(props.children))}>{props.children}</Tag>;
  };
};

const RichText = ({ body }: Readonly<RICHTEXT>) => {
  return (
    <div className="rich-text py-6">
      <ReactMarkdown
        components={{
          h1: createHeading("h1"),
          h2: createHeading("h2"),
          h3: createHeading("h3"),
          h4: createHeading("h4"),
          h5: createHeading("h5"),
          h6: createHeading("h6"),
        }}
      >
        {body}
      </ReactMarkdown>
    </div>
  );
};

export default RichText;
