import { lazy } from 'react';

export const mainRoutes:any=
    {
        name:'Full',
        path:'/',
        component:lazy(()=>import('@/layout/full/FullLayout')),
        children:[
                {
                    name:'Home',
                    path:'/',
                    component:lazy(()=>import('@/views/StarterPage')),
                },
                {
                    name:'Settings',
                    path:'/Settings',
                    component:lazy(()=>import('@/views/settings/Settings')),
                },
                {
                    name:'Expense Categories',
                    path:'/ExpenseCategories',
                    component:lazy(()=>import('@/views/settings/ExpenseCategory/ExpenseCategoryList')),
                },
        ]
    }
