import React, { useEffect, useState } from "react";
import { PetHomeLogo, VetsLogo } from "../../Icons";
import PetsHomeInfo from "../Logo/PetsHomeInfo";
import PetsHomeLogo from "../Logo/PetsHomeLogo";
import { use } from "react";
import axios from "axios";
import { actionAdminInfo } from "../../api/admin";
import useAuthStore from "../../stores/auth-store";
import { actionGetPet } from "../../api/pet";
import usePetStore from "../../stores/pet-store";

function FormPet() {
  const {pet, setPet} = usePetStore();
  const res = useAuthStore((state) => state.token);
  console.log(res);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await actionGetPet(res);
        setPet(userData.data.result);
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };
    fetchData();
  }, [res]);

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
              { pet.map((pet)=> 
          <div className="pl-5 pr-5 w-full  border-b-2 border-slate-100">
            <div className="grid grid-cols-8 gap-10 pt-5 place-items-center">
              {/* name */}
              <div className="w-[150px] flex items-center gap-2">
                <PetHomeLogo className="text-accent w-[40px] h-[40px] " />
                <div className="text-accent">{pet?.name}</div>
              </div>
              {/* breed */}
              <div className="text-accent w-[100px]">
                {pet?.breed}
              </div>
               {/* type */}
               <div className="text-accent w-[100px]">
                {pet?.type}
              </div>
              {/* age/months */}
              <div className="text-accent w-[100px] ">
                {pet?.age}
              </div>
              {/* gender */}
              <div className="text-accent w-[100px]">
                {pet?.gender}
              </div>
                {/* chronicDisease */}  
              <div className="text-accent w-[100px]">
                {pet?.chronicDisease ? "pet?.chronicDisease" : "-"}
              </div>
                {/* medicine */}  
              <div className="text-accent w-[100px]">
                {pet?.medicine ? "pet?.medicine" : "-"}
              </div>
                {/* vaccined */}  
              <div className="text-accent w-[100px]">
                {pet?.vaccined ? "pet?.vaccined" : "-"}
              </div>
              
            </div>
            

            {/* ---------- */}
              {/* edit */}
              <div className="w-full flex justify-end pt-3 pb-5">
                <div
                  key={pet?.id}
                  className="btn btn-accent w-[100px]"
                >
                  Edit
                </div>
              </div>
          </div>
              )}
        </div>
      </div>
    </div>
  );
}

export default FormPet;
