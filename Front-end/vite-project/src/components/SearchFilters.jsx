import React from "react";
import mainImg from "../assets/mainImg.png";
import { Pawlogo, VetsLogo } from "../Icons";

function SearchFilters() {
  return (
    <div className="flex justify-center w-full  pt-[20px]">
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
            <input
              type="text"
              placeholder="Search"
              
              className="input input-bordered w-[294px] max-w-xs "
            />
            {/* --------------------------------------------- */}

            {/* Select */}
            <div className="flex justify-center mt-3 gap-6 drop-shadow-lg">
              {/* type of Pets */}
              <div className="form-control w-[250px] max-w-xs ">
                <label className="label" />
                <select className="select select-bordered w-full max-w-xs bg-primary text-white "
                >
                  <option selected disabled>
                    Type of Pets
                  </option>
                  <option>Normal Pets</option>
                  <option>Exotic Pets</option>
                </select>
              </div>
              {/* --------------------------------------------- */}

              {/* Province */}
              <div className="form-control w-[250px] max-w-xs ">
                <label className="label " />
                <select className="select select-bordered w-full max-w-xs bg-primary text-white">
                  <option selected disabled>
                    Province
                  </option>
                </select>
              </div>

              {/* --------------------------------------------- */}

              {/* Search bt */}
              <div className="">
                <button className="btn btn-accent mt-5 w-[146px]">
                  Search
                </button>
              </div>
            </div>
          </div>
          {/* --------------------------------------------- */}

          {/* MainImg */}

          {/* --------------------------------------------- */}
        </div>

        <img src={mainImg} alt="avatar" className="w-[795px] absolute top-[220px]" />
      {/*  Paw Logo*/}
        <Pawlogo className="w-[80px] absolute top-[70px] text-secondary " />

      {/* --------------------------------------------- */}
      </div>
      {/* --------------------------------------------- */}
    </div>
  );
}

export default SearchFilters;
