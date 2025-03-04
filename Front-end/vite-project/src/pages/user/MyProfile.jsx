import React, { useState } from "react";
import PetsHomeLogo from "../../components/Logo/PetsHomeLogo";
import FormInputProfile from "../../components/user/FormInputProfile";
import FormInputPet from "../../components/pet/FormInputPet";
import AddNewPet from "./AddNewPet";
import FormPet from "../../components/pet/FormPet";

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
const profile = [
  {
    firstName: "MeeChock",
    lastName: "Siamese",
    email: "pp@mail.com",
    password: "123456",
    tel: "non2345678901e",
  },
];


function MyProfile() {



  
  return (
    <div className="flex flex-col justify-center items-center bg-amber-50 pt-10 ">
      <PetsHomeLogo className="" />
      <div className="pt-10">
        <FormInputProfile />
        <FormPet />

      </div>
    </div>
  );
}

export default MyProfile;
