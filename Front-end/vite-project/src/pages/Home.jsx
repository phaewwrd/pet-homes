import React from 'react'
import SearchFilters from '../components/SearchFilters'
import Map from '../components/Map/Map'
import PetsHomeInfo from '../components/Logo/PetsHomeInfo'


function Home() {
  return (
    <div className="w-full bg-amber-50 pt-10 pb-10">
        <SearchFilters/>
        <Map/>
        <PetsHomeInfo/>
    </div>
  )
}

export default Home