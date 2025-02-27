import React from "react";
import Layout from "../layout/Layout";
import LayoutUser from "../layout/LayoutUser";

import { Routes, Route, Outlet } from "react-router";
import Home from "../pages/Home";
import Register from "../pages/auth/Register";
import Membership from "../pages/auth/Membership";
import Dashboard from "../pages/user-vets/Dashboard";
import UserHome from "../pages/user/UserHome";
import UserMakeappoinement from "../pages/user/UserMakeappoinement";
import MyProfile from "../pages/user/MyProfile";
import MyAppointment from "../pages/user/MyAppointment";
import EditAppointment from "../pages/user/EditAppointment";
import AddNewPet from "../components/pet/AddNewPetForm";

function AppRoutes() {
  return (
    <>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Membership />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Membership */}
        <Route path="/member" element={<LayoutUser />}>
          <Route index element={<UserHome />} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="myappointment" element={<MyAppointment />} />
          <Route path="makeappointment" element={<UserMakeappoinement />} />
          <Route path="editappointment" element={<EditAppointment />} />
          <Route path="addnewpet" element={<AddNewPet/>} />
        </Route>

        {/* Pet */}
        {/* <Route path='/pet' element={<LayoutUser />}>
          <Route index element={<UserHome/>} />
          <Route path='' element={<MyProfile/>} />
           <Route path='myappointment' element={<MyAppointment/>} />
          <Route path='makeappointment' element={<UserMakeappoinement/>}/>
        </Route> */}

        {/* Vets Membership */}
        {/* <Route element={<Layout/>}>
          <Route element="{<Dashboard/>}" />
        </Route> */}
        {/* admin */}
        {/* <Route>
          <Route element={"Dashboard"} />
        </Route> */}
      </Routes>
    </>
  );
}

export default AppRoutes;
