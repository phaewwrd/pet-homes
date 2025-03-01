import axios from "axios"

export const actionRegister = async (value) =>{
    return await axios.post('http://localhost:8800/register', value)
}
export const actionMembership = async (value) =>{
    return await axios.post('http://localhost:8800/login', value)
}
export const actionMember = async (token) =>{
    console.log(token);
    return await axios.get('http://localhost:8800/me', {
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}

// Maps location
export const actionMaps = async () =>{
    const res = await axios.get('http://localhost:8800/maps/getallvets', )
    return res
}




