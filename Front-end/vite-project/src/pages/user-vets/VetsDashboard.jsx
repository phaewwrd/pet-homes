import React from 'react'
import PetsHomeLogo from '../../components/Logo/PetsHomeLogo'
import VetsInfo from '../../components/User-Vets/VetsInfo'
import AllFormUpdateVets from '../../components/User-Vets/AllFormUpdateVets'

function VetsDashboard() {
  return (
    <div className="flex flex-col justify-center items-center bg-amber-50 pt-10 ">
    <PetsHomeLogo className="" />
    <div className="pt-10">
      <Vet1sInfo  />
      <AllFormUpdateVets  />
      
    </div>
  </div>
  )
}

export default VetsDashboard