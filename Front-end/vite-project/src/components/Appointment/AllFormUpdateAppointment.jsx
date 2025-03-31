import React, { useEffect, useState } from "react";

import useAuthStore from "../../stores/auth-store";
import { Pawlogo, PetHomeLogo } from "../../Icons";
import { actionDeleteAppointment, actionUpdateAppointment } from "../../api/appointment";
import usePetStore from "../../stores/pet-store";
import useLocationStore from "../../stores/location-store";
import Calendar from "react-calendar";
import Swal from "sweetalert2";


export default function AllFormUpdateAppointment({
  isOpen,
  setIsOpen,
  checkId,
  appointment,
  index,
  fetchAppointmentData,
}) {
  const timeSlots = ["10:00", "12:00", "14:00", "16:00", "18:00", "19:00"];
  const token = useAuthStore((state) => state.token);
  const pet = usePetStore((state) => state.pet);
  const location = useLocationStore((state) => state.location);

  const [editData, setEditData] = useState({
    date: appointment.date ? appointment.date : "",
    time: appointment.time ? appointment.time : "",
    petId: appointment.petId ? appointment.petId : "",
    vetClinicId: appointment.vetClinicId ? appointment.vetClinicId : "",
  });

  const handleDateChange = (date) => {

   const currentDate = new Date();
       if (date < currentDate) {
         Swal.fire({
           icon: "error",
           title: "Invalid Date",
           text: "Please select a future date.",
         });
       }
    const formattedDate = date.toLocaleDateString("en-CA"); // "YYYY-MM-DD"
    setEditData({ ...editData, date: formattedDate });
  };

  const handleTimeChange = (time) => {
    setEditData({ ...editData, time: time });
  };

  //   sweetalert.fire
  const DeletePopUp = () => {
    Swal
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          handleDeleteAppointment();
          sweetalert.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
  };
  // delete function
  const handleDeleteAppointment = async () => {
    try {
      const result = await actionDeleteAppointment(appointment.id, token);
    } catch (error) {
      console.log(error);
    }
    fetchAppointmentData();
  };

  const handleUpdateAppointment = async () => {
    try {
      const id = appointment.id;
      await actionUpdateAppointment(id, editData, token);
      await fetchAppointmentData();
      setIsOpen(null);
    } catch (error) {
      console.log(error);
    } finally {
      fetchAppointmentData();
    }
  };

  console.log("editData", editData);
  return (
    <div className="">
      <div className=" w-full pt-5  gap-10 grid grid-5 ">
        <div className=" flex  place-items-center gap-10 ">
          {/* Pet's name */}
          <div className="flex justify-center  place-items-center gap-2 w-[120px] ">
            <PetHomeLogo className="text-accent w-[40px] h-[40px] " />
            <div key={appointment.petId} className="text-accent">
              {appointment.pet.name}
            </div>
          </div>

          {/* Vet's name */}
          <div className="gap-10 flex flex-col place-items-center ">
            <div
              key={appointment.vetClinicId}
              className="text-accent w-[250px] text-center h-10 flex justify-center rounded-2xl place-items-center bg-teal-50"
            >
              {appointment.vetClinic.name}
            </div>
          </div>
          {/* Date */}
          <div
            key={appointment.date.id}
            className="text-accent w-[200px] text-cente h-10 flex justify-center rounded-2xl place-items-center bg-teal-50"
          >
            {appointment.date}
          </div>
          {/* Time */}
          <div
            key={appointment.time.id}
            className="text-accent w-[200px] text-cente h-10 flex justify-center rounded-2xl place-items-center bg-teal-50"
          >
            {appointment.time}
          </div>

          {/* edit */}
          <div className="">
            <button
              onClick={() => checkId(index)}
              className="btn btn-accent w-[100px]"
            >
              Edit
            </button>
          </div>
        </div>
        <div>
          {isOpen === index && (
            // edit form
            <div className=" justify-center w-full flex-col flex m-5 ">
              <div className=" justify-evenly w-full flex place-items-start gap-5">
                {/* select pet name */}
                <div className="flex gap-2">
                  <Pawlogo className=" w-[30px] h-[30px]" />
                  <div className="place-self-end w-[200px]">
                    <select
                      className="select select-bordered w-[200px]"
                      defaultValue=""
                      onChange={(e) =>
                        setEditData({ ...editData, petId: e.target.value })
                      }
                    >
                      <option value="" disabled>
                        Select Pet
                      </option>
                      {pet?.map((pet) => (
                        <option key={pet.id} value={pet.id}>
                          {pet.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* select Vet name */}
                <div className=" w-[200px]">
                  <select
                    className="select select-bordered w-[200px]"
                    defaultValue=""
                    onChange={(e) =>
                      setEditData({ ...editData, vetClinicId: e.target.value })
                    }
                  >
                    <option value="" disabled>
                      Select Vets
                    </option>
                    {location?.map((location) => (
                      <option key={location.id} value={location.id}>
                        {location.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Calender */}
                <div className=" w-[300px]">
                  <Calendar
                    onChange={(e) => handleDateChange(e)}
                    value={editData.date ? new Date(editData.date) : new Date()} // แปลง string เป็น Date object
                    className="border rounded-lg p-2"
                  />
                </div>

                {/* Time Slot Dropdown */}
                <div className="border p-2 w-[150px] rounded-md flex justify-center">
                  <select
                    onChange={(e) => handleTimeChange(e.target.value)}
                    className="w-full "
                    placeholder="Select Date & Time"
                  >
                    <option disabled selected>
                      select time
                    </option>
                    {timeSlots.map((slot, index) => (
                      <option key={index} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* Buttons */}
              <div className="flex justify-end gap-2 m-10 pr-5">
                {/* delete */}
                <button
                  type="button"
                  onClick={() => DeletePopUp(appointment.id)}
                  className="btn btn-ghost"
                >
                  delete
                </button>
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
                  onClick={() => handleUpdateAppointment(appointment.id)}
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

        {/* ---------- */}
      </div>
    </div>
  );
}
