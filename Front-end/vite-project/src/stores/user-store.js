import { create } from "zustand";
import { persist } from "zustand/middleware";


const useUserInfoStore = create(persist((set) => ({
  userInfo: null, 
  setUserInfo: (data) => {
    console.log("Setting location data:", data);
    set({ userInfo: data });
  },
}),{
  name: "user-info",
  getStorage: () => localStorage,
}));
  

export default useUserInfoStore;