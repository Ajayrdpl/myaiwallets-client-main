/* eslint-disable no-unused-vars */
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useEffect, useState } from "react";
import PageLoader from "../../components/ui/PageLoader";
import { getSelfIncomeHistory } from "../../api/admin-api";
import { formatDateTime } from "../../utils/dateFunctions";
import { maskWalletAddress } from "../../utils/additionalFunc";

const SelfIncomeHistory = () => {
  const [globalFilter, setGlobalFilter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchSelfIncomeHistory = async () => {
    try {
      setLoading(true);
      const response = await getSelfIncomeHistory();
      setData(response?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchSelfIncomeHistory();
  }, []);
  const serialNumberTemplate = (rowData, { rowIndex }) => {
    return rowIndex + 1;
  };
  const dateTemplate = (rowData) => {
    return formatDateTime(rowData.createdAt, "dd-MM-yyyy hh:mm:ss");
  };
  const IDTemplate = (rowData) => {
    return <span className="p-2">{maskWalletAddress(rowData?.clientId?._id)}</span>;
  };

  return (
    <>
      {loading && <PageLoader />}
      <div className="WithdrawalReport SelfIncomeHistory CompleteFundRequest martop">
        <div className="dataTable ss-card martop">
          <DataTable
            value={data}
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25,100]}
            filterDisplay="row"
            globalFilter={globalFilter}
          >
            <Column
              body={serialNumberTemplate}
              headerStyle={{ width: "50px" }}
              header="S.No"
              filter
              sortable
            />
            <Column field="_id" header="ID" filter sortable />
            <Column
              field="clientId.email"
              header="Username"
              filter
              sortable
            />
            <Column body={e=>`${e?.amount} USDT`} header="Amount" filter sortable />
            <Column field="parcentage" body={e=>`${e?.investment} USDT`} header="Investment" filter sortable />
            <Column field="parcentage" body={e=>`${e?.parcentage * 100}%`} header="Percentage" filter sortable />
            <Column body={dateTemplate} header="Date" filter sortable />
            <Column field="status" header="Status" filter sortable />
          </DataTable>
        </div>
      </div>
    </>
  );
};

export default SelfIncomeHistory;
