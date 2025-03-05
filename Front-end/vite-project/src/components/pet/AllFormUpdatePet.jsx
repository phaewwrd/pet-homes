import React, { useState } from "react";
import FormUpdatePet from "./FormUpdatePet";
import { PetHomeLogo } from "../../Icons";
import useAuthStore from "../../stores/auth-store";
import { actionDeletePet, actionUpdatePet } from "../../api/pet";
import sweetalert from "sweetalert2";
import usePetStore from "../../stores/pet-store";

export default function AllFormUpdatepet({
  pet,
  isOpen,
  checkPetId,
  index,
  setIsOpen,
}) {
  const [editData, setEditData] = useState(pet);

  const token = useAuthStore((state) => state.token);
  const fetchPetData = usePetStore((state) => state.fetchPetData);

  const handleUpdatePet = async () => {
    try {
      const result = await actionUpdatePet(pet.id, editData, token);
    } catch (error) {
      console.log(error);
    } finally {
      setIsOpen(false);
    }
    fetchPetData();
  };

//   sweetalert.fire
  const DeletePopUp = () =>{
    sweetalert.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeletePet();
        sweetalert.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }
// delete function
  const handleDeletePet = async () =>{
    try {
        const result = await actionDeletePet(pet.id, token);
    } catch (error) {
        console.log(error);
    }
    // } finally {
    //     setIsOpen(false);
    //   }
  
      fetchData();
  }

  return (
    <div>
      <div className="pl-5 pr-5 w-full  border-b-2 border-slate-100">
        <div className="grid grid-cols-8 gap-10 pt-5 place-items-center">
          {/* name */}
          <div className="w-[150px] flex items-center gap-2">
            <PetHomeLogo className="text-accent w-[40px] h-[40px] " />
            <div className="text-accent">{pet?.name}</div>
          </div>
          {/* breed */}
          <div className="text-accent w-[100px]">{pet?.breed}</div>
          {/* type */}
          <div className="text-accent w-[100px]">{pet?.type}</div>
          {/* age/months */}
          <div className="text-accent w-[100px] ">{pet?.age}</div>
          {/* gender */}
          <div className="text-accent w-[100px]">{pet?.gender}</div>
          {/* chronicDisease */}
          <div className="text-accent w-[100px]">
            {pet?.chronicDisease ? pet?.chronicDisease : "-"}
          </div>
          {/* medicine */}
          <div className="text-accent w-[100px]">
            {pet?.medicine ? pet?.medicine : "-"}
          </div>
          {/* vaccined */}
          <div className="text-accent w-[100px]">
            {pet?.vaccined ? pet?.vaccined : "-"}
          </div>
        </div>

        {/* ---------- */}
        {/* edit */}
        <div className="w-full flex justify-end pt-3 pb-5">
          <button
            onClick={() => checkPetId(index)}
            className="btn btn-accent w-[100px]"
          >
            Edit
          </button>
        </div>
        {isOpen === index && (
          // edit form
          <div>
            <div className=" justify-center w-full flex gap-20  ">
              <div className="flex gap-2">
                {/* <Pawlogo className=" w-[30px] h-[30px]" /> */}
                <FormUpdatePet
                  name="name"
                  value={editData?.name}
                  setEditData={setEditData}
                  editData={editData}
                />
              </div>

              <FormUpdatePet
                name="breed"
                value={editData?.breed}
                setEditData={setEditData}
                editData={editData}
              />
              <div className="place-self-end w-[100px]">
                <select
                  className="select select-bordered w-[120px]"
                  defaultValue=""
                  onChange={(e) =>
                    setEditData({ ...editData, type: e.target.value })
                  }
                >
                  <option value="" disabled>
                    Type
                  </option>{" "}
                  <option value="NORMAL">Normal Pets</option>
                  <option value="EXOTIC">Exotic Pets</option>
                </select>
              </div>
              <FormUpdatePet
                name="age"
                value={editData?.age}
                setEditData={setEditData}
                editData={editData}
              />
              <div className="place-self-end w-[100px]">
                <select
                  className="select select-bordered w-[120px]"
                  defaultValue=""
                  onChange={(e) =>
                    setEditData({ ...editData, gender: e.target.value })
                  }
                >
                  <option value="" disabled>
                    Gender
                  </option>{" "}
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                </select>
              </div>
              <FormUpdatePet
                name="chronicDisease"
                value={editData?.chronicDisease}
                setEditData={setEditData}
                editData={editData}
              />
              <FormUpdatePet
                name="medicine"
                value={editData?.medicine}
                setEditData={setEditData}
                editData={editData}
              />
              <FormUpdatePet
                name="vaccined"
                value={editData?.vaccined}
                setEditData={setEditData}
                editData={editData}
              />
            </div>
            {/* Buttons */}
            <div className="flex justify-end gap-2 mt-10 pb-5">
              {/* delete */}
              <button type="button"
              onClick={() => DeletePopUp(pet?.id)}
              className="btn btn-ghost"
              >delete</button>
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
                onClick={() => handleUpdatePet(pet?.id)}
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
    </div>
  );
}
