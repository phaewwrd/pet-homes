import React, { useEffect, useState } from "react";
import PetsHomeLogo from "../../components/Logo/PetsHomeLogo";
import FormInputProfile from "../../components/user/FormInputProfile";
import FormInputPet from "../../components/pet/FormInputPet";
import AddNewPet from "./AddNewPet";
import FormPet from "../../components/pet/FormPet";
import usePetStore from "../../stores/pet-store";



function MyProfile() {


  
  return (
    <div className="flex flex-col justify-center items-center bg-amber-50 pt-10 ">
      <PetsHomeLogo className="" />
      <div className="pt-10">
        <FormInputProfile />
        <FormPet/>

      </div>
    </div>
  );
}

export default MyProfile;
