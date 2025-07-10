/* eslint-disable no-unused-vars */
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useEffect, useState } from "react";
import PageLoader from "../../components/ui/PageLoader";
import { formatDateTime } from "../../utils/dateFunctions";
import { getInvestmentHistory } from "../../api/user-api";
import { maskWalletAddress } from "../../utils/additionalFunc";

const TopupHistory = () => {
  const [globalFilter, setGlobalFilter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchInvestmentHistory = async () => {
    try {
      setLoading(true);
      const response = await getInvestmentHistory();
      setData(response?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchInvestmentHistory();
  }, []);
  const serialNumberTemplate = (rowData, { rowIndex }) => {
    return rowIndex + 1;
  };
  const dateTemplate = (rowData) => {
    return formatDateTime(rowData.createdAt, "dd-MM-yyyy hh:mm:ss");
  };
  const addressMaskTemplate = (rowData) => {
    return <span className="p-2">{maskWalletAddress(rowData?.fromAddress)}</span>;
  };

  return (
    <>
      {loading && <PageLoader />}
      <div className="WithdrawalReport InvestmentHistory CompleteFundRequest martop">

        <div className="dataTable ss-card martop">
          <DataTable
            value={data}
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            filterDisplay="row"
            globalFilter={globalFilter}
          >
            <Column body={serialNumberTemplate} headerStyle={{ width: "50px" }} header="S.No" filter sortable />
            <Column field="_id" header="Request ID" filter sortable />
            <Column body={addressMaskTemplate} header="Wallet Address" filter sortable />
            <Column field="amount" header="Amount" filter sortable />
            <Column body={dateTemplate} header="Date" filter sortable />
            <Column field="status" header="Status" filter sortable />
          </DataTable>
        </div>
      </div>
    </>
  );
};

export default TopupHistory;
