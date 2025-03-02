import axios from "axios"

export const actionPetRegister = async (value) =>{
    return await axios.post('http://localhost:8800/pet/add', value)
}