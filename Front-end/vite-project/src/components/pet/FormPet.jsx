import React, { useEffect, useState } from "react";

import useAuthStore from "../../stores/auth-store";
import {actionGetPet} from "../../api/pet";
import usePetStore from "../../stores/pet-store";
import AddNewPet from "../../pages/user/AddNewPet";
import AllFormUpdatepet from "./AllFormUpdatepet";

function FormPet() {
  const pet = usePetStore((state)=> state.pet);
  const fetchPetData = usePetStore((state)=> state.fetchPetData);
  const [isOpen, setIsOpen] = useState(null);


  
  const checkPetId = (index) => {
    setIsOpen((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    fetchPetData();
  }, []);

  console.log(pet);

  return (
    <div>
      <div className="flex flex-col justify-center mb-10">
        <div className=" flex justify-between place-items-center mb-10">
          <div className="flex flex-col justify-evenly w-[300px] ">
            <div className="text-2xl font-semibold">My Pet</div>
            <div>your pet</div>
          </div>
        </div>

        {/* form */}

        <div className="flex flex-col  w-full  rounded-lg p-5 bg-base-100 border-2  ">
          <div className="grid grid-cols-8 gap-5 p-5 place-items-center border-b-2 border-slate-100">
            <div className="w-[150px] ">
              <div>Name</div>
            </div>
            <div className="w-[150px]">
              <div>Breed</div>
            </div>
            <div className="w-[150px] ">
              <div>Type</div>
            </div>

            <div className="w-[150px] ">
              <div>Age/months</div>
            </div>
            <div className="w-[150px] ">
              <div>Gender</div>
            </div>
            <div className="w-[150px] ">
              <div>chronicDisease</div>
            </div>
            <div className="w-[150px] ">
              <div>medicine</div>
            </div>
            <div className="w-[150px] ">
              <div>vaccined</div>
            </div>
          </div>
          {/* pet info. */}
          {pet?.map((el, index) => (
           <AllFormUpdatepet pet={el} isOpen={isOpen} setIsOpen={setIsOpen} checkPetId={checkPetId} index={index} />
          ))}
        </div>
      </div>
      <AddNewPet   />
    </div>
  );
}

export default FormPet;
