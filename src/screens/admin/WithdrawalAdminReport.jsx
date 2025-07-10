/* eslint-disable no-unused-vars */
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { formatDateTime } from "../../utils/dateFunctions";
import PageLoader from "../../components/ui/PageLoader";
import { maskWalletAddress } from "../../utils/additionalFunc";
import {
  getWithdrawalHistory,
  approveWithdrawal,
  rejectWithdrawal,
} from "../../api/admin-api";
import Swal from "sweetalert2";
import QRCode from "react-qr-code";

const WithdrawalAdminReport = () => {
  const [globalFilter, setGlobalFilter] = useState(null);
  const [report, setReport] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const fetchTodayTransactions = async () => {
    try {
      setLoading(true);
      const totalUsers = await getWithdrawalHistory();
      setReport(totalUsers);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (rowData) => {
    try {
      setLoading(true);
      const payload = {
        clientId: rowData?.clientId?._id,
        withdrawalId: rowData?._id,
      };
      const res = await approveWithdrawal(payload);
      if (res?.success) {
        Swal.fire({
          icon: "success",
          title: "✅ Approved",
          text: res?.message || "Withdrawal approved successfully.",
          background: "#0f172a",
          color: "#fcd34d",
        });
        fetchTodayTransactions();
        setModalVisible(false);
      } else {
        Swal.fire({
          icon: "error",
          title: "❌ Approval Failed",
          text: res?.message || "Something went wrong.",
          background: "#0f172a",
          color: "#fcd34d",
        });
      }
    } catch (err) {
      console.error("Approve Error:", err);
      Swal.fire({
        icon: "error",
        title: "❌ Error",
        text: err?.response?.data?.message || "Something went wrong.",
        background: "#0f172a",
        color: "#fcd34d",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleReject = async (rowData) => {
    try {
      setLoading(true);
      const payload = {
        clientId: rowData?.clientId?._id,
        withdrawalId: rowData?._id,
      };
      const res = await rejectWithdrawal(payload);
      if (res?.success) {
        Swal.fire({
          icon: "success",
          title: "🚫 Rejected",
          text: res?.message || "Withdrawal rejected successfully.",
          background: "#0f172a",
          color: "#fcd34d",
        });
        fetchTodayTransactions();
        setModalVisible(false);
      } else {
        Swal.fire({
          icon: "error",
          title: "❌ Rejection Failed",
          text: res?.message || "Something went wrong.",
          background: "#0f172a",
          color: "#fcd34d",
        });
      }
    } catch (err) {
      console.error("Reject Error:", err);
      Swal.fire({
        icon: "error",
        title: "❌ Error",
        text: err?.response?.data?.message || "Something went wrong.",
        background: "#0f172a",
        color: "#fcd34d",
      });
    } finally {
      setLoading(false);
    }
  };

  const actionTemplate = (rowData) => {
    const isPending = rowData?.status?.toLowerCase() === "pending";

    return (
      <div className="flex gap-2">
        {isPending ? (
          <>
            <button
              onClick={() => handleApprove(rowData)}
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
            >
              Approve
            </button>
            <button
              onClick={() => handleReject(rowData)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Reject
            </button>
            <button
              onClick={() => {
                setSelectedRow(rowData);
                setModalVisible(true);
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
            >
              View
            </button>
          </>
        ) : <button
          onClick={() => {
            setSelectedRow(rowData);
            setModalVisible(true);
          }}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
        >
          View
        </button>}
      </div>
    );
  };


  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    Swal.fire({
      toast: true,
      icon: "success",
      title: "Wallet address copied!",
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      background: "#0f172a",
      color: "#fcd34d",
    });
  };

  const serialNumberTemplate = (rowData, { rowIndex }) => rowIndex + 1;

  const [amounts, setAmounts] = useState({
    totalWithdrawal: 0,
  totalTodayWithdrawal: 0,
    totalAmount: 0,
    todayAmount: 0,
    totalCompletedAmount: 0,
  totalPendingAmount: 0,
  totalRejectedAmount: 0,

  todayCompletedAmount: 0,
  todayPendingAmount: 0,
  todayRejectedAmount: 0
  });

  useEffect(() => {
    fetchTodayTransactions();
  }, []);

  useEffect(() => {
  if (report) {
    setAmounts({
      totalWithdrawal: report?.totalWithdrawal || 0,
      totalTodayWithdrawal: report?.totalTodayWithdrawal || 0,

      totalCompletedAmount: report?.totalCompletedAmount || 0,
      totalPendingAmount: report?.totalPendingAmount || 0,
      totalRejectedAmount: report?.totalRejectedAmount || 0,

      todayCompletedAmount: report?.todayCompletedAmount || 0,
      todayPendingAmount: report?.todayPendingAmount || 0,
      todayRejectedAmount: report?.todayRejectedAmount || 0
    });
  }
}, [report]);


  const transDate = (rowData) => formatDateTime(rowData.createdAt);

  const walletAddressTemplate = (rowData) =>
    maskWalletAddress(rowData.toAddress);

  const withdrawalCards = [
    {
      label: "Total Completed Withdrawal",
      value: amounts?.totalCompletedAmount,
      icon: "https://img.icons8.com/3d-fluency/94/money-bag.png"
    },
    {
      label: "Total Pending Withdrawal",
      value: amounts?.totalPendingAmount,
      icon: "https://img.icons8.com/3d-fluency/94/money-bag.png"
    },
    {
      label: "Total Rejected Withdrawal",
      value: amounts?.totalRejectedAmount,
      icon: "https://img.icons8.com/3d-fluency/94/money-bag.png"
    },
    {
      label: "Today Completed Withdrawal",
      value: amounts?.todayCompletedAmount,
      icon: "https://img.icons8.com/3d-fluency/94/calendar.png"
    },
    {
      label: "Today Pending Withdrawal",
      value: amounts?.todayPendingAmount,
      icon: "https://img.icons8.com/3d-fluency/94/calendar.png"
    },
    {
      label: "Today Rejected Withdrawal",
      value: amounts?.todayRejectedAmount,
      icon: "https://img.icons8.com/3d-fluency/94/calendar.png"
    }
  ];

  return (
    <>
      {loading && <PageLoader />}
      <div className="WithdrawalReport martop">
        <div className="top-wrapper">
          {withdrawalCards.map((card, index) => (
            <div className="ss-card ss-ab-card" key={index}>
              <div className="txt">
                <h5 className="heading">{card.label}</h5>
                <p className="para1">
                  ${card.value?.toFixed(2) || "0.00"}
                </p>
              </div>
              <div className="icon">
                <img src={card.icon} alt={card.label} />
              </div>
            </div>
          ))}

        </div>

        <div className="dataTable ss-card martop">
          <DataTable
            value={report?.data}
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            filterDisplay="row"
            globalFilter={globalFilter}
          >
            <Column body={serialNumberTemplate} headerStyle={{ width: "50px" }} header="S.No" filter sortable />
            <Column body={walletAddressTemplate} header="Wallet Address" filter sortable />
            <Column field="clientId.email" header="Email" filter sortable />
            <Column field="amount" header="Withdrawal Amount ($)" filter sortable />
            <Column field="status" header="Status" filter sortable />
            <Column body={transDate} header="Date" filter sortable />
            <Column body={actionTemplate} header="Action" />
          </DataTable>
        </div>
      </div>

      {modalVisible && selectedRow && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-[400px] space-y-4 relative">
            <button
              className="absolute top-2 right-3 text-gray-600 hover:text-black"
              onClick={() => setModalVisible(false)}
            >
              ❌
            </button>
            <h2 className="text-xl font-semibold text-center">Withdrawal Info</h2>
            <div className="flex justify-center">
              <QRCode value={selectedRow?.toAddress || ""} size={128} />
            </div>
            <p className="text-2xl"><strong>Email:</strong> {selectedRow?.clientId?.email}</p>
            <p className="text-2xl"><strong>Name:</strong> {selectedRow?.clientId?.username || "N/A"}</p>
            <p className="text-2xl"><strong>Wallet Address:</strong> {selectedRow?.toAddress} <button onClick={() => copyToClipboard(selectedRow?.toAddress)} className="ml-2 text-blue-600 hover:underline">Copy</button></p>
            <p className="text-2xl"><strong>Amount:</strong> ${selectedRow?.amount?.toFixed(2)}</p>
            <p className="text-2xl"><strong>10% Deduction:</strong> ${(selectedRow?.amount * 0.1).toFixed(2)}</p>
            <p className="text-2xl"><strong>Net Amount To Pay:</strong> ${(selectedRow?.amount - selectedRow?.amount * 0.1).toFixed(2)}</p>

            <div className="flex justify-between pt-3">
              <button onClick={() => handleApprove(selectedRow)} className="bg-green-600 text-white px-4 py-2 rounded">Approve</button>
              <button onClick={() => handleReject(selectedRow)} className="bg-red-600 text-white px-4 py-2 rounded">Reject</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WithdrawalAdminReport;
