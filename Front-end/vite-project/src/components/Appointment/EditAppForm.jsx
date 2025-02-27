import React from "react";
import PetsHomeLogo from "../Logo/PetsHomeLogo";
import SelectPets from "./SelectPets";
import SelectVets from "./SelectVets";
import DateTime from "./DateTime";
import vetHorse from "../../assets/vetHorse.png";
import LocationFrom from "../User-Vets/LocationFrom";
import dog from "../../assets/dog.jpg";

function EditAppForm() {
  return (
    <div className="w-full flex flex-col justify-center bg-amber-50 pt-10  gap-10">
      <PetsHomeLogo />
      <div className=" flex justify-center ">
        <div className="flex flex-col w-[1150px] justify-center ">
          <div className="bg-secondary-content w-full px-5 py-5 rounded-t-lg flex flex-col justify-center text-[16px]">
            {/* Label */}
            <label htmlFor="" className=" text-white text-2xl pl-10">
              Edit appointment
            </label>
          </div>

          {/* pets and location */}
          <div className="bg-white flex  w-full justify-center gap-[70px] pt-10 pb-10 shadow-lg rounded-b-lg">
            <div className="flex flex-col gap-8 w-[334px]">
              <div className="flex gap-5 place-items-center">
                <div className="w-[70px] h-[70px] overflow-hidden rounded-xl">
                  <img src={dog} alt="" />
                </div>
                <div className="font-semibold">MeeChock</div>
              </div>
              <LocationFrom />
            </div>

            {/* Calendar */}
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

export default EditAppForm;
