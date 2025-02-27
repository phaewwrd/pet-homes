import React from 'react'
import FormInputPet from './FormInputPet'
import { Link } from 'react-router';
import { PetHomeLogo } from '../../Icons';



function AddNewPetForm(props) {
  const { pet } = props;
  return (
    <div>
      <div className="flex flex-col justify-center mb-10">
        <div className=" flex justify-between place-items-center mb-10">
          <div className="flex flex-col justify-evenly w-[300px] ">
            <div className="text-2xl font-semibold">My Pets</div>
            <div>your pets</div>
          </div>
          <Link to='/member/addnewpet' className="btn btn-accent w-[200px] h-[30px]">Add New Pets</Link>
        </div>

        {/* form */}
        <div className="flex flex-col rounded-lg  bg-base-100 pt-5 pb-5 border-2 border-slate-100 w-[1064px] p-5">
          <div className="grid grid-cols-8  w-full border-b-2 pb-5 place-items-center "> 
            <div className="w-[100px] ">
            <div>name</div>
            </div>
            <div className="w-[100px] ">
            <div>breed</div>
            </div>
            <div className="w-[100px] ">
            <div>age</div>
            </div>
            <div className="w-[100px] ">
            <div>gender</div>
            </div>
            <div className="w-[100px] ">
            <div>chronicDisease</div>
            </div>
            <div className="w-[100px] ">
            <div>medicine</div>
            </div>
            <div className="w-[100px] ">
            <div>vaccined</div>
            </div>
            <div className="w-[100px] ">
            <div>edit</div>
            </div>
          </div>
          <div className=" w-full pt-5">
            {pet?.map((el, index) => (
              <div className="grid grid-cols-8 place-items-center ">
                {/* name */}
                <div className="flex justify-center  place-items-center gap-2 w-[120px] ">
                  <PetHomeLogo className="text-accent w-[40px] h-[40px] " />
                  <div key={index} className="text-accent">
                    {el.name}
                  </div>
                </div>
                {/* breed */}
                <div key={index} className="text-accent w-[120px] text-center h-10 flex justify-center rounded-2xl place-items-center bg-teal-50">
                  {el.breed}
                </div>
                {/* age */}
                <div key={index} className="text-accent w-[80px] text-cente h-10 flex justify-center rounded-2xl place-items-center bg-teal-50">
                  {el.age}
                </div>
                {/* gender */}
                <div key={index} className="text-accent w-[120px] text-center h-10 flex justify-center rounded-2xl place-items-center bg-teal-50">
                  {el.gender}
                </div>
                {/* choronicDisease */}
                <div key={index} className="text-accent w-[120px] text-center h-10 flex justify-center rounded-2xl place-items-center bg-teal-50">
                  {el.chronicDisease}
                </div>
                {/* medicine */}
                <div key={index} className="text-accent w-[120px] text-center h-10 flex justify-center rounded-2xl place-items-center bg-teal-50">
                  {el.medicine}
                </div>
                {/* vaccined */}
                <div key={index} className="text-accent w-[120px] text-center h-10 flex justify-center rounded-2xl place-items-center bg-teal-50">
                  {el.vaccined}
                </div>
                {/* edit */}
                <div key={index} className="btn btn-accent w-[100px] text-center ">
                  {index}
                </div>
              </div>
            ))}

            {/* ---------- */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddNewPetForm