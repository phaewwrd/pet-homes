import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import MainNavUser from "../components/MainNavUser";
import Footer from "../components/Footer";
import { actionMember } from "../api/auth";
import useAuthStore from "../stores/auth-store";
import { toast } from "react-toastify";

function LayoutUser() {
  

  return (
    <div className="w-full">
      <MainNavUser />
      <Outlet />
      <Footer />
    </div>
  );
}

export default LayoutUser;
