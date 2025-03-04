import React from "react";




function FormUpdatePet({ value, name, type = "text", setEditData, editData }) {
  return (
  <div className="w-[100px]"> 
      <label>{name}</label>
      <div className='mt-2'>
        <input type={type} 
        value={value}
        onChange={(e) => setEditData({...editData, [name]: e.target.value})}        
        placeholder={name}
        className='w-[140px] input input-bordered rounded-2xl flex items-center '/>
        {/* {errors[name] && (<p className='text-rose-400'>{errors[name].message}</p>)} */}
        
      </div>
      
    </div>

)}


export default FormUpdatePet;
