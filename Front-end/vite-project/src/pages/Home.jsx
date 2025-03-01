import React, { useEffect, useState } from "react";
import SearchFilters from "../components/SearchFilters";
import PetsHomeInfo from "../components/Logo/PetsHomeInfo";
import LocationFrom from "../components/User-Vets/LocationFrom";
import axios from "axios";
import { actionMaps } from "../api/auth";

function Home() {
  const [location, setLocation] = useState();



  useEffect(() => {
    const fecthData = async () => {
      try {
        const res = await actionMaps();
      setLocation(res.data);
      } catch (error) {
        console.log('error', error)
      }
    };
    fecthData()
  }, []);

  return (
    <div className="w-full bg-amber-50 pt-10 pb-10">
      <SearchFilters />
      <div className="w-full justify-center flex gap-20 bg-accent p-20">
        <LocationFrom location={location} />
      </div>
      <PetsHomeInfo />
    </div>
  );
}

export default Home;
