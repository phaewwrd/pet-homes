import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import MainNavUser from "../components/MainNavUser";
import Footer from "../components/Footer";
import { actionMember } from "../api/auth";
import useAuthStore from "../stores/auth-store";
import { toast } from "react-toastify";
import MainNavAdmin from "../components/MainNavVets";

function LayoutAdmin() {
 
  return (
    <div className="w-full">
      <MainNavAdmin />
      <Outlet />
      <Footer />
    </div>
  );
}

export default LayoutAdmin;
