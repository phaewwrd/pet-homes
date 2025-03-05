import React, { useEffect, useState } from "react";
import { Form, useNavigate } from "react-router";
import DateTime from "./DateTime";
import SelectPets from "./SelectPets";
import SelectVets from "./SelectVets";
import PetsHomeLogo from "../Logo/PetsHomeLogo";
import vetHorse from "../../assets/vetHorse.png";

import useAuthStore from "../../stores/auth-store";
import { actionMakeAppointment } from "../../api/appointment";
import sweetAlert from "sweetalert2"
 


function MakeAppointmentForm() {
  const token = useAuthStore((state) => state.token);
  const navigate = useNavigate();

  const [data, setData] = useState({
    date: "",
    time: "",
    petId: "",
    vetClinicId: "",
  });

  const hdlConfirm = async (data, token) => {
    try {
      const res = await actionMakeAppointment(data, token);
      console.log(res);
      sweetAlert.fire({
        title: "Success",
        text: "Appointment created successfully",
        icon: "success",
        confirmButtonText: "OK",
      })
    } catch (err) {
      console.log(err);
    }
    navigate('/member/myappointment')
  };

console.log('data 2',data);
  return (
    <div className="w-full flex flex-col justify-center bg-amber-50 pt-10  gap-10">
      <PetsHomeLogo />
      <div className=" flex justify-center ">
        <div className="flex flex-col w-[1150px] justify-center ">
        <div className="bg-secondary-content w-full px-5 py-5 rounded-t-lg flex flex-col justify-center text-[16px]">
          <label htmlFor="" className=" text-white text-2xl pl-10">
            Make appointment
          </label>
        </div>
        {/* Select Part */}
          <div className="bg-white flex  w-full justify-center gap-[70px] pt-10 pb-10 shadow-lg rounded-b-lg"> 
            <div className="flex flex-col gap-8 w-[334px]">
              <SelectPets   data={data} setData={setData} />
              <SelectVets  data={data} setData={setData} />
            </div>
          <DateTime data={data} setData={setData}  />
          </div>
        </div>
      </div>

      {/* buttons */}
      <div className="w-full flex justify-center">
      <div className="w-[1149px] flex justify-end gap-10">
        <div className="btn btn-secondary w-[167px] ">Delete</div>
        <div className="btn btn-accent w-[200px]"
        onClick={() => hdlConfirm(data, token)}
        >Confirm</div>
        </div>
      </div>
      <div className="w-full flex justify-center">

      <img className="w-[720px]" src={vetHorse} alt="" />
      </div>
    </div>
  );
}

export default MakeAppointmentForm;
