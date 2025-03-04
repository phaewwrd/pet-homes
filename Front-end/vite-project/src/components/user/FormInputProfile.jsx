import React, { useEffect, useState } from "react";
import { PetHomeLogo, VetsLogo } from "../../Icons";
import PetsHomeInfo from "../Logo/PetsHomeInfo";
import PetsHomeLogo from "../Logo/PetsHomeLogo";
import { use } from "react";
import axios from "axios";
import useAuthStore from "../../stores/auth-store";
import AllFormUpdateUser from "./AllFormUpdateUser";
import useUserInfoStore from "../../stores/user-store";
import { actionUserInfo } from "../../api/user";

function FormInputProfile() {
  const {userInfo, setUserInfo} = useUserInfoStore();
  const [isOpen, setIsOpen] = useState(false);

  const token = useAuthStore((state) => state.token);

  const checkUserId = (id) => {
    setIsOpen((prev) => (prev === id ? null : id));
  };

  const fetchData = async () => {
    try {
      const userData = await actionUserInfo(token);
      setUserInfo(userData.result);
    } catch (error) {
      console.error("Error fetching admin data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // console.log('usreData', userInfo)


  return (
    <div className="">
      <div className="flex flex-col justify-center mb-10 ">
        <div className=" flex justify-between place-items-center mb-10 ">
          <div className="flex flex-col justify-evenly w-[300px] ">
            <div className="text-2xl font-semibold">My Profile</div>
            <div>your profile</div>
          </div>
        </div>
        {/* form user */}
        <div className="border-2 border-slate-100 rounded-lg p-5 w-full bg-base-100 ">
        <div className="grid grid-cols-5 gap-10 p-5 place-items-center  border-b-2 border-slate-100 ">
            <div className="w-[150px]">
              <div>First Name</div>
            </div>
            <div className="w-[150px]">
              <div>Last Name</div>
            </div>
            <div className="w-[150px]">
              <div>email</div>
            </div>

            <div className="w-[150px]">
              <div>tel</div>
            </div>
            <div className="w-[150px]">
              <div>edit</div>
            </div>
          </div>
      
            <AllFormUpdateUser userInfo={userInfo} isOpen={isOpen} checkUserId={checkUserId} setIsOpen={setIsOpen} fetchData={fetchData}/>

         
      </div>
    </div>
    </div>
  );
}

export default FormInputProfile;
