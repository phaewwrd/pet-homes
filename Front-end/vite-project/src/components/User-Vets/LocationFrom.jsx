import React from "react";
import vets1 from "../../assets/vets-1.png";
import dog from "../../assets/dog.jpg";

function LocationFrom() {
  return (
    <div>
      <div className="w-[264px] flex flex-col gap-2">
          <img src={vets1} alt="" className="rounded-xl" />
        <div className="gap-5">
        <div className="font-semibold">Thonglor Vets Clinic</div>
        <div className="font-light">Bangkok, Thailand</div>
        </div>
      </div>
    </div>
  );
}

export default LocationFrom;
