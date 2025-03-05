import { create } from "zustand";
import { actionGetAppointment } from "../api/appointment";
import { persist } from "zustand/middleware";
import useAuthStore from "./auth-store";

const appointmentStore = (set) => ({
    appointment: [], 
    setappointment: (newAppointmentData) => set({ appointment: newAppointmentData }),
    fetchAppointmentData: async(value) => {
      try {
        const token = useAuthStore.getState().token;
        const appointmentData = await actionGetAppointment(token);
      set({ appointment: appointmentData.data.result });
    //   return appointment
      } catch (error) {
        console.log(error);
      }
      
    }}
  )
    
  
  // 
  const useAppointmentStore = create(persist(appointmentStore, {name: 'auth-store'}))
  
  export default useAppointmentStore;