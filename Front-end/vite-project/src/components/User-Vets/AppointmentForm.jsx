import React, { useEffect, useState } from "react";
import { PetHomeLogo } from "../../Icons";
import { Link } from "react-router";
import { use } from "react";
import useAppointmentStore from "../../stores/appointment-store";

// const pet = [
//   {
//     name: "MeeChock",
//     breed: "Siamese Cat",
//     age: "12",
//     gender: "Male",
//     chronicDisease: "none",
//     medicine: "+66 879 2345",
//     vaccined: "none",
//   },
// ];

function AppointmentForm() {
  const [openAppointmentId, setOpenAppointmentId] = useState(null);
  const fetchVetsAppointmentData = useAppointmentStore(
    (state) => state.fetchVetsAppointmentData
  );
  const Vetsappointment = useAppointmentStore((state) => state.Vetsappointment);

  useEffect(() => {
    fetchVetsAppointmentData();
  }, []);

  const checkId = (id) => {
    // ถ้า id ที่คลิกตรงกับ id ที่เปิดอยู่ ให้ปิดข้อมูล (set เป็น null)
    if (openAppointmentId === id) {
      setOpenAppointmentId(null);
    } else {
      setOpenAppointmentId(id); // ตั้งค่า id ที่คลิกให้เปิด
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center mb-10">
        <div className=" flex justify-between place-items-center mb-10">
          <div className="flex flex-col justify-evenly w-[300px] ">
            <div className="text-2xl font-semibold">Appointment</div>
            <div>your appointments</div>
          </div>
        </div>

        {/* form */}
        <div className="flex flex-col rounded-lg  bg-base-100 pt-5 pb-5 border-2 border-slate-100 w-[1064px] p-5">
          <div className="grid grid-cols-5 p-5 gap-5 pt-5 border-b pb-5">
            <div className=" ">
              <div>Date</div>
            </div>
            <div className=" ">
              <div>Time</div>
            </div>
            <div className=" ">
              <div>Pets Name</div>
            </div>
            <div className=" ">
              <div>Breed</div>
            </div>
            <div className=" ">
              <div>Status</div>
            </div>
          </div>
          {/* Appointment info. */}
          <div className=" w-full pt-5justify-center">
            {Vetsappointment?.map((el, index) => (
              <div
                className="grid grid-cols-5  items-center  gap-5 pt-5   "
                onClick={() => {
                  checkId(el.id);
                }}
              >
                <div className="flex justify-center  place-items-center gap-2 ">
                  <PetHomeLogo className="text-accent w-[40px] h-[40px] " />
                  {/* AppointMent Date */}
                  <div key={el?.date} className="text-accent ">
                    {el?.date}
                  </div>
                </div>

                {/* AppointMent time */}
                <div key={el?.time} className="text-accent ">
                  {el?.time}
                </div>

                {/* name */}
                <div key={el?.pet.name} className="text-accent">
                  {el?.pet.name}
                </div>
                {/* breed */}
                <div key={el?.pet.breed} className="text-accent ">
                  {el?.pet.breed}
                </div>
                <div
                  key={el?.bookingStatus}
                  className="text-accent w-[120px] text-center h-10 flex justify-center rounded-2xl place-items-center "
                >
                  {el?.bookingStatus}
                </div>
                {/* show more apoointment Info */}
                {openAppointmentId === el.id && (
                  <div className="w-[1000px] flex flex-col gap-5 border-2 border-slate-100 p-5 rounded-lg">
                    <div className="  rounded-lg grid grid-cols-5 pl-5 pr-5 gap-5">
                    <div className=" text-accent rounded-lg text-xl text-center place-content-center">
                      Pets Info.
                    </div>
                      {/* age */}
                      <div className="flex flex-col gap-5">
                        <div className="text-accent font-semibold">Age</div>
                        <div>{el.pet.age}</div>
                      </div>
                      {/* Vaccined */}
                      <div className="flex flex-col gap-5">
                        <div className="text-accent font-semibold">
                          Vaccined
                        </div>
                        <div>{el.pet.vaccined}</div>
                      </div>
                      {/* medicine */}
                      <div className="flex flex-col gap-5">
                        <div className="text-accent font-semibold">
                          Medicine
                        </div>
                        <div>{el.pet.medicine}</div>
                      </div>
                      {/* type */}
                      <div className="flex flex-col gap-5">
                        <div className="text-accent font-semibold">
                          Type
                        </div>
                        <div>{el.pet.type}</div>
                      </div>
                    </div>
                    {/* owner info */}
                    <div className="  rounded-lg grid grid-cols-5 p-5 pt-5 gap-5">
                      <div className="text-slate-400 rounded-lg text-xl text-center place-content-center">
                        Owner Info.
                      </div>
                      {/* user name */}
                      <div className="flex flex-col gap-5 ">
                        <div className="text-accent font-semibold">
                          Name of Owners
                        </div>
                        <div>
                          {el.pet.user.firstName} {el.pet.user.lastName}
                        </div>
                      </div>
                      {/* tel */}
                      <div className="flex flex-col gap-5 ">
                        <div className="text-accent font-semibold">
                          Tel. Number
                        </div>
                        <div>{el.pet.user.tel}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* ---------- */}
          </div>
        </div>
        {/* Make appointment  Button*/}
        <div className="w-full flex justify-center mt-10">
          <Link
            to="vetsmakeappointment"
            className=" btn btn-primary w-[220px] text-[15px]"
          >
            Make appointment
          </Link>
        </div>

        {/* {isOpen && <AddNewPet/>} */}
      </div>
    </div>
  );
}

export default AppointmentForm;
