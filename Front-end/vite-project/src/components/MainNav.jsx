import React from "react";
import { Link } from "react-router";
import { PetsHome } from "../Icons";

function MainNav() {
  return (
    <nav className=" text-teal-800 h-[100px] bg-white px-[135px] py-[21px]">
      <div className="flex justify-between">
        <Link to="/">
          <div className="flex gap-5">
          <PetsHome className="text-teal-800 w-[58px]" />
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

        <div className="flex gap-5">
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
