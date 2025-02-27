import React from "react";
import DateTime from "./DateTime";
import SelectPets from "./SelectPets";
import SelectVets from "./SelectVets";
import PetsHomeLogo from "../Logo/PetsHomeLogo";
import vetHorse from "../../assets/vetHorse.png";

function MakeAppointmentForm() {
  return (
    <div className="w-full flex flex-col justify-center bg-amber-50 pt-10  gap-10">
      <PetsHomeLogo />
      <div className=" flex justify-center ">
        <div className="flex flex-col w-[1150px] justify-center ">
        <div className="bg-secondary-content w-full px-5 py-5 rounded-t-lg flex flex-col justify-center text-[16px]">
          <label htmlFor="" className=" text-white text-2xl pl-10">
            Make appointment
          </label>
        </div>
          <div className="bg-white flex  w-full justify-center gap-[70px] pt-10 pb-10 shadow-lg rounded-b-lg"> 
            <div className="flex flex-col gap-8 w-[334px]">
              <SelectPets />
              <SelectVets />
            </div>
          <DateTime />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
      <div className="w-[1149px] flex justify-end gap-10">
        <div className="btn btn-secondary w-[167px] ">Delete</div>
        <div className="btn btn-accent w-[200px]">Confirm</div>
        </div>
      </div>
      <div className="w-full flex justify-center">

      <img className="w-[720px]" src={vetHorse} alt="" />
      </div>
    </div>
  );
}

export default MakeAppointmentForm;
