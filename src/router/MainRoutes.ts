import { lazy } from 'react';

export const mainRoutes:any=
    {
        name:'Full',
        path:'/',
        component:lazy(()=>import('@/layout/full/FullLayout')),
        children:[
                {
                    name:'Login',
                    path:'/',
                    component:lazy(()=>import('@/views/StarterPage')),
                }
        ]
    }
