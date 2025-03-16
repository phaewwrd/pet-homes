import { Outlet, Navigate,  } from "react-router-dom";
import useAuthStore from "../stores/auth-store";
import Home from "../pages/Home";
import Layout from "./Layout";

const GuestRoutes = ()=>{
    const token = useAuthStore((state)=> state.token);
    return token ? <Navigate to='/member' /> : <Layout/> ;
}

export default GuestRoutes;