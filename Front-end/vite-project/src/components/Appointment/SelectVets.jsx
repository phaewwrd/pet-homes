import React from "react";
import useLocationStore from "../../stores/location-store";

function SelectVets({ data, setData}) {

  const location = useLocationStore((state) => state.location);
  const hdlOnChange = (e) => {
    setData({ ...data, vetClinicId: e });
  };


  console.log(location);
  return (
    <div className="bg-base-100 w-[334px] flex flex-col justify-center  gap-5">
         <div className="bg-secondary-content w-full px-5 py-5 rounded-t-lg flex flex-col justify-center text-[16px]">
          <label htmlFor="" className=" text-white">
            Select Vets / Hospital
          </label>
        </div>
      <div className="flex flex-col gap-5 justify-center items-center pb-7 pt-3 rounded-t-lg shadow-lg rounded-b-lg">
        
        {/* Province */}
        
      {/* Select Vets */}
        <select
          name=""
          onChange={(e)=> 
            hdlOnChange(e.target.value)
            
          }
          className=" p-3 rounded-md border-[0.5px] border-neutral-200 w-[267px] text-neutral-400"
        >
          <option value="" disabled selected>
            Select Vets
          </option>
        {location.map((location) => (
            <option key={location.id} value={location.id} name="vet">{location.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SelectVets;
