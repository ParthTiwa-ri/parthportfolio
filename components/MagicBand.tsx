import React from "react";

export default function MagicBand() {
  return (
    <div className="w-full">
      <div className="flex relative z-10 justify-center w-full">
        <div className=" md:basis-[400px] basis-[350px] h-[45px]  md:h-[56px] wand-shaft">
          <div className="wand-streak w-full h-[4px]"></div>
        </div>
        <div className="md:h-[56px] wand-tip h-[45] basis-[75px]  md:basis-[110px]"></div>
      </div>
    </div>
  );
}
