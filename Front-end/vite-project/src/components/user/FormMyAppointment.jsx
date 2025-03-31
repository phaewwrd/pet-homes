import React, { useEffect, useState } from "react";
import { PetHomeLogo } from "../../Icons";
import { Link } from "react-router";
import { actionGetAppointment } from "../../api/appointment";
import useAuthStore from "../../stores/auth-store";
import useAppointmentStore from "../../stores/appointment-store";
import AllFormUpdateAppointment from "../Appointment/AllFormUpdateAppointment";

function FormMyAppointment() {
  const appointment = useAppointmentStore((state) => state.appointment);
  const [isOpen, setIsOpen] = useState(null);

  const fetchAppointmentData = useAppointmentStore(
    (state) => state.fetchAppointmentData
  );

  const checkId = (value) => {
    setIsOpen((prev) => (prev === value ? null : value));
  };

  console.log(appointment);

  useEffect(() => {
    fetchAppointmentData();
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center mb-10">
        <div className=" flex justify-between place-items-center mb-10">
          <div className="flex flex-col justify-evenly w-[300px] ">
            <div className="text-2xl font-semibold">My Appointment</div>
            <div>your appointment</div>
          </div>
          <Link
            to="/member/makeappointment"
            className=" btn btn-primary w-[220px] text-[15px]"
          >
            Make appointment
          </Link>
        </div>

        {/* form */}
        <div className="bg-base-100  border-2 border-slate-100 rounded-lg p-5">
          <div className=" rounded-lg  bg-base-100 pt-5 pb-5 w-[1064px] p-5">
            <div className=" grid grid-cols-5 w-full border-b-2 pb-5 place-items-center ">
              <div className="w-[100px] ">
                {/* Pet's name */}
                <div>Pet's name</div>
              </div>
              {/* Vet's name */}
              <div className="w-[100px] ">
                <div>Vet's name</div>
              </div>
              {/* Date */}
              <div className="w-[100px] ">
                <div>Date</div>
              </div>
              {/* Time */}
              <div className="w-[100px] ">
                <div>Time</div>
              </div>
              {/* Edit */}
              <div>edit</div>
            </div>
          </div>
          {/* Appointment Data */}
          {appointment?.map((el ,index)=>(
           
           <AllFormUpdateAppointment  fetchAppointmentData={fetchAppointmentData} isOpen={isOpen} setIsOpen={setIsOpen} checkId={checkId} appointment={el} index={index} />
         
       ))}
        </div>
      </div>
       
    </div>
  );
}

export default FormMyAppointment;
