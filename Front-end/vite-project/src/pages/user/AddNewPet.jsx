import React, { useState } from "react";
import PetsHomeLogo from "../../components/Logo/PetsHomeLogo";
import FormInputPet from "../../components/pet/FormInputPet";
import { Pawlogo } from "../../Icons";
import { useForm } from "react-hook-form";
import { registerPet } from "../../utils/validator";
import { actionPetRegister } from "../../api/pet";
import { zodResolver } from "@hookform/resolvers/zod";

import Buttons from "../../components/Form/Buttons";
import useAuthStore from "../../stores/auth-store";




function AddNewPet() {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(registerPet),
  });

  const token = useAuthStore((state) => state.token);
  console.log(token);

  const { isSubmitting, errors } = formState;
  console.log(isSubmitting);
  console.log(errors);

  //---------------------------------------------

  const hdlSubmit = async (value) => {
    console.log("testttt", value);
    try {
      const res = await actionPetRegister(value,token);
      console.log(res);
      reset();
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
    console.log("Form submitted with:", value); // ตรวจสอบข้อมูลที่ส่ง
  };
  console.log(isOpen);

  return (
    <div className=" flex flex-col gap-5 place-items-center w-full  mt-5 pb-10">
      <button
        onClick={() => setIsOpen(true)}
        className="btn btn-accent w-[200px] h-[30px]"
      >
        Add New Pets
      </button>

      {/* Add your new pet form component here */}
      {isOpen && (
        <form
          className="flex w-full flex-col   mt-5 text-accent"
          onSubmit={handleSubmit(hdlSubmit)}
        >
          <div className=" justify-center w-full flex gap-20  ">
            <div className="flex gap-2">
              <Pawlogo className=" w-[30px] h-[30px]" />
              <FormInputPet register={register} name="name" errors={errors} />
            </div>

            <FormInputPet register={register} name="breed" errors={errors} />
            <div className="place-self-end w-[100px]">
            <select
                className="select select-bordered w-[120px]"
                defaultValue="" 
                {...register("type", { required: "Type is required" })} // ✅ เพิ่ม validation
              >
                <option value="" disabled>
                  Type
                </option>{" "}
                <option value="NORMAL">Normal Pets</option>
                <option value="EXOTIC">Exotic Pets</option>
              </select>
            </div>
            <FormInputPet register={register} name="age" errors={errors} />
            <div className="place-self-end w-[100px]">
              <select
                className="select select-bordered w-[120px]"
                defaultValue="" 
                {...register("gender", { required: "Gender is required" })} // ✅ เพิ่ม validation
              >
                <option value="" disabled>
                  Gender
                </option>{" "}
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
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
            <Buttons
              type="submit"
              isSubmitting={isSubmitting}
              className="btn btn-primary w-[150px]"
              label="Add Pet"
            />
          </div>
        </form>
      )}

      {/* <AddNewPetForm pet={pet} /> */}
    </div>
  );
}

export default AddNewPet;
