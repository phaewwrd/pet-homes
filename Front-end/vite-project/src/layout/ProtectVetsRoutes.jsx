import React, { useEffect, useState } from 'react'
import useAuthStore from '../stores/auth-store';
import { actionMember } from '../api/auth';
import { actionVetsMember } from '../api/vets';

function ProtectVetsRoutes({ el, allows }) {
    const token = useAuthStore((state) => state.token);
    console.log(token);
  
  
    const [ok, setOk] = useState(null);
  
    const checkPermission = async (token) => {
      try {
        const res = await actionVetsMember(token);
        const role = res.data.result.role;
        console.log("test admin");
        setOk(allows.includes(role));
        console.log(res.data.result.role);
  
        console.log(res);
      } catch (error) {
        console.log("error", error);
        setOk(false)
      }
    };
  
    useEffect(() => {
      checkPermission(token);
    }, []);
  
    if(ok === null){
      return <div>Loading...</div>
    }
    if(!ok){
      return <div>You are not authorized to access this page.</div>
    }
  
    
    return el;
  }

export default ProtectVetsRoutes