import React from "react";

function SelectVets() {
  return (
    <div className="bg-base-100 w-[334px] flex flex-col justify-center  gap-5">
         <div className="bg-secondary-content w-full px-5 py-5 rounded-t-lg flex flex-col justify-center text-[16px]">
          <label htmlFor="" className=" text-white">
            Select Vets / Hospital
          </label>
        </div>
      <div className="flex flex-col gap-5 justify-center items-center pb-7 pt-3 rounded-t-lg shadow-lg rounded-b-lg">
        
        {/* Province */}
        <select name="" id=""
         className=" p-3 rounded-md border-[0.5px] border-neutral-200 w-[267px] text-neutral-400"
         >  
          <option value="" disabled selected>
            Province
          </option>
          <option value=""></option>
        </select>
      {/* Select Vets */}
        <select
          name=""
          id=""
          className=" p-3 rounded-md border-[0.5px] border-neutral-200 w-[267px] text-neutral-400"
        >
          <option value="" disabled selected>
            Select Vets
          </option>
          <option value=""></option>
        </select>
      </div>
    </div>
  );
}

export default SelectVets;
