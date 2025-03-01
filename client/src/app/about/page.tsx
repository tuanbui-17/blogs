import BlockRenderer from "@/components/Block/BlockRenderer";
import { aboutData } from "@/data/about.data";
import React from "react";

const Page = () => {
  return (
    <div>
      <BlockRenderer blocks={aboutData.blocks} />
    </div>
  );
};

export default Page;
