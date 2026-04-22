import { useState, useEffect } from "react"

function ExpenseCategoryForm({ mode, data, fields, onClose, onSave }: any){

    const [form, setForm] = useState<any>({})

    const isView = mode === 'view'

    useEffect(()=>{
        setForm(data || {})
    },[data])

    const handleChange = (key:string, value:any) => {
        setForm((prev:any)=>({
            ...prev,
            [key]: value
        }))
    }

    const handleSubmit = () => {
        onSave(form)
    }

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>

                <h3>
                    {mode === 'add' && 'Add Category'}
                    {mode === 'update' && 'Edit Category'}
                    {mode === 'view' && 'View Category'}
                </h3>

                {fields.map((field:any)=>(
                    <div key={field.dataField} style={{marginBottom:12}}>
                        <label>{field.caption}</label><br/>

                        <input
                            style={styles.input}
                            value={form[field.dataField] || ''}
                            disabled={isView}
                            onChange={(e)=>
                                handleChange(field.dataField, e.target.value)
                            }
                        />
                    </div>
                ))}

                <div style={styles.actions}>
                    <button onClick={onClose}>
                        Close
                    </button>

                    {!isView && (
                        <button onClick={handleSubmit}>
                            Save
                        </button>
                    )}
                </div>

            </div>
        </div>
    )
}

export default ExpenseCategoryForm


const styles:any = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000
  },
  modal: {
    background: "#fff",
    padding: 20,
    borderRadius: 8,
    minWidth: 320,
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
  },
  input: {
    width: "100%",
    padding: "6px 8px",
    marginTop: 4
  },
  actions: {
    marginTop: 20,
    display: "flex",
    justifyContent: "flex-end",
    gap: 10
  }
}