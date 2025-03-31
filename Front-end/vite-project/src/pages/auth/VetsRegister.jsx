import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "../../components/user/FormInput";

//alert
import { ToastContainer, toast } from "react-toastify";
//validator
import { actionRegister } from "../../api/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../utils/validator";
import MainNav from "../../components/MainNav";
import FormRegister from "../../components/user/FormRegister";
import PetsHomeLogo from "../../components/Logo/PetsHomeLogo";
import FormVetsRegister from "../../components/User-Vets/FormVetsRegister";

function VetsRegister() {
  return (
    <div className="w-full bg-amber-50 pt-10 pb-10">

      <PetsHomeLogo />
      <FormVetsRegister />

      
    </div>
  );
}

export default VetsRegister;
