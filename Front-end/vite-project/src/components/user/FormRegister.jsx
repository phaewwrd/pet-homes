import React from "react";
import FormInput from "./FormInput";
import { useForm } from "react-hook-form";
import { Form } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../utils/validator";

function FormRegister() {
  const { register, handleSubmit, formState, reset} = useForm({
      resolver : zodResolver(registerSchema)
    })
    const { isSubmitting, errors} = formState

    const hdlSubmit = async (value) =>{
      try {
        const res = await actionRegister(value)
        reset()
        toast.success("Register Successfully!!")
      } catch (error) {
        toast.error("Error")
      }
    }
  return (
    <div className="w-full flex justify-center">
      <div className="mt-10 drop-shadow-lg">
        <div className="bg-secondary-content w-[449px] px-5 py-5 rounded-t-lg flex flex-col justify-center text-2xl">
          <label htmlFor="" className=" text-white">
            Register Form
          </label>
        </div>
        <form
          action=""
          onSubmit={handleSubmit(hdlSubmit)}
          className="bg-white w-[449px] gap-5 p-5 rounded-b-lg pt-10 pb-10 flex flex-col justify-center place-items-center"
        >
          <FormInput register={register} name="firstName" errors={errors} />
          <FormInput register={register} name="lastName" errors={errors} />
          <FormInput register={register} name="tel" errors={errors} />
          <FormInput register={register} name="email" errors={errors} />
          <FormInput register={register} name="password" errors={errors}/>
          <FormInput register={register} name="confirmPassword" errors={errors}/>
          <div className="flex justify-end  w-full ">
          <button className="btn btn-accent w-[150px]" isSubmitting={isSubmitting} label={register}/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormRegister;
{
  /* <form action="" className='bg-slate-400 w-[500px] h-[500px] flex flex-col gap-5 p-5 rounded-lg' onSubmit={handleSubmit(hdlSubmit)}>
<FormInput register={register} name="firstName" errors={errors}/>
<FormInput register={register} name="lastName" errors={errors}/>
<FormInput register={register} name="tel" errors={errors}/>
<FormInput register={register} name="email" errors={errors}/>
<FormInput register={register} name="password" errors={errors}/>
<FormInput register={register} name="confirmPassword" errors={errors}/>

</form> */
}
