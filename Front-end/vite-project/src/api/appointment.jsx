import axios from "axios";

export const actionMakeAppointment = async (value, token) => {
    try {
      
        const response = await axios.post(
            'http://localhost:8800/appointment/makeappointment',value, 
            {
                headers: {
                    Authorization: `Bearer ${token}` 
                }
            }
        );
        return response.data; // ส่งข้อมูลที่ตอบกลับมา
    } catch (error) {
        console.error("Error during pet registration:", error);
        throw error; 
    }
};

export const actionGetAppointment = async (token) =>{
    console.log(token);
    return await axios.get('http://localhost:8800/appointment/get', {
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}

export const actionUpdateAppointment = async (id,value, token) => {
    try {
        console.log(id);
        console.log('value', value)
        const response = await axios.patch(
            `http://localhost:8800/appointment/update/${id}`,value,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        return response.data; // ส่งข้อมูลที่ตอบกลับมา
    } catch (error) {
        console.error("Error during Appointment registration:", error);
        throw error;
    }
};

export const actionDeleteAppointment = async (id, token) => {
    return await axios.delete(`http://localhost:8800/appointment/delete/${id}`, {
       headers: {
          Authorization: `Bearer ${token}`
       }
    })
 }