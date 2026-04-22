import { useState } from "react"
import RoleTable from "@/components/reusables/RoleTable"
import ExpenseCategoryForm from "./ExpenseCategoryForm"

function ExpenseCategoryList(){

    const [categories, setCategories] = useState([
        {
            CategoryId:'Food',
            CategoryName:'Food',
            ParentCategoryId:''
        }
    ])

    const [open, setOpen] = useState(false)
    const [mode, setMode] = useState<'add' | 'view' | 'update'>('add')
    const [selected, setSelected] = useState<any>({})

    const fields = [
        { caption: 'Category ID', dataField: 'CategoryId', dataType: 'string' },
        { caption: 'Category Name', dataField: 'CategoryName', dataType: 'string' },
        { caption: 'Parent Category ID', dataField: 'ParentCategoryId', dataType: 'string' },
    ]
    const noDataContent = {
        buttonText:'Add Category'

    }
    const handleAction = (action:any, item:any) => {

        if(action === 'delete'){
            setCategories(prev =>
                prev.filter(d => d.CategoryId !== item.CategoryId)
            )
            return
        }

        setMode(action)
        setSelected(item || {})
        setOpen(true)
    }

    const handleSave = (formData:any) => {

        if(mode === 'update'){
            setCategories(prev =>
                prev.map(d =>
                    d.CategoryId === selected.CategoryId ? formData : d
                )
            )
        }

        if(mode === 'add'){
            setCategories(prev => [...prev, formData])
        }

        setOpen(false)
    }

    return (
        <div>

            {!categories.length&&(<button onClick={()=>handleAction('add',{})}>
                Add Category
            </button>)}

            <RoleTable
                fields={fields}
                sampleData={categories}
                handleAction={handleAction}
                noDataContent={noDataContent}
            />

            {open && (
                <ExpenseCategoryForm
                    mode={mode}
                    data={selected}
                    fields={fields}
                    onClose={()=>setOpen(false)}
                    onSave={handleSave}
                />
            )}

        </div>
    )
}

export default ExpenseCategoryList