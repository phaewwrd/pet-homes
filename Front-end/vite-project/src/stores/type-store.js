
import { create } from "zustand";


const useTypeStore = create((set) => ({
    type: [], 
    setType: (data) => {
      console.log("Setting type data:", data);
      set({ type: data });
    },
  }));
  

export default useTypeStore;