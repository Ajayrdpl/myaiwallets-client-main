/* eslint-disable no-unused-vars */
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useEffect, useState } from "react";
import { getWithdrawalHistory } from "../../api/payment-api";
import PageLoader from "../../components/ui/PageLoader";
import { formatDateTime } from "../../utils/dateFunctions";
import { maskWalletAddress } from "../../utils/additionalFunc";

const WithdrawalReport = () => {
  const [globalFilter, setGlobalFilter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [amount, setAmount] = useState({
    total: 0,
    paid: 0,
    reject: 0,
  });

  const fetchWithdrawalHistory = async () => {
    try {
      setLoading(true);
      const response = await getWithdrawalHistory();
      setData(response?.data);
      setAmount({
        total: response?.totalWithdrawal,
        today: response?.totalTodayWithdrawal,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchWithdrawalHistory();
  }, []);
  const serialNumberTemplate = (rowData, { rowIndex }) => {
    return rowIndex + 1;
  };
  const dateTemplate = (rowData) => {
    return formatDateTime(rowData.createdAt, "dd-MM-yyyy hh:mm:ss");
  };
  const addressMaskTemplate = (rowData) => {
    return <span className="p-2">{maskWalletAddress(rowData?.toAddress)}</span>;
  };

  return (
    <>
      {loading && <PageLoader />}
      <div className="WithdrawalReport martop">
        <div className="top-wrapper">
          <div className="cardBox">
            <div className="txt">
              <h5 className="heading">Total Withdrawal</h5>
              <p className="para1">$ {amount?.total?.toFixed(2)}</p>
            </div>
            <div className="icon">
              <img
                src="https://img.icons8.com/3d-fluency/94/money-bag.png"
                alt=""
              />
            </div>
          </div>
          <div className="cardBox">
            <div className="txt">
              <h5 className="heading">Paid Withdrawal</h5>
              <p className="para1">$ {amount?.today?.toFixed(2)}</p>
            </div>
            <div className="icon">
              <img
                src="https://img.icons8.com/3d-fluency/94/approval.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="dataTable cardBox martop">
          <DataTable
            value={data}
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            filterDisplay="row"
            globalFilter={globalFilter}
          >
            <Column headerStyle={{ width: "50px" }} body={serialNumberTemplate} header="S.No" filter sortable />
            <Column field="_id" header="Ref. No" filter sortable />
            <Column field="amount" header="Amount ($)" filter sortable />
            <Column body={addressMaskTemplate} header="Wallet Address" filter sortable />
            <Column field="status" header="Status" filter sortable />
            <Column body={dateTemplate} header="Date" filter sortable />
          </DataTable>
        </div>
      </div>
    </>
  );
};

export default WithdrawalReport;
