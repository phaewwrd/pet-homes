
import { create } from "zustand";


const useProvincetStore = create((set) => ({
    province: [], 
    setProvince: (data) => {
      console.log("Setting province data:", data);
      set({ province: data });
    },
  }));
  

export default useProvincetStore;