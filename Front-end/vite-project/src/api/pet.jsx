import axios from "axios"

export const actionPetRegister = async (value, token) => {
    try {
        const response = await axios.post(
            'http://localhost:8800/pet/add',value, 
            {
                
                headers: {
                    Authorization: `Bearer ${token}` 
                }
            }
        );
        return response.data; 
    } catch (error) {
        console.error("Error during pet registration:", error);
        throw error; 
    }
};

export const actionGetPet = async (token) =>{
    console.log(token);
    return await axios.get('http://localhost:8800/pet/get', {
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}

export const actionUpdatePet = async(id,value,token) =>{
    console.log("token",token);
    console.log("value",value);
    return await axios.patch(`http://localhost:8800/pet/update/${id}`,value, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}


export const actionDeletePet = async (id, token) => {
    return await axios.delete(`http://localhost:8800/pet/delete/${id}`, {
       headers: {
          Authorization: `Bearer ${token}`
       }
    })
 }