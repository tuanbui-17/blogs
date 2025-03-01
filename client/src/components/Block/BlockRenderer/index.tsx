import { BLOCK } from "@/interface/block.interface";
import React from "react";
import RichText from "../RichText";
import Quote from "../Quote/Quote";
import Techs from "../Techs";

const blockRenderer = (block: BLOCK, index: number) => {
  switch (block.__component) {
    case "shared.rich-text":
      return <RichText {...block} key={index} />;
    case "shared.quote":
      return <Quote {...block} key={index} />;
    case "shared.techs":
      return <Techs {...block} key={index} />;
    default:
      return null;
  }
};

const BlockRenderer = ({ blocks }: { blocks: BLOCK[] }) => {
  return blocks.map((block, index) => blockRenderer(block, index));
};

export default BlockRenderer;
