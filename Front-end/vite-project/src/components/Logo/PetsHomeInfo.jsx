import React from "react";
import vetExam from "../../assets/vetExam.png";
import PetsHomeLogo from "./PetsHomeLogo";
import { ExoticPetsLogo, PetHomeLogo, VetsEquipLogo, VetsLocationLogo, VetsTranscriptionLogo } from "../../Icons";



function PetsHomeInfo() {
  return (
    <div className="">
    <div className='w-full bg-amber-50 flex justify-evenly gap-[200px] px-[120px]'>
      <div className="flex justify-center flex-col place-items-center  ">
        <PetsHomeLogo/>
        <div className="pt-5">
        <p className="text-accent">Easily connect with you're Vets Clinic and Tracking your pets </p>
        <p className="text-accent">treatments with in One ☝️ </p>
        </div>
      </div>
        <div className="flex pt-10">
          <img src={vetExam} alt="avatar" className="w-[700px]" />
        </div>
    </div>
    {/* Info and Icons */}
        <div className="flex justify-center w-full bg-gray-50 px-[120px] gap-[150px] pb-20 pt-10">
            <div className="flex flex-col w-[220px] text-center place-items-center ">
                <VetsLocationLogo className="w-[100px] text-accent "/>
                <div className="text-2xl font-semibold">Locations</div>
                <div>Lorem ipsum do sequi unde ab nobis porro molestiae eveniet repellat culpa asperiores molestias deleniti hic corrupti possimus? Nostrum.</div>
            </div>
            <div className="flex flex-col w-[220px] text-center place-items-center  ">
                <ExoticPetsLogo className="w-[100px] text-accent"/>
                <div className="text-2xl font-semibold">Locations</div>
                <div>Lorem ipsum do sequi unde ab nobis porro molestiae eveniet repellat culpa asperiores molestias deleniti hic corrupti possimus? Nostrum.</div>

            </div>
            <div className="flex flex-col w-[220px] text-center place-items-center ">
                <VetsEquipLogo className="w-[100px] text-accent"/>
                <div className="text-2xl font-semibold">Locations</div>
                <div>Lorem ipsum do sequi unde ab nobis porro molestiae eveniet repellat culpa asperiores molestias deleniti hic corrupti possimus? Nostrum.</div>

            </div>
            <div className="flex flex-col w-[220px] text-center place-items-center  ">
                <VetsTranscriptionLogo className="w-[100px] text-accent"/>
                <div className="text-2xl font-semibold">Locations</div>
                <div>Lorem ipsum do sequi unde ab nobis porro molestiae eveniet repellat culpa asperiores molestias deleniti hic corrupti possimus? Nostrum.</div>

            </div>
        </div>
    {/* -------------- */}
    </div>

  );
}

export default PetsHomeInfo;
