import axios from "axios";

export const actionUserInfo = async (token) => {
    const res = await axios.get("http://localhost:8800/member/info", {
      headers: {
        Authorization: `Bearer ${token}`,  // Ensure token is passed here
      }
    });
    return res.data;
    
}

export const actionUpdateUser = async(id,value,token) =>{
    console.log("token",token);
    console.log("value",value);
    return await axios.patch(`http://localhost:8800/member/update/${id}`,value, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}


// export const actionDeleteUser = async (id, token) => {
//     return await axios.delete(`http://localhost:8800/member/delete/${id}`, {
//        headers: {
//           Authorization: `Bearer ${token}`
//        }
//     })
//  }