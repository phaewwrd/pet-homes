import React, { useEffect, useState } from "react";
import SearchFilters from "../components/SearchFilters";
import PetsHomeInfo from "../components/Logo/PetsHomeInfo";
import LocationFrom from "../components/User-Vets/LocationFrom";
import axios from "axios";
import { actionMaps } from "../api/vets";
import AddNewPet from "./user/AddNewPet";
function Home() {
  

  return (
    <div className="w-full bg-amber-50 pt-10 pb-10 h-full">
      <SearchFilters />
      <LocationFrom />
      <PetsHomeInfo />
    </div>
  );
}

export default Home;
