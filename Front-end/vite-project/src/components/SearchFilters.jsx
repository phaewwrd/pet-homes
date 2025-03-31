import React, { useEffect, useState } from "react";
import mainImg from "../assets/mainImg.png";
import { Pawlogo, VetsLogo } from "../Icons";
import { actionMaps, actionSearchVets } from "../api/vets";
import useSearchStore from "../stores/search-store";
import LocationFrom from "./User-Vets/LocationFrom";
import useTypeStore from "../stores/type-store";
import useProvincetStore from "../stores/province-store";
import useLocationStore from "../stores/location-store";
import useAuthStore from "../stores/auth-store";

function SearchFilters() {
  const {location, setLocation} = useLocationStore()
  const type = useTypeStore((state) => state.type);
  const province = useProvincetStore((state) => state.province)
  const token = useAuthStore((state) => state.token);
  const fetchData = useLocationStore((state) => state.fetchData);



  const actionRefresh = () =>{
    fetchData()
  }

  const {
    selectedPetType,
    selectedProvince,
    setSelectedPetType,
    setSelectedProvince,
  } = useSearchStore();

 

// console.log(type.data);



  const hdlSearchBtn = async () => {
    // Call API to search vet
    try {
      const fetchDataSearch = await actionSearchVets({
        selectedPetType,
        selectedProvince,
      });
     setLocation(fetchDataSearch.data );
    //  fetchData()
      console.log("ddd",fetchDataSearch.data);
      console.log("Search params:", { selectedPetType, selectedProvince});
    } catch (error) {
      console.log(error);
    }
    
  };
  

  return (
    <div className="flex flex-col justify-center w-full pt-[20px]">
      <div className="w-full flex justify-center h-[535px] ">
        <div className="text-secondary-content  text-5xl ">
          {/* Title */}
          <div className=" flex justify-center gap-5 z-10">
            {/* find */}
            <div className="flex z-100 place-items-end ">Find</div>
            {/* Vets */}
            <div
              className="text-8xl font-bold place-items-end z-10"
              style={{ fontStyle: "italic" }}
            >
              Vets
            </div>
            {/* Clinic */}
            <div className="flex z-10 place-items-end">Clinic</div>
          </div>
          {/* --------------------------------------------- */}

          {/* --------------------------------------------- */}

          <div className="flex flex-col mt-5 relative z-10  place-items-center ">
            {/* input Search */}
            {/* <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-[294px] max-w-xs "
              onChange={(e) => setSearchQuery(String(e.target.value))}
            /> */}
            {/* --------------------------------------------- */}

            {/* Select */}
            <div className="flex justify-center mt-3 gap-6 drop-shadow-lg">
              {/* type of Pets */}
              <div className="form-control w-[250px] max-w-xs ">
                <label className="label" />
                <select
                  value={selectedPetType}
                  className="select select-bordered w-full max-w-xs bg-primary text-white "
                  onChange={(e) => setSelectedPetType(String(e.target.value))}
                >
                  <option value="" disabled>
                    Type of Pets
                  </option>
                  {type
                    .filter(
                      (pet, index, self) =>
                        index === self.findIndex((p) => String(p.type) === String(pet.type))
                    )
                    .map((res) => (
                      <option key={res.id} value={res.type}>
                        {res.type}
                      </option>
                    ))}
                </select>
              </div>
              {/* --------------------------------------------- */}

              {/* Province */}
              <div className="form-control w-[250px] max-w-xs ">
                <label className="label " />
                <select
                  value={selectedProvince}
                  className="select select-bordered w-full max-w-xs bg-primary text-white"
                  onChange={(e) => setSelectedProvince(e.target.value)}
                >
                  <option value="" disabled>
                    Province
                  </option>
                  {province
                    .filter(
                      (province, index, self) =>
                        index ===
                        self.findIndex((p) => String( p.province) === String(province.province))
                    )
                    .map((res) => (
                      <option key={res.id} value={res.province}>
                        {res.province}
                      </option>
                    ))}
                </select>
              </div>

              {/* --------------------------------------------- */}

              {/* Search bt */}
              <div className="">
                <button
                  className="btn btn-accent mt-5 w-[146px]"
                  onClick={hdlSearchBtn}
                >
                  Search
                </button>
              </div>
              {/* Cancel bt */}
              <div className="">
                <button
                  className="btn btn-base-300 text-slate-600 mt-5 w-[100px]"
                  onClick={actionRefresh}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
          {/* --------------------------------------------- */}

          {/* MainImg */}

          {/* --------------------------------------------- */}
        </div>

        <img
          src={mainImg}
          alt="avatar"
          className="w-[795px] absolute top-[220px]"
        />
        {/*  Paw Logo*/}
        <Pawlogo className="w-[80px] absolute top-[70px] text-secondary " />

        {/* --------------------------------------------- */}
      </div>
      {/* --------------------------------------------- */}
    </div>
  );
}

export default SearchFilters;
