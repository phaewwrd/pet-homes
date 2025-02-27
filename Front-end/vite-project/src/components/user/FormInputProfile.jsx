import React from "react";
import { PetHomeLogo, VetsLogo } from "../../Icons";
import PetsHomeInfo from "../Logo/PetsHomeInfo";
import PetsHomeLogo from "../Logo/PetsHomeLogo";

function FormInputProfile(props) {
    const { profile } = props;


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
           <div className="flex flex-col rounded-lg p-5 bg-base-100 border-2 border-slate-100 ">
             <div className="grid grid-cols-6 gap-5 border-b-2 pb-5 border-slate-200 place-items-center">
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
               <div>password</div>
               </div>
               <div className="w-[150px]">
               <div>tel</div>
               </div>
             <div className="w-[150px]">
               <div>edit</div>
             </div>
             </div>
             <div className="pl-5 pr-5 w-full ">
               {profile?.map((el, index) => (
                 <div className="grid grid-cols-6 gap-5 pt-5 place-items-center ">
                   {/* firstName */}
                   <div className="w-[150px] flex items-center gap-2">
                     <PetHomeLogo className="text-accent w-[40px] h-[40px] " />
                     <div key={index} className="text-accent">
                       {el.firstName}
                     </div>
                   </div>
                   {/* lastName */}
                   <div key={index} className="text-accent w-[150px]">
                     {el.lastName}
                   </div>
                   {/* email */}
                   <div key={index} className="text-accent w-[150px] ">
                     {el.email}
                   </div>
                   {/* password */}
                   <div key={index} className="text-accent w-[150px]">
                     {el.password}
                   </div>
                   {/* tel */}
                   <div key={index} className="text-accent w-[150px]">
                     {el.tel}
                   </div>
                   {/* edit */}
                   <div key={index} className="btn btn-accent w-[100px]">
                     {index}
                   </div>
                 </div>
               ))}
   
               {/* ---------- */}
             </div>
           </div>
         </div>
       </div>
  );
}

export default FormInputProfile;
