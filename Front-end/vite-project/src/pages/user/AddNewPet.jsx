import React, { useState } from "react";
import PetsHomeLogo from "../../components/Logo/PetsHomeLogo";
import FormInputPet from "../../components/pet/FormInputPet";
import { Pawlogo } from "../../Icons";

const pet = [
  {
    name: "MeeChock",
    breed: "Siamese Cat",
    age: "12",
    gender: "Male",
    chronicDisease: "none",
    medicine: "+66 879 2345",
    vaccined: "none",
  },
];

function AddNewPet() {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <div className=" flex flex-col gap-5 justify-center place-items-center w-[1064px] mt-5 ">
              <button onClick={() => setIsOpen(true)} className="btn btn-accent w-[200px] h-[30px]">Add New Pets</button>

      {/* Add your new pet form component here */}
      {isOpen && 
      <form className="flex flex-col mt-5 text-accent">
        <div className="flex gap-5">
          <div className="flex gap-5">
             
            <div className="">
            <Pawlogo className=" w-[30px] h-[30px]"/>
            </div>
            <input
              type="text"
              placeholder="Pet Name"
              className="input input-bordered w-full"
            />
            
            <input
              type="text"
              placeholder="Breed"
              className="input input-bordered w-full"
            />
            
            <input
              type="number"
              placeholder="Age"
              className="input input-bordered w-full"
            />
            
            <select className="select select-bordered w-full">
              <option disabled selected>
                Gender
              </option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="flex gap-5">
            <input
              type="text"
              placeholder="Chronic Disease"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Medicine"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Vaccined"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-10">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="btn btn-ghost"
          >
            Cancel
          </button>
          <button onClick={() => setIsOpen(false)} type="submit" className="btn btn-primary w-[150px]">
            Add Pet
          </button>
        </div>
      </form>
}

      {/* <AddNewPetForm pet={pet} /> */}
    </div>
  );
}

export default AddNewPet;
