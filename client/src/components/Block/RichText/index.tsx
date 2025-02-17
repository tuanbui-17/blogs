import { RICHTEXT } from "@/interface/block.interface";
import React from "react";
import ReactMarkdown from "react-markdown";

const RichText = ({ body }: Readonly<RICHTEXT>) => {
  return (
    <div className="rich-text py-6">
      <ReactMarkdown>{body}</ReactMarkdown>
    </div>
  );
};

export default RichText;
