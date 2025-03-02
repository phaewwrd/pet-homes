import React from "react";




function FormInputPet(props) {
  const {register, name, errors, type="text"} = props
  return (
  <div className="w-[100px]"> 
      <label>{name}</label>
      <div className='mt-2'>
        <input type={type} 
        placeholder={name}
        // {...register(name)}
        className='w-[140px] input input-bordered rounded-2xl flex items-center '/>
        {/* {errors[name] && (<p className='text-rose-400'>{errors[name].message}</p>)} */}
        
      </div>
    </div>

)}


export default FormInputPet;
