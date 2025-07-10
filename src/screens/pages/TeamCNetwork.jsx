import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { getUserTeamCMembers } from "../../api/user-api";
import { maskWalletAddress } from "../../utils/additionalFunc";
import { formatDateTime } from "../../utils/dateFunctions";
import PageLoader from "../../components/ui/PageLoader";

const TeamCNetwork = () => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNetworkData = async () => {
    try {
      setLoading(true);
      const totalUsers = await getUserTeamCMembers();
      setData(totalUsers?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNetworkData();
  }, []);

  const serialNumberTemplate = (rowData, { rowIndex }) => {
    return rowIndex + 1;
  };

  const transDate = (rowData) => {
    return formatDateTime(rowData?.createdAt);
  };
  const IDAddressTemplate = (rowData) => {
    return maskWalletAddress(rowData?._id);
  };
    const statusTemplate = (rowData) => {
      return rowData?.isActive ? "Active" : "Inactive";
    };

  const amountTemplate = (rowData) => {
    return `$${rowData?.investment?.toFixed(2)}`;
  };
  const totalIncomeTemplate = (rowData) => {
    return `$${rowData?.totalIncome?.toFixed(2)}`;
  };
  const currentIncomeTemplate = (rowData) => {
    return `$${rowData?.correntIncome?.toFixed(2)}`;
  };
  return (
    <div className="NetworkDataTable martop">
      <div className="dataTable cardBox martop">
        {loading && <PageLoader />}
        <DataTable
          value={data}
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          filterDisplay="row"
        >
          <Column body={serialNumberTemplate} header="S.No" filter sortable />
          <Column body={IDAddressTemplate} header="UserID" filter sortable />
          <Column field="username" header="Username" filter sortable />
          <Column field="email" header="Email" filter sortable />
          <Column body={transDate} header="Join Date" filter sortable />
          <Column body={statusTemplate} header="Status" filter sortable />
          <Column body={totalIncomeTemplate} header="Total Income" filter sortable />
          <Column body={currentIncomeTemplate} header="Current Income" filter sortable />
          <Column body={amountTemplate} header="Investment" filter sortable />
        </DataTable>
      </div>
    </div>
  );
};

export default TeamCNetwork;
