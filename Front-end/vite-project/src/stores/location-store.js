import { create } from "zustand";


const useLocationStore = create((set) => ({
    location: [], 
    setLocation: (data) => {
      console.log("Setting location data:", data);
      set({ location: data });
    },
  }));
  

export default useLocationStore;