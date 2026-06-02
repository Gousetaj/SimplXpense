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
                    path:'/expense-categories',
                    component:lazy(()=>import('@/views/settings/ExpenseCategory/ExpenseCategoryList')),
                },
                {
                    name:'My Expense',
                    path:'/MyExpense',
                    component:lazy(()=>import('@/views/requisition/ExpenseRequisition/ExpenseRegistrationList')),
                },

    {
      name: 'Add Expense',
      path: '/expenses/add',
      component: lazy(() =>
        import('@/views/requisition/ExpenseRequisition/ExpenseRegistrationForm')
      ),
    },


    {
      name: 'Edit Expense',
      path: '/expenses/edit/:id',
      component: lazy(() =>
        import('@/views/requisition/ExpenseRequisition/ExpenseRegistrationForm')
      ),
    },
    {
      name: 'View Expense',
      path: '/expenses/view/:id',
      component: lazy(() =>
        import('@/views/requisition/ExpenseRequisition/ExpenseRegistrationForm')
      ),
    },
        ]
    }
