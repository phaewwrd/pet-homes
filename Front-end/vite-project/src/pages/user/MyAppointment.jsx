import React from 'react'
import PetsHomeLogo from '../../components/Logo/PetsHomeLogo'
import FormMyAppointment from '../../components/user/FormMyAppointment'

function MyAppointment() {
  return (
    <div className="flex flex-col justify-center items-center bg-amber-50 pt-10 ">
    <PetsHomeLogo className="" />
    <div className="pt-10">
      <FormMyAppointment/>
    </div>
  </div>
  )
}

export default MyAppointment