import { create } from "zustand";


const useSearchStore = create((set) =>({
    selectedPetType :'',
    selectedProvince: '',

    setSelectedPetType : (value) =>{
        set({selectedPetType: value})
    },
    setSelectedProvince: (value) =>{
        set({ selectedProvince : value})
    }
}))

export default useSearchStore;