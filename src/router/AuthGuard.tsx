import { useAuthStore } from "@/stores/auth"
import { Navigate } from "react-router-dom"

function AuthGuard({children}){
    let user = useAuthStore((s:any) => s.user)
    return user?children:<Navigate to={'/auth/login'} />

}
export default AuthGuard