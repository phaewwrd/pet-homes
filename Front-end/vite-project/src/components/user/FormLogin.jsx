import React from 'react'
import FormInput from './FormInput'

function FormLogin() {
  return (
    <div className="w-full flex justify-center ">
      <div className="mt-10 drop-shadow-lg">
        {/* form login */}
        <form
          action=""
          className="bg-white w-[449px] gap-5 p-5 pt-20 pb-10 flex flex-col justify-center place-items-center"
        >
          <FormInput name="email" type="text" />
          <FormInput name="password" type="text" />
         
          <div className="flex justify-end mt-5 w-full ">
          <button className="btn btn-accent w-[150px] text-[20px]">Log In</button>
          </div>
        </form>
      </div>
    </div>  )
}

export default FormLogin