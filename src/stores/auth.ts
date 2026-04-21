import { create } from "zustand";

export const useAuthStore = create((set)=>({
    user:JSON.parse(localStorage.getItem('user')||'null'),
    login:(user:any)=>{
        localStorage.setItem('user',user)
        set({user})
},
    logout:()=>{
        localStorage.removeItem('user')
        set({user:null})
}
}))