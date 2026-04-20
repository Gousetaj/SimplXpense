import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AuthGuard from "./AuthGuard"
import { authRoutes } from "./AuthRoutes"
import { mainRoutes } from "./MainRoutes"

function AppRouter(){
return <>
<Router>
    <Routes>
        <Route path={authRoutes.path} element={<authRoutes.component />}>
            {authRoutes.children.map((child:any)=><Route key={child.name} path={child.path} element={<child.component/>}></Route>)}
        </Route>
        <Route path={mainRoutes.path} element={<AuthGuard><mainRoutes.component /></AuthGuard>}>
            {mainRoutes.children.map((child:any)=><Route key={child.name} path={child.path} element={<child.component/>}></Route>)}
        </Route>
       <Route path="*" element={<AuthGuard><>Page Not Found</></AuthGuard>}></Route>
    </Routes>
</Router>
</>
}
export default AppRouter