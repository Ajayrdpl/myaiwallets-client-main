import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { NetworkContent } from "../../constants/content/dummy/NetworkConten";

const NetworkDataTable = () => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(NetworkContent);
  return (
    <div className="NetworkDataTable martop">
      <div className="dataTable cardBox martop">
        <DataTable
          value={data}
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          filterDisplay="row"
        >
          <Column field="S_No" header="S.No" filter sortable />
          <Column field="Name" header="Name" filter sortable />
          <Column field="Username" header="Username" filter sortable />
          <Column field="Email" header="Email" filter sortable />
          <Column field="Join_Date" header="Join Date" filter sortable />
          <Column field="Active_Status" header="Status" filter sortable />
          <Column field="Package" header="Package" filter sortable />
        </DataTable>
      </div>
    </div>
  );
};

export default NetworkDataTable;
