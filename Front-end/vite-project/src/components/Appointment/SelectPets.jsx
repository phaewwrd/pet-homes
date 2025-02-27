import React from 'react'

function SelectPets() {
  return (
    <div className="bg-base-100  flex justify-center ">
      <div className="flex flex-col gap-5 w-full ">
        
      {/* Select Pets */}
        <select
          name=""
          id=""
          className=" p-3 rounded-md border-[0.5px] border-neutral-200 text-neutral-400"
        >
          <option value="" disabled selected>
            Select Pets
          </option>
          <option value=""></option>
        </select>
      </div>
    </div>
  )
}

export default SelectPets