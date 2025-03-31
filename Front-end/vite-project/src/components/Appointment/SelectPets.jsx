import React, { useEffect } from 'react'
import usePetStore from '../../stores/pet-store';
import { actionGetPet } from '../../api/pet';

function SelectPets({ data, setData}) {
  const pet = usePetStore((state) => state.pet);
  console.log(pet);
  const fetchPetData = usePetStore((state) => state.fetchPetData);
  useEffect(()=>{
    fetchPetData()
  },[])
  

const hdlOnChange = (e) => {
  setData({ ...data, petId: e });}
  
  return (
    <div className="bg-base-100  flex justify-center ">
      <div className="flex flex-col gap-5 w-full ">
        
      {/* Select Pets */}
     
        <select
          name="pet"
          onChange={(e)=> hdlOnChange(e.target.value)}
          className=" p-3 rounded-md border-[0.5px] border-neutral-200 text-neutral-400"
        >
          <option value="" disabled selected>
            Select Pets
          </option>
          { pet?.map((pet)=> (
          <option key={pet?.id} value={pet?.id} name="pet"
          >{pet?.name}</option>
        ))}
        </select>
      </div>
      
    </div>
  )
}

export default SelectPets