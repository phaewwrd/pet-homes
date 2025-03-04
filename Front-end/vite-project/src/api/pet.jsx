import axios from "axios"

export const actionPetRegister = async (value, token) => {
    try {
        console.log("valueeeeee",value);
        const response = await axios.post(
            'http://localhost:8800/pet/add',value, 
            {
                
                headers: {
                    Authorization: `Bearer ${token}` // ส่ง token ใน header
                }
            }
        );
        return response.data; // ส่งข้อมูลที่ตอบกลับมา
    } catch (error) {
        console.error("Error during pet registration:", error);
        throw error; // ส่งข้อผิดพลาดออกมา
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