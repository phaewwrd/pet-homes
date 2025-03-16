import React from "react";
import FormInput from "./FormInput";
import { useForm } from "react-hook-form";
import { Form, useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../utils/validator";
import { actionRegister } from "../../api/auth";
import Buttons from "../Form/Buttons";

function FormRegister() {
  const navigate = useNavigate();

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(registerSchema),
  });
  // const { register, handleSubmit, formState, reset } = useForm();
  const { isSubmitting, errors } = formState;
  console.log(isSubmitting);
  console.log(errors);


  const hdlSubmit = async (value) => {
    try {
      const res = await actionRegister(value);
      console.log(res);
      reset();
      navigate('/login');
      // toast.success("Register Successfully!!", res.data.message);
    } catch (error) {
      // toast.error("Error");
    }
  };
  return (
    <div className="w-full flex justify-center">
      <div className="mt-10 drop-shadow-lg">
        <div className="bg-secondary-content w-[449px] px-5 py-5 rounded-t-lg flex flex-col justify-center text-2xl">
          <label htmlFor="" className=" text-white">
            Register Form
          </label>
        </div>
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="bg-white w-[449px] gap-5 p-5 rounded-b-lg pt-10 pb-10 flex flex-col justify-center place-items-center">
            <FormInput register={register} name="firstName" label="First Name" errors={errors} />
            <FormInput register={register} name="lastName" label="Last Name" errors={errors} />
            <FormInput register={register} name="tel" label="Phone Number" errors={errors} />
            <FormInput register={register} name="email" label="Email" errors={errors} />
            <FormInput
              register={register}
              name="password"
              errors={errors}
              type="password"
              label="Password"
            />
            <FormInput
              register={register}
              name="confirmPassword"
              errors={errors}
              type="password"
              label="Confirm Password"
            />
          </div>
          <div className="flex justify-end  w-full  mt-5">
            <Buttons
              className="btn btn-accent w-[150px]"
              isSubmitting={isSubmitting}
              label="Register"/>
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
