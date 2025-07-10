import { useEffect, useState } from "react";
import PageLoader from "../../components/ui/PageLoader";
import { DataTable } from "primereact/datatable";
import { getAllUsers } from "../../api/account-api";
import { Column } from "primereact/column";
import { getTotalIncome } from "../../api/admin-api";
import { maskWalletAddress } from "../../utils/additionalFunc";

const AdminDashboard = () => {
  const [loading, setLoading] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [globalFilter, setGlobalFilter] = useState(null);
  const [totalUsers, setTotalUsers] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalValues, setTotalValues] = useState({
    totalUser: 0,
    totalInvestment: 0,
    totalWithdrawal: 0,
    todayWithdrawal: 0,
    todayInvestment: 0,
    totalSelfIncome: 0,
    todaySelfIncome: 0,
    totalReferralIncome: 0,
    todayReferralIncome: 0,
    totalLevelIncome: 0,
    todayLevelIncome: 0,
    
  });

  const totalCards = [
    {
      title: "Total User",
      value: totalValues?.totalUser,
      icon: "https://img.icons8.com/3d-fluency/94/coin-wallet.png",
    },
    {
      title: "Total Investment",
      value: `$${totalValues?.totalInvestment}`,
      icon: "https://img.icons8.com/3d-fluency/94/expensive-price.png",
    },
    {
      title: "Total Withdrawal",
      value: `$${totalValues?.totalWithdrawal}`,
      icon: "https://img.icons8.com/3d-fluency/94/change-user-male.png",
    },
    {
      title: "Today Withdrawal",
      value: `$${totalValues?.todayWithdrawal}`,
      icon: "https://img.icons8.com/3d-fluency/94/change-user-male.png",
    },
    {
      title: "Today Investment",
      value: `$${totalValues?.todayInvestment}`,
      icon: "https://img.icons8.com/3d-fluency/94/expensive-price.png",
    },
    {
      title: "Total Self Income",
      value: `$${totalValues?.totalSelfIncome}`,
      icon: "https://img.icons8.com/3d-fluency/94/money-bag.png",
    },
    {
      title: "Today Self Income",
      value: `$${totalValues?.todaySelfIncome}`,
      icon: "https://img.icons8.com/3d-fluency/94/money-bag.png",
    },
    // {
    //   title: "Total Referral Income",
    //   value: `$${totalValues?.totalReferralIncome}`,
    //   icon: "https://img.icons8.com/3d-fluency/94/group.png",
    // },
    // {
    //   title: "Today Referral Income",
    //   value: `$${totalValues?.todayReferralIncome}`,
    //   icon: "https://img.icons8.com/3d-fluency/94/group.png",
    // },
    {
      title: "Total Level Income",
      value: `$${totalValues?.totalLevelIncome}`,
      icon: "https://img.icons8.com/3d-fluency/94/group.png",
    },
    {
      title: "Today Level Income",
      value: `$${totalValues?.todayLevelIncome}`,
      icon: "https://img.icons8.com/3d-fluency/94/group.png",
    },
    
  ];

  const fetchTotalUsers = async () => {
    try {
      setLoading(true);
      const response = await getAllUsers();
      setTotalUsers(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTotalUsers();
  }, []);

  const fetchTotalIncome = async () => {
    try {
      setLoading(true);
      const response = await getTotalIncome();
      setTotalIncome(response?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTotalIncome();
  }, []);

  useEffect(() => {
    setTotalValues((prev) => ({
      ...prev,
      totalUser: totalUsers?.totalUsers || 0,
    }));
  }, [totalUsers]);

  useEffect(() => {
    setTotalValues((prev) => ({
      ...prev,
      totalInvestment: totalIncome?.totalInvestment?.toFixed(2) || 0,
      totalWithdrawal: totalIncome?.totalWithdrawal?.toFixed(2) || 0,
      // todayWithdrawal: totalIncome?.totalTodayWithdrawal?.toFixed(2) || 0,
      todayInvestment: totalIncome?.totalTodayInvestment?.toFixed(2) || 0,
      totalSelfIncome: totalIncome?.totalSelfIncome?.toFixed(2) || 0,
      todaySelfIncome: totalIncome?.totalTodaySelfIncome?.toFixed(2) || 0,
      // totalReferralIncome: totalIncome?.totalReferralIncome?.toFixed(2) || 0,
      // todayReferralIncome: totalIncome?.totalTodayReferralIncome?.toFixed(2) || 0,
      totalLevelIncome: totalIncome?.totalLevelIncome?.toFixed(2) || 0,
      todayLevelIncome: totalIncome?.totalTodayLevelIncome?.toFixed(2) || 0,
      
    }));
  }, [totalIncome]);

  const serialNumberTemplate = (rowData, { rowIndex }) => {
    return rowIndex + 1;
  };

  const IDTemplate = (rowData) => {
    return <span className="p-2">{maskWalletAddress(rowData?._id)}</span>;
  };

  return (
    <>
      {loading && <PageLoader />}

      <div className="UserHome AdminDashboard">
        <div className="income-wrapper mar-top">
          {totalCards.map((card, index) => (
            <div key={index} className="income-card ss-card">
              <div className="left">
                <h5>{card?.title}</h5>
                <p>{card?.value}</p>
              </div>
              <div className="right">
                <img src={card?.icon} alt="" />
              </div>
            </div>
          ))}
        </div>

        <div className="ss-card martop">
          <div className="head">
            <h5 className="heading">Total Users</h5>
          </div>
          <div className="dataTable">
            <DataTable
              value={totalUsers?.users}
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
              <Column body={IDTemplate} header="ID" filter sortable />
              <Column field="username" header="Username" filter sortable />
              <Column field="email" header="Email" filter sortable />
              <Column field="mobile" header="Mobile No" filter sortable />
            </DataTable>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
