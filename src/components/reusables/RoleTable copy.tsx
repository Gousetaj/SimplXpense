function RoleTable({ fields, sampleData, handleAction,noDataContent={} }: any) {
    return (
        <div>

            {/* 🔥 Header Actions */}
            <div style={{ marginBottom: 10, display: "flex", justifyContent: "flex-end" }}>
                <button onClick={() => handleAction('add', {})}>
                    {noDataContent.buttonText}
                </button>
            </div>

            <table
                border={1}
                cellPadding={10}
                style={{ width: '100%', borderCollapse: 'collapse' }}
            >
                <thead>
                    <tr>
                        {fields.map((field: any) => (
                            <th key={field.dataField}>
                                {field.caption}
                            </th>
                        ))}
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {sampleData && sampleData.map((item: any, index: any) => (
                        <tr key={item[fields?.[0].dataField] || index}>

                            {fields.map((field: any) => (
                                <td key={field.dataField}>
                                    {item[field.dataField]}
                                </td>
                            ))}

                            <td>
                                <button onClick={() => handleAction('view', item)}>
                                    View
                                </button>

                                <button onClick={() => handleAction('update', item)}>
                                    Edit
                                </button>

                                <button onClick={() => handleAction('delete', item)}>
                                    Delete
                                </button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default RoleTable