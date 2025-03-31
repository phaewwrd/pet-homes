import React from "react";
import { actionMembership } from "../api/auth";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { actionVetsMembership } from "../api/vets";

const authStore = (set) => ({
  user: [],
  token: "",
  actionLoginWithZustand: async (value) => {
    try {
      const res = await actionMembership(value);
      const { payload, token } = res.data;
      set({ user: payload, token: token });
      return { success: true, role: payload.role };
    } catch (error) {
      console.log("catch", error);
      return { success: false, message: error.response.data.message };
    }
  },
  actionLogout: () => {
    set({ user: null, token: null, appointment :null, pet: null });

    // localStorage.clear()
    localStorage.removeItem("user-info");
   
  },
  actionVetsLoginWithZustand: async (value) => {
    try {
      const res = await actionVetsMembership(value);
      const { payload, token } = res.data;
      set({ user: payload, token: token });
      return { success: true, role: payload.role };
    } catch (error) {
      console.log("catch", error);
      return { success: false, message: error.response.data.message };
    }
  },
});

const useAuthStore = create(persist(authStore, { name: "auth-store" }));

export default useAuthStore;
