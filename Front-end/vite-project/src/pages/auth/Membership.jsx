import React from 'react'
import MainNav from '../../components/MainNav'
import PetsHomeLogo from '../../components/Logo/PetsHomeLogo'
import FormRegister from '../../components/user/FormRegister'
import FormLogin from '../../components/user/FormLogin'
import  useAuthStore  from '../../stores/auth-store'

import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginScheme } from '../../utils/validator'

function Membership() {
  const actionLoginWithZustand = useAuthStore(
    (state) => state.actionLoginWithZustand
  )
  const navigate =useNavigate()

  const { reguster, handleSubmit, formState, reset} = useForm({
    resolver: zodResolver(loginScheme)
  })

  const {isSubmitting, errors} = formState

  const roleReDirect = (role) =>{
    if(role === 'admin'){
      navigate('/admin')
    }if(role === 'member'){
      navigate('/member')
    }else{
      navigate('/officer')
    }
  }

  return (
    <div className="w-full bg-amber-50 pt-10 pb-10">
      <div className="" >
      <PetsHomeLogo />
      <FormLogin />

   </div>
    </div>
  )
}

export default Membership