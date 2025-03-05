import axios from "axios"

// Maps location
export const actionMaps = async () =>{
    const res = await axios.get('http://localhost:8800/maps/getallvets', )
    console.log(res);
    return res
}

export const actionSearchVets = async (value) =>{
    console.log(value);
    const res = await axios.get(`http://localhost:8800/maps/searchvets?type=${value.selectedPetType}&province=${value.selectedProvince}&searchQuery=${value.searchQuery}`, {
        params: value})
    return res
}