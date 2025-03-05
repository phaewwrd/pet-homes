
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { actionGetPet } from "../api/pet";
import useAuthStore from "./auth-store";



const petStore = (set) => ({
  pet: [], 
  setPet: (newPetData) => set({ pet: newPetData }),
  fetchPetData: async(value) => {
    try {
      const token = useAuthStore.getState().token;
      const petData = await actionGetPet(token);
    set({ pet: petData.data.result });
    return pet
    } catch (error) {
      console.log(error);
    }
    
  }}
)
  

// 
const usePetStore = create(persist(petStore, {name: 'auth-store'}))

export default usePetStore;