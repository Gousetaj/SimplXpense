import { lazy } from 'react';

export const authRoutes:any=
    {
        name:'Blank',
        path:'/auth',
        component:lazy(()=>import('@/layout/blank/BlankLayout')),
        children:[
                {
                    name:'Login',
                    path:'/auth/login',
                    component:lazy(()=>import('@/views/authentication/SideLogin')),
                }
        ]
    }
