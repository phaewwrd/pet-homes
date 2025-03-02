import axios from "axios"

// Maps location
export const actionMaps = async () =>{
    const res = await axios.get('http://localhost:8800/maps/getallvets', )
    return res
}

export const actionSearchVets = async (value) =>{
    const res = await axios.get('http://localhost:8800/maps/searchvets', {
        params: value})
    return res
}