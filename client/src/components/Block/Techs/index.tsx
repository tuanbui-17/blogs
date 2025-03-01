import Tooltip from "@/components/Tooltip";
import { TECHS } from "@/interface/block.interface";
import Image from "next/image";
import React from "react";

const Techs = ({ techs }: Readonly<TECHS>) => {
  return (
    <div>
      <p className="text-xl font-bold text-accent-500 mb-4">TECHS</p>
      <div className="flex gap-4">
        {techs.map((tech) => (
          <div key={tech.id} className="flex items-center gap-x-4">
            <Tooltip text={tech.name}>
              <a href={tech.docUrl} target="_blank" rel="noreferrer">
                <Image
                  src={tech.imageUrl}
                  alt={tech.name}
                  width={32}
                  height={32}
                  className="h-[32px]"
                />
              </a>
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techs;
