import React, { useState } from "react";
import { PetHomeLogo } from "../../Icons";
import useUserInfoStore from "../../stores/user-store";
import { actionUpdateUser } from "../../api/user";
import useAuthStore from "../../stores/auth-store";
import FormUpdateUser from "../user/FormUpdateUser";

export default function AllFormUpdateVets({
    userInfo,
  isOpen,
  setIsOpen,
  checkUserId,
  fetchData,
}) {
  const [editData, setEditData] = useState(userInfo);
  
  const token = useAuthStore((state) => state.token);
  
  const handleUpdateUser = async () => {
      try {
          const result = await actionUpdateUser(userInfo.id, editData, token);
        } catch (error) {
            console.log(error);
        } finally {
            setIsOpen(false);
        }
        
        fetchData();
    };
    

  return (
    <div className="  ">
      <div className="flex flex-col  w-full  rounded-lg bg-base-100  p-5">
        <div className="grid grid-cols-5 pt-5 gap-20 place-items-center ">
          {/* doctor name */}
          <div className="w-[150px] flex items-center gap-2">
            <PetHomeLogo className="text-accent w-[40px] h-[40px] " />
            <div className="text-accent">{userInfo?.doctor_name}</div>
          </div>
          {/* Vets name */}
          <div className="text-accent w-[150px]">{userInfo?.name}</div>
          {/* email */}
          <div className="text-accent w-[150px] ">{userInfo?.email}</div>

          {/* tel */}
          <div className="text-accent w-[150px]">{userInfo?.phone}</div>
          {/* edit */}
          <div className="w-[150px]">
            <button
              key={userInfo?.result}
              className="btn btn-accent w-[100px]"
              onClick={() => checkUserId(userInfo?.id)}
            >
              Edit
            </button>
          </div>

          {/* ---------- */}
        </div>
      </div>
      {/* FormUpdateUser */}
      {isOpen && (
        <div className=" items-center w-full flex-col flex   ">
          {/* edit form */}
          <div className=" w-[full] p-5 grid grid-cols-4 gap-10">
            <div className=" flex ">
              <FormUpdateUser
                name="firstName"
                value={editData?.firstName}
                setEditData={setEditData}
                editData={editData}
              />
            </div>
            <div className=" flex ">
              <FormUpdateUser
                name="lastName"
                value={editData?.lastName}
                setEditData={setEditData}
                editData={editData}
              />
            </div>
            <div className=" flex ">
              <FormUpdateUser
                name="email"
                value={editData?.email}
                setEditData={setEditData}
                editData={editData}
              />
            </div>
           
            <div className=" flex ">
              <FormUpdateUser
                name="tel"
                value={editData?.tel}
                setEditData={setEditData}
                editData={editData}
              />
            </div>
          </div>
          {/* Button */}
          <div className="flex justify-end gap-2 mt-10 pb-5  w-full">
     
            {/* cancle */}
            <button
              type="button"
              onClick={() => setIsOpen(null)}
              className="btn btn-ghost"
            >
              cancel
            </button>
            {/* Confirm */}
            <button
              onClick={() => handleUpdateUser(userInfo?.id)}
              type="button"
              className="btn btn-primary w-[150px]"
              label="Confirm"
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
