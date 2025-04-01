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

function AddNewPet({ fetchData }) {
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
      const res = await actionPetRegister(value, token);
      console.log(res);
      reset();
      setIsOpen(false);
      fetchData();
    } catch (error) {
      console.log(error);
    }
    console.log("Form submitted with:", value); // ตรวจสอบข้อมูลที่ส่ง
  };
  console.log(isOpen);

  // ---------------------------------------------
  // const handleImageUpload = async (event) => {
  //   const image = event.target.files[0];
  //   setBooking((prevState) => ({
  //     ...prevState,
  //     appointmentImage: image,
  //   }));
  // };

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
          className="flex flex-col w-100 p-10 rounded-lg mt-5 text-accent bg-white"
          onSubmit={handleSubmit(hdlSubmit)}
        >
          <Pawlogo className=" w-[50px] h-[50px]" />

          {/* upload image */}
          {/* <div className="flex flex-col gap-10 w-30 text-primary  pb-10">
            <label className=" text-accent font-semibold pr-5">
              Upload Pet Image
              <input
                type="file"
                className="mt-2 w-30 border-2 border-base-200 p-2 rounded-md textarea-md"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>
          </div> */}

{/* input */}
          <div className="flex gap-10">
          {/* add pets section 1 */}
          <div className="w-full">
            {/* pets name */}

            <FormInputPet register={register} name="name" errors={errors} />

            {/* breed */}
            <FormInputPet register={register} name="breed" errors={errors} />
            {/* type */}
            <div>Type</div>
            <div className="place-self-end w-[250px]">
              <select
                className="select select-bordered w-[250px]"
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
            {/* age */}
            <FormInputPet register={register} name="age" errors={errors} />
          </div>

          {/* add pets section 2 */}
          <div className="w-full">
            {/* select gender */}
            <div>Gender</div>
            <div className="place-self-end w-[250px]">
              <select
                className="select select-bordered w-[250px]"
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
            {/* chronicDisease */}
            <FormInputPet
              register={register}
              name="chronicDisease"
              errors={errors}
            />
            {/* medicine */}
            <FormInputPet register={register} name="medicine" errors={errors} />
            {/* vaccined */}
            <FormInputPet register={register} name="vaccined" errors={errors} />
          </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2 mt-10">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
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
