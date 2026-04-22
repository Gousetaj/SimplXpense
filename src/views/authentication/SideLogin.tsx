import { useAuthStore } from "@/stores/auth"

function SideLogin(){
    const login = useAuthStore((s:any)=>s.login)
    const loginn=()=>{
        login(JSON.stringify({"access_token":"asfd"}))
    }
    return <>
    <button onClick={loginn}>L</button>
    
    </>
}
export default SideLogin