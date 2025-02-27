import React from "react";
import { Pawlogo, PawLogoReverse } from "../../Icons";

function PetsHomeLogo() {
  return (
    <div>
      {/* Title */}
      <div className=" flex relative justify-center gap-3 z-10 text-secondary-content place-items-end">
        {/* Vets */}
        
          <PawLogoReverse className="w-[90px] h-[90px] text-secondary left-[700px] -top-12 z-0" />
          <div className="text-8xl font-bold z-10 text-primary" style={{ fontStyle: "italic" }}> Pets </div>
       
        {/* find */}
        <div className="flex z-100 text-6xl  ">Home</div>
      </div>
    </div>
  );
}

export default PetsHomeLogo;
