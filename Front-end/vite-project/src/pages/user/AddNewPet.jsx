import React, { useState } from "react";
import PetsHomeLogo from "../../components/Logo/PetsHomeLogo";
import FormInputPet from "../../components/pet/FormInputPet";
import { Pawlogo } from "../../Icons";
import usePetStore from "../../stores/pet-store";
import { useForm } from "react-hook-form";
import { registerPet, registerSchema } from "../../utils/validator";
import { actionRegister } from "../../api/auth";
import { actionPetRegister } from "../../api/pet";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "react-router";

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
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(registerPet),
  });

  const { isSubmitting, errors } = formState;
  console.log(isSubmitting);
  console.log(errors);

  //---------------------------------------------

  const hdlSubmit = async (value) => {
    try {
      const res = await actionPetRegister(value);
      console.log(res);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex flex-col gap-5 justify-center place-items-center w-[1064px] mt-5 pb-10">
      <button
        onClick={() => setIsOpen(true)}
        className="btn btn-accent w-[200px] h-[30px]"
      >
        Add New Pets
      </button>

      {/* Add your new pet form component here */}
      {isOpen && (
        <form
          className="flex w-full flex-col justify-center  mt-5 text-accent"
          onSubmit={handleSubmit(hdlSubmit)}
        >
          <div className=" justify-center w-full flex gap-20 place-items-center ">
            <div className="flex gap-2">
              <Pawlogo className=" w-[30px] h-[30px]" />
            <FormInputPet register={register} name="name" errors={errors} />
            </div>

            <FormInputPet register={register} name="breed" errors={errors} />
            <div className="place-self-end w-[100px]">
            <select className="select select-bordered w-[120px]"
            {...register("type")}>
              <option disabled selected>
                Type
              </option>
              <option value="NORMAL">normal pets</option>
              <option value="EXOTIC">exotic pets</option>
            </select>
            </div>
            <FormInputPet register={register} name="age" errors={errors} />
            <div className="place-self-end w-[100px]">
            <select className="select select-bordered w-[120px] "
                            {...register("gender")}
>
              <option disabled selected>
                Gender
              </option>
              <option value="MALE">Male</option>
              <option value="FEMALE" >Female</option>
            </select>
            </div>
            <FormInputPet
              register={register}
              name="chronicDisease"
              errors={errors}
            />
            <FormInputPet register={register} name="medicine" errors={errors} />
            <FormInputPet register={register} name="vaccined" errors={errors} />
          </div>

          <div className="flex justify-end gap-2 mt-10">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="btn btn-ghost"
            >
              Cancel
            </button>
            <button
              onClick={() => setIsOpen(false)}
              isSubmitting={isSubmitting}
              className="btn btn-primary w-[150px]"
            >
              Add Pet
            </button>
          </div>
        </form>
      )}

      {/* <AddNewPetForm pet={pet} /> */}
    </div>
  );
}

export default AddNewPet;
