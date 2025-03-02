import { create } from "zustand";


const useLocationStore = create((set) => ({
    location: [], // ค่าเริ่มต้นเป็นอาร์เรย์ว่าง
    setLocation: (data) => {
      console.log("Setting location data:", data);
      set({ location: data });
    },
  }));
  

export default useLocationStore;