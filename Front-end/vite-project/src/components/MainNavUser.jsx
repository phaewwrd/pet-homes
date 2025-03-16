import React from 'react'
import { Link } from "react-router";
import { PetsHome } from "../Icons";
import { use } from 'react';
import useAuthStore from '../stores/auth-store';

function MainNavUser() {
  const actionLogout = useAuthStore((state) => state.actionLogout);

  const handleLogout = () => {
      actionLogout();
      window.location.href = "/";
  }

    return (
        <nav className=" text-teal-800 h-[100px] bg-white px-[135px] py-[21px]">
          <div className="flex justify-between">
            <div className='flex gap-20'>
              {/* Home Icons */}
            <Link to="/member">
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
            <div className='flex gap-5 self-center'>
              <Link to='myprofile' className='text-primary text-[16px]'>My profile</Link>
              <Link to='myappointment' className='text-secondary-content text-[16px]'>My Appointment</Link>
            </div>
              
            </div>
            <div className="flex gap-5">
              {/* Make appointment */}
            <Link
                to="makeappointment"
                className=" btn btn-primary w-[220px] text-[15px]"
              >
                Make appointment
              </Link>
              {/* Logout */}
              <div
                
                onClick={handleLogout}
                className="btn btn-secondary w-[125px] text-[14px] border-teal-600"
              >
                Log out
              </div>
            
             
            </div>
          </div>
        </nav>
      );
    }
    

export default MainNavUser