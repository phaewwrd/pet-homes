import React, { useState } from "react";
import { Link } from "react-router";
import { PetsHome } from "../Icons";
import useLocationStore from "../stores/location-store";

function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const fetchdata = useLocationStore((state) => state.fetchData);
  const actionFetchlocation = () => {
    fetchdata();
  };
  return (
    <nav className=" text-teal-800 h-[100px] bg-white px-[135px] py-[21px]">
      <div className="flex justify-between">
        {/* Logo */}
        <Link to="/">
          <div className="flex gap-5">
            <PetsHome
              onClick={actionFetchlocation}
              className="text-teal-800 w-[58px]"
            />
            <div className="self-center">
              <span
                className="font-bold text-4xl "
                style={{ fontStyle: "italic" }}
              >
                Pets
              </span>
              <span className="text-[20px]"> Home</span>
            </div>
          </div>
        </Link>

        {/* Login & Register */}
        <div className="flex gap-5">
          <div
            className="btn btn-accent w-[125px] text-[14px] text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            Vets
          </div>
          {isOpen && (
            <div className="absolute z-20 top-20  bg-white bg-opacity-50 border border-gray-300 rounded-lg shadow-lg p-5">
              <div className="flex flex-col gap-5 ">
              <Link
                to="vet/login"
                className="btn btn-secondary w-[125px] text-[14px] border-teal-600"
                onClick={() => setIsOpen(!isOpen)}
              >
                Membership
              </Link>
              <Link
                to="vet/register"
                className="btn btn-primary w-[125px] text-[14px]"
                onClick={() => setIsOpen(!isOpen)}

              >
                Vets Register
              </Link>
              </div>
            </div>
          )}

          <Link
            to="login"
            className="btn btn-secondary w-[125px] text-[14px] border-teal-600"
          >
            Membership
          </Link>

          <Link
            to="register"
            className=" btn btn-primary w-[164px] text-[20px]"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default MainNav;
