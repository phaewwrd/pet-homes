import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function DateTime() {
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-base-100 w-[334px] flex flex-col justify-center ">
        <div className="bg-secondary-content w-[297px] px-5 py-5 rounded-t-lg flex flex-col justify-center text-[16px]">
          <label htmlFor="" className=" text-white">
            Select Date / Time
          </label>
        </div>
        <div className="shadow-lg rounded-b-lg">
          <Calendar className={"pb-5 border-none"} />
        </div>
      </div>
      <div className="flex flex-col gap-5 w-full ">
        
        {/* Select Time */}
          <select
            name=""
            id=""
            className=" p-3 rounded-md border-[0.5px] border-neutral-200 text-neutral-400"
          >
            <option value="" disabled selected>
              Select Time
            </option>
            <option value=""></option>
          </select>
        </div>
    </div>
  );
}

export default DateTime;
