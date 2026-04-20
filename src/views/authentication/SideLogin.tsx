

function SideLogin(){
    const login=()=>{
        localStorage.setItem('user','demo_user')
    }
    return <>
    <button onClick={login}>L</button>
    
    </>
}
export default SideLogin