/* eslint-disable no-unused-vars */
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import PageLoader from "../../components/ui/PageLoader";
import { SwalError, SwalSuccess } from "../../utils/custom-alert";
import ViewPaymentDetailModal from "../../components/ui/ViewPaymentDetailModal";
import { getAllUserList, userStatusToggle } from "../../api/admin-api";
import Swal from "sweetalert2";

const AllUsersList = () => {
  const [globalFilter, setGlobalFilter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [UserList, setUserList] = useState([]);
  const [viewDetail, setViewDetail] = useState([]);

  const toggleUserStatusHandler = async (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: `User will be ${!data?.userBlock ? "Blocked" : "Unblocked"}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          setLoading(true);
          await userStatusToggle(data?._id);
          SwalSuccess.fire({
            icon: "success",
            title: `${!data?.userBlock ? "Blocked" : "Unblocked"} Successfully`,
          });

          setUserList((prevList) =>
            prevList.map((user) =>
              user._id === data._id
                ? { ...user, userBlock: !user.userBlock }
                : user
            )
          );
        } catch (error) {
          console.log(error);
          SwalError.fire({
            icon: "error",
            title: "Error",
            text: error?.response?.data?.message || "Something went wrong!",
          });
        } finally {
          setLoading(false);
        }
      }
    });
  };

  const fetchAllUsers = async () => {
    try {
      setLoading(true);
      const response = await getAllUserList();
      setUserList(response?.users);
    } catch (error) {
      console.log(error);
      SwalError.fire({
        icon: "error",
        title: "Error fetching users",
        text: error?.response?.data?.message || "Failed to fetch user list",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const serialNumberTemplate = (rowData, { rowIndex }) => {
    return rowIndex + 1;
  };

  const actionTemplate = (rowData) => {
    return (
      <div className="action-buttons">
        <Button
          label={!rowData?.userBlock ? "Unblock" : "Block"}
          onClick={() => {
            toggleUserStatusHandler(rowData);
          }}
          style={{ color: !rowData?.userBlock ? "green" : "red" }}
        />
      </div>
    );
  };

  const spinIncomeTemplate = (rowData) => {
    return <span className="p-2">{rowData?.spinIncome?.toFixed(2)}</span>;
  };

  const totalIncomeTemplate = (rowData) => {
    return <span className="p-2">{rowData?.totalIncome?.toFixed(2)}</span>;
  };

  const currentIncomeTemplate = (rowData) => {
    return <span className="p-2">{rowData?.correntIncome?.toFixed(2)}</span>;
  };

  const levelIncomeTemplate = (rowData) => {
    return <span className="p-2">{rowData?.levelIncome?.toFixed(2)}</span>;
  };

  const selfIncomeTemplate = (rowData) => {
    return <span className="p-2">{rowData?.selfIncome?.toFixed(2)}</span>;
  };

  const totalInvestmentIncomeTemplate = (rowData) => {
    return <span className="p-2">{rowData?.investment?.toFixed(2)}</span>;
  };

  console.log(UserList);

  return (
    <>
      {loading && <PageLoader />}

      {showDetail && (
        <ViewPaymentDetailModal
          data={viewDetail}
          show={showDetail}
          onHide={() => setShowDetail(false)}
        />
      )}

      <div className="WithdrawalReport w100 martop">
        <div className="dataTable ss-card w100 martop">
          <DataTable
            value={UserList}
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            filterDisplay="row"
            globalFilter={globalFilter}
          >
            <Column
              style={{ width: "10%" }}
              body={serialNumberTemplate}
              header="S.No"
              filter
              sortable
            />
            <Column field="_id" header="ID" filter sortable />
            <Column field="username" header="Username" filter sortable />
            <Column field="email" header="Email" filter sortable />
            <Column field="mobile" header="Mobile" filter sortable />
            <Column
              body={totalInvestmentIncomeTemplate}
              header="Total Investment"
              filter
              sortable
            />
            <Column
              body={totalIncomeTemplate}
              header="Total Income"
              filter
              sortable
            />
            <Column
              body={currentIncomeTemplate}
              header="Current Income"
              filter
              sortable
            />
            <Column
              body={levelIncomeTemplate}
              header="Level Income"
              filter
              sortable
            />
            <Column
              body={selfIncomeTemplate}
              header="Self Income"
              filter
              sortable
            />
            <Column body={actionTemplate} header="Status" />
          </DataTable>
        </div>
      </div>
    </>
  );
};

export default AllUsersList;
