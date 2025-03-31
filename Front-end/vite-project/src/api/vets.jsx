import axios from "axios"

// Maps location
export const actionMaps = async () =>{
    const res = await axios.get('http://localhost:8800/maps/getallvets', )
    console.log(res);
    return res
}

export const actionSearchVets = async (value) =>{
    console.log(value);
    const res = await axios.get(`http://localhost:8800/maps/searchvets?type=${value.selectedPetType}&province=${value.selectedProvince}`, {
        params: value})
    return res
}

export const actionVetsMembership = async (value) =>{
    return await axios.post('http://localhost:8800/vet/login', value)
}

export const actionVetsMember = async (token) =>{
    console.log(token);
    return await axios.get('http://localhost:8800/vet/me', {
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}

export const actionVetsRegister = async (value) =>{
    return await axios.post('http://localhost:8800/vet/register', value)
}

export const actionGetAllVetsApoointment = async (token) =>{
    return await axios.get('http://localhost:8800/vet/appointment', {
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}