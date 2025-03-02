import React, { useEffect, useState } from "react";
import { PetHomeLogo, VetsLogo } from "../../Icons";
import PetsHomeInfo from "../Logo/PetsHomeInfo";
import PetsHomeLogo from "../Logo/PetsHomeLogo";
import { use } from "react";
import axios from "axios";
import { actionAdminInfo } from "../../api/admin";
import useAuthStore from "../../stores/auth-store";

function FormInputProfile() {
  const [userInfo, setUserInfo] = useState(null);
  const res = useAuthStore((state) => state.token);
  console.log(res);



  useEffect(()=>{
    const fetchData = async () => {
      try {
        const userData = await actionAdminInfo(res);
        setUserInfo(userData)
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };
    fetchData()
  },[res])
  
  console.log(userInfo);
  

  return (
    <div>
      <div className="flex flex-col justify-center mb-10">
        <div className=" flex justify-between place-items-center mb-10">
          <div className="flex flex-col justify-evenly w-[300px] ">
            <div className="text-2xl font-semibold">My Profile</div>
            <div>your profile</div>
          </div>
        </div>

        {/* form */}
        

        <div className="flex flex-col  w-full  rounded-lg p-5 bg-base-100 border-2  ">
          <div className="grid grid-cols-5 gap-10 p-5 place-items-center border-b-2 border-slate-100">
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
          <div className="pl-5 pr-5 w-full ">
              <div className="grid grid-cols-5 gap-10 pt-5 place-items-center ">
                {/* firstName */}
                <div className="w-[150px] flex items-center gap-2">
                  <PetHomeLogo className="text-accent w-[40px] h-[40px] " />
                  <div  className="text-accent">
                    {userInfo?.result.firstName}
                  </div>
                </div>
                {/* lastName */}
                <div  className="text-accent w-[150px]">
                  {userInfo?.result.lastName}
                </div>
                {/* email */}
                <div className="text-accent w-[150px] ">
                  {userInfo?.result.email}
                </div>

                {/* tel */}
                <div  className="text-accent w-[150px]">
                  {userInfo?.result.tel}
                </div>
                {/* edit */}
                <div className="w-[150px]">

                <div key={userInfo?.result} className="btn btn-accent w-[100px]">Edit
                </div>
                </div>
              </div>
             

{/* ---------- */}
</div>
        </div>
    
      
      </div>
    </div>
  );
}

export default FormInputProfile;
