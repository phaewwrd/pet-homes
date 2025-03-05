import React, { useEffect, useState } from "react";
import SearchFilters from "../components/SearchFilters";
import PetsHomeInfo from "../components/Logo/PetsHomeInfo";
import LocationFrom from "../components/User-Vets/LocationFrom";
import axios from "axios";
import { actionMaps } from "../api/vets";
import AddNewPet from "./user/AddNewPet";
import useLocationStore from "../stores/location-store";


function Home() {
  const location = useLocationStore((state) => state.location);
  const fetchData = useLocationStore((state) => state.fetchData);

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="w-full bg-amber-50 pt-10 pb-10 ">
    
      <SearchFilters />
      <LocationFrom />
      <PetsHomeInfo />
    </div>
  );
}

export default Home;
