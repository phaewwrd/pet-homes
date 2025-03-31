import React from "react";
import Layout from "../layout/Layout";
import LayoutUser from "../layout/LayoutUser";

import { Routes, Route, Outlet } from "react-router";
import Home from "../pages/Home";
import Register from "../pages/auth/Register";
import Membership from "../pages/auth/Membership";
import UserHome from "../pages/user/UserHome";
import UserMakeappoinement from "../pages/user/UserMakeappoinement";
import MyProfile from "../pages/user/MyProfile";
import MyAppointment from "../pages/user/MyAppointment";
import EditAppointment from "../pages/user/EditAppointment";
import AddNewPet from "../pages/user/AddNewPet";
import LayoutAdmin from "../layout/LayoutAdmin";
import VetsMakeappointment from "../pages/user-vets/VetsMakeappointment";
import ProtectRoutes from "../layout/ProtectRoutes";
import GuestRoutes from "../layout/ProtectRouteGuest";
import ProtectVetsRoutes from "../layout/ProtectVetsRoutes";
import VetsMembership from "../pages/auth/vetsMembership";
import VetsRegister from "../pages/auth/VetsRegister";
import VetsDashboard from "../pages/user-vets/VetsDashboard";


function AppRoutes() {
  return (
    <>
      <Routes>
        {/* Public */}
        <Route path="/" element={<GuestRoutes />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Membership />} />
          <Route path="register" element={<Register />} />
          <Route path="vet/login" element={<VetsMembership />} />
          <Route path="vet/register" element={<VetsRegister />} />
        </Route>

        {/* Membership */}
        <Route path="/member" element={<ProtectRoutes el={<LayoutUser />} allows={"USER"}/>}>
          <Route index element={<UserHome />} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="myappointment" element={<MyAppointment />} />
          <Route path="makeappointment" element={<UserMakeappoinement />} />
          <Route path="editappointment" element={<EditAppointment />} />
          <Route path="addnewpet" element={<AddNewPet/>}/>
        </Route>

        {/* Pet */}
        {/* <Route path='/pet' element={<LayoutUser />}>
          <Route index element={<UserHome/>} />
          <Route path='' element={<MyProfile/>} />
           <Route path='myappointment' element={<MyAppointment/>} />
          <Route path='makeappointment' element={<UserMakeappoinement/>}/>
        </Route> */}

        {/* Vets Membership */}
        <Route path="/vet" element={<ProtectVetsRoutes el={<LayoutAdmin />} allows={"VETS"}/>}>
          <Route index element={<VetsDashboard />}/>
          <Route path="vetsmakeappointment" element={<VetsMakeappointment />} />

        </Route>
        {/* admin */}
        {/* <Route>
          <Route element={"Dashboard"} />
        </Route> */}
      </Routes>
    </>
  );
}

export default AppRoutes;
