import React from 'react'
import { actionMembership } from '../api/auth';
import { create } from 'zustand';
import { persist }  from "zustand/middleware"

const authStore = (set) =>({
    user: [],
    token: '',
    actionLoginWithZustand: async(value) =>{
        try {
            const res = await actionMembership(value)
            const {} = res.data
            set({user: payload, token: token})
            return { success: true, role: payload.role}
        } catch (error) {
            return { success: false, error: error.response.data.message}
        }
    },
    actionLogout: () =>{
        set({user: null, token: null})
    }

})

const useAuthStore = create(persist(authStore, {name: 'auth-store'}))

export default useAuthStore;