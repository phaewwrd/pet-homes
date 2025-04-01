import React from "react";




function FormInputPet({ register = () => {}, name, errors, type = "text" }) {
  return (
  <div className="w-[250px] flex flex-col "> 
      <label>{name}</label>
      <div className='mt-2'>
        <input type={type} 
        placeholder={name}
        {...register(name)}
        className='w-[250px] input input-bordered rounded-2xl flex items-center '/>
        {/* {errors[name] && (<p className='text-rose-400'>{errors[name].message}</p>)} */}
        
      </div>
    </div>

)}


export default FormInputPet;
