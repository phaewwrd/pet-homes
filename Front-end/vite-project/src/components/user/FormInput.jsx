import React from 'react'

function FormInput(props) {
    const {register, name, errors, type="text"} = props
  return (
    <div> 
      <label>{name}</label>
      <div className='mt-2'>
        <input type={type} 
        placeholder={name}
        // {...register(name)}
        className='w-[350px] input input-bordered rounded-[5px] flex items-center gap-2'/>
        {/* {errors[name] && (<p className='text-rose-400'>{errors[name].message}</p>)} */}
        
      </div>
    </div>
  )
}

export default FormInput


// <input type={type} 
// placeholder={name}
// {...register(name)}
// className='w-[20px] bg-amber-800 input input-bordered flex items-center gap-2'/>
// {errors[name] && (<p className='text-rose-400'>{errors[name].message}</p>)}