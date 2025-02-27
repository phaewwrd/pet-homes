import React from 'react'
import AddNewPetForm from '../../components/pet/AddNewPetForm';
import PetsHomeLogo from '../../components/Logo/PetsHomeLogo';

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
  return (
    <div className="flex flex-col justify-center items-center bg-amber-50 pt-10 ">
        <PetsHomeLogo/>
      <div className="pt-10">
        <AddNewPetForm pet={pet} />
      </div>
    </div>
  )
}

export default AddNewPet