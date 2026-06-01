import { useMemo, useState } from "react";
import {
  IconEye,
  IconEdit,
  IconTrash,
  IconPlus,
  IconSearch,
} from "@tabler/icons-react";

import "./RoleTable.css";

function RoleTable({
  fields,
  sampleData,
  handleAction,
  noDataContent = {},
}: any) {

  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    if (!search.trim()) return sampleData;

    const query = search.toLowerCase();

    return sampleData.filter((row: any) =>
      fields.some((field: any) =>
        String(row[field.dataField] ?? "")
          .toLowerCase()
          .includes(query)
      )
    );
  }, [sampleData, fields, search]);

  return (
    <div className="table-card">

      {/* Search + Actions */}
      <div className="table-header">

        <div className="search-box">
          <IconSearch size={18} />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button
          className="btn-primary"
          onClick={() => handleAction("add", {})}
        >
          <IconPlus size={18} />
          {noDataContent.buttonText}
        </button>

      </div>

      <div className="table-wrapper">
        <table className="v-table">
          <thead>
            <tr>
              <th width="50">
                <input type="checkbox" />
              </th>

              {fields.map((field: any) => (
                <th key={field.dataField}>
                  {field.caption}
                </th>
              ))}

              <th width="150">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredData?.map((item: any, index: number) => (
              <tr
                key={item[fields?.[0]?.dataField] || index}
              >
                <td>
                  <input type="checkbox" />
                </td>

                {fields.map((field: any) => (
                  <td key={field.dataField}>
                    {item[field.dataField]}
                  </td>
                ))}

                <td>
                  <div className="action-buttons">

                    <button
                      className="icon-btn view"
                      onClick={() => handleAction("view", item)}
                    >
                      <IconEye size={18} />
                    </button>

                    <button
                      className="icon-btn edit"
                      onClick={() => handleAction("update", item)}
                    >
                      <IconEdit size={18} />
                    </button>

                    <button
                      className="icon-btn delete"
                      onClick={() => handleAction("delete", item)}
                    >
                      <IconTrash size={18} />
                    </button>

                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {!filteredData?.length && (
          <div className="empty-state">
            No records found
          </div>
        )}
      </div>
    </div>
  );
}

export default RoleTable;