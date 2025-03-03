import React from 'react'

import SearchFilters from '../../components/SearchFilters'
import PetsHomeInfo from '../../components/Logo/PetsHomeInfo'
import LocationFrom from '../../components/User-Vets/LocationFrom'


function UserHome() {
  return (
    <div className="w-full bg-amber-50 pt-10 pb-10 ">
        <SearchFilters/>
        <LocationFrom />

        <PetsHomeInfo className=""/>
    </div>
  )
}

export default UserHome