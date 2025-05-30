import React from "react";
import { Link } from "react-router";
import { PetsHome } from "../Icons";
import useAuthStore from "../stores/auth-store";
import { useNavigate } from "react-router";

function MainNavVets() {
  const actionLogout = useAuthStore((state) => state.actionLogout);
  const navigate = useNavigate();

  const hdlLogin = () =>{
    actionLogout()
    navigate('/')
  }

  return (
    <nav className=" text-teal-800 h-[100px] bg-white px-[135px] py-[21px]">
      <div className="flex justify-between">
        <div className="flex gap-20">
          {/* Home Icons */}
          <Link to="/admin">
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
          <div className="flex gap-5 self-center">
            <Link
              to="vetsmakeappointment"
              className="text-secondary-content text-[16px]"
            >
              Make Appointment
            </Link>
          </div>
        </div>
        <div className="flex gap-5">
          {/* Make appointment */}
         
          {/* Logout */}
          <div
            onClick={hdlLogin}
            className="btn btn-secondary w-[125px] text-[14px] border-teal-600"
          >
            Log out
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MainNavVets;
