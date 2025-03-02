
import { create } from "zustand";


const usePetStore = create((set) => ({
    pet: [], 
    setPet: (data) => {
      console.log("Setting pet data:", data);
      set({ pet: data });
    },
  }));
  

export default usePetStore;