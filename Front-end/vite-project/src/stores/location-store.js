import { create } from "zustand";
import { persist } from "zustand/middleware";
import { actionMaps } from "../api/vets";

const useLocationStore = create(
  persist(
    (set) => ({
      location: [], 
      setLocation: (newLocationData) => set({ location: newLocationData }),
      
      fetchData: async () => {  // ✅ โหลดข้อมูลจาก API
        try {
          const locationData = await actionMaps();
          set({ location: locationData.data});
        } catch (error) {
          console.error("Error fetching location:", error);
        }
      }
    }),
    { name: "location-store" }
  )
);

export default useLocationStore;

