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
        <div className="flex justify-center w-full bg-gray-50 px-[120px] gap-[150px] h-full pb-20 pt-10">
            <div className="flex flex-col w-[250px] text-center place-items-center ">
                <VetsLocationLogo className="w-[100px] text-accent "/>
                <div className="text-xl font-semibold">🏥 Comprehensive Network of Veterinary Hospitals & Clinics
                </div>
<div>Our website gathers veterinary hospitals and clinics from all over the country in one place, making it easy for you to find the best care facility for your pet.</div>
            </div>
            <div className="flex flex-col w-[250px] text-center place-items-center  ">
                <ExoticPetsLogo className="w-[100px] text-accent"/>
                <div className="text-xl font-semibold">🐦 Care for All Types of Pets
                </div>
<div>Whether you have a dog, cat, rabbit, or exotic pet, we provide information on specialized veterinary services to ensure your pet gets the best possible treatment.</div>
            </div>
            <div className="flex flex-col w-[250px] text-center place-items-center ">
                <VetsEquipLogo className="w-[100px] text-accent"/>
                <div className="text-xl font-semibold">🩺 Convenient & Fast Online Appointment Booking
                </div>
<div>Easily book veterinary appointments online, reducing wait times and ensuring your pet receives expert care at your preferred time.</div>
            </div>
            <div className="flex flex-col w-[250px] text-center place-items-center  ">
                <VetsTranscriptionLogo className="w-[100px] text-accent"/>
                <div className="text-xl font-semibold">📋 Track Treatment Progress Anytime, Anywhere
                </div>
<div>Our system allows you to check medical records, prescriptions, and veterinarian recommendations in real time, making pet healthcare management easier than ever.</div>
            </div>
        </div>
    {/* -------------- */}
    </div>

  );
}

export default PetsHomeInfo;
