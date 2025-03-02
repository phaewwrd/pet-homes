import { create } from "zustand";


const useSearchStore = create((set) =>({
    searchQuery: '',
    selectedPetType :'',
    selectedProvince: '',
    setSearchQuery: (value) =>{
        set({searchQuery: value})
    },
    setSelectedPetType : (value) =>{
        set({selectedPetType: value})
    },
    setSelectedProvince: (value) =>{
        set({ selectedProvince : value})
    }
}))

export default useSearchStore;