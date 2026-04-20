import { Outlet } from "react-router-dom"

function FullLayout(){
return <>
<div>Head</div>
    <Outlet></Outlet>
</>
}
export default FullLayout