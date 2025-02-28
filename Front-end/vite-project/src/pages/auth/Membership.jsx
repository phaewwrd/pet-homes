import React from 'react'
import MainNav from '../../components/MainNav'
import PetsHomeLogo from '../../components/Logo/PetsHomeLogo'
import FormRegister from '../../components/user/FormRegister'
import FormLogin from '../../components/user/FormLogin'
import  useAuthStore  from '../../stores/auth-store'

import { useNavigate } from 'react-router'
import FormInput from '../../components/user/FormInput'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginScheme } from '../../utils/validator'
import Buttons from '../../components/Form/Buttons'
import { toast } from 'react-toastify'


function Membership() {
  
  const actionLoginWithZustand = useAuthStore(
    (state) => state.actionLoginWithZustand
  );

  const navigate = useNavigate();

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(loginScheme),
  });
  //---------------------------------------------

  const { isSubmitting, errors } = formState;
  console.log(errors);
  //---------------------------------------------
  
  const roleRedirect = (role) => {
    if (role === "ADMIN") {
      navigate("/admin");
      return
    }
    if(role === "USER") {
      navigate("/member");
    }else {
      navigate("/officer");
    }
  };
  const hdlSubmit = async (value) => {
    console.log("test2");
    const res = await actionLoginWithZustand(value);

    console.log(res);

    if (res.success) {
      roleRedirect(res.role)
      reset();
      toast.success("Success", "Welcome, back");
    } else {
      toast.error(res.message);;
    }

  }
    //---------------------------------------------

  return (
    <div className="w-full  bg-amber-50 pt-10 pb-10 ">
      <div className="" >
      <PetsHomeLogo />
      <form action="" onSubmit={handleSubmit(hdlSubmit)} className='justify-center flex flex-col'>
            <div className="flex flex-col gap-3 mt-10 mb-10 justify-center  items-center">
              <FormInput register={register} name="email" errors={errors} />
              <FormInput
                register={register}
                name="password"
                errors={errors}
                type="password"
              />
            </div>
            <div className="flex justify-center">
              <Buttons isSubmitting={isSubmitting} label="Login" />
            </div>
          </form>
   </div>
    </div>
  )
}

export default Membership