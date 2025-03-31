import React from 'react'
import FormInputProfile from '../../components/user/FormInputProfile'
import PetsHomeLogo from '../../components/Logo/PetsHomeLogo'
import AppointmentForm from '../../components/User-Vets/AppointmentForm'

function VetsDashboard() {
  return (
    <div className="flex flex-col justify-center items-center bg-amber-50 pt-10 ">
    <PetsHomeLogo className="" />
    <div className="pt-10">
      <FormInputProfile  />
      <AppointmentForm  />
      
    </div>
  </div>
  )
}

export default VetsDashboard