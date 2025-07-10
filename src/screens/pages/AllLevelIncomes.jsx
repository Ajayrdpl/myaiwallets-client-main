import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { getLevelIncomes, getUserTeamCMembers } from "../../api/user-api";
import { maskWalletAddress } from "../../utils/additionalFunc";
import { formatDateTime } from "../../utils/dateFunctions";
import PageLoader from "../../components/ui/PageLoader";
import { getAllLevelIncomes } from "../../api/admin-api";

const AllLevelIncomes = () => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNetworkData = async () => {
    try {
      setLoading(true);
      const totalUsers = await getAllLevelIncomes();
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
  console.log({data})
  return (
    <div className="NetworkDataTable martop">
      <div className="dataTable cardBox martop">
        {loading && <PageLoader />}
        <DataTable
          value={data}
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25,100]}
          filterDisplay="row"
        >
          <Column body={serialNumberTemplate} header="S.No" filter sortable />
          <Column field="user.email" header="UserID" filter sortable />
          <Column field="fromUser.email" header="From UserID" filter sortable />
          <Column field="fromUser.sponsor.email" header="Sponsor UserID" filter sortable />
          <Column body={e=>`${e?.investment} USDT`} header="Investment" filter sortable />
          <Column body={e=>`${e?.amount} USDT`} header="Income" filter sortable />
          <Column body={e=>`Level ${e?.level}`} header="Level" filter sortable />
          <Column body={e=>`${e?.percentage} %`} header="Percentage" filter sortable />
          <Column field="levelName" header="Type" filter sortable />
          <Column body={transDate} header="CreatedAt" filter sortable />
        </DataTable>
      </div>
    </div>
  );
};

export default AllLevelIncomes;
