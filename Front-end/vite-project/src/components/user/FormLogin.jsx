import React from "react";
import FormInput from "./FormInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginScheme } from "../../utils/validator";

function FormLogin() {
  return (
    <div className="w-full flex justify-center ">
      <div className="mt-10 drop-shadow-lg">
        {/* form login */}
        <form
          action=""
          className="bg-white w-[449px] gap-5 p-5 pt-20 pb-10 flex flex-col justify-center place-items-center"
        >
          <div className="flex flex-col gap-5 text-2xl text-accent">Log In</div>
          <div className="mt-2 flex flex-col gap-5">
            <input
              placeholder="email"
              className="w-[350px] input input-bordered rounded-2xl flex items-center gap-2"
            />
            {/* {errors[name] && (<p className='text-rose-400'>{errors[name].message}</p>)} */}
            <input
              placeholder="password"
              className="w-[350px] input input-bordered rounded-2xl flex items-center gap-2"
            />
            {/* {errors[name] && (<p className='text-rose-400'>{errors[name].message}</p>)} */}
          </div>

          <div className="flex justify-end mt-5 w-full ">
            <button className="btn btn-accent w-[150px] text-[20px]">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormLogin;
