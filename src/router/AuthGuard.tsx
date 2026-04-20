
import { Navigate } from "react-router-dom"

function AuthGuard({children}){
    let user = localStorage.getItem('user')
    return user?children:<Navigate to={'/auth/login'} />

}
export default AuthGuard