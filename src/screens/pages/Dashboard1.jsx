import { FaOpencart, FaRegCopy, FaRegEye } from "react-icons/fa";
import "../../styles/dashboard/Dashboard1.css";
import { PieDonutChart } from "../../components/graph/PieDonutChart";
import { FiDollarSign } from "react-icons/fi";
import { RiBuildingLine } from "react-icons/ri";
import LineColumnChart from "../../components/graph/LineColumnChart";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { formatDate, formatDateTime } from "../../utils/dateFunctions";
import { Tag } from "primereact/tag";
import { maskWalletAddress } from "../../utils/additionalFunc";
import { MainContent } from "../../constants/content/MainContent";
import { getNoticeUpdates } from "../../api/user-api";
import PageLoader from "../../components/ui/PageLoader";
import ViewMarketTables from "./ViewMarketTables";
const Dashboard1 = () => {
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [referralsList, setReferralsList] = useState([]);
  const [noticeList, setNoticeList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchExistingQuestions = async () => {
    try {
      setLoading(true);
      const response = await getNoticeUpdates();
      setNoticeList(response?.data);
    } catch (error) {
      console.error("Error submitting questions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExistingQuestions();
  }, []);

  const planData = [
    {
      icon: <FaOpencart />,
      name: "Total Investment",
      val: `$${userInfo?.investment?.toFixed(3) || "0"}`,
      increament: "0%",
    },
    {
      icon: <FaOpencart />,
      name: "Pre Launch Offer",
      val: `$${userInfo?.offerInvestment?.toFixed(3) || "0"}`,
      increament: "0%",
    },
    {
      icon: <FiDollarSign />,
      name: "Total Balance",
      val: `$${userInfo?.totalIncome?.toFixed(3) || "0"}`,
      increament: "0%",
    },
    {
      icon: <FiDollarSign />,
      name: "Wallet Balance",
      val: `$${userInfo?.correntIncome?.toFixed(3) || "0"}`,
      increament: "0%",
    },
    
    {
      icon: <FaRegEye />,
      name: "Referral Income",
      val: `$${userInfo?.referralIncome?.toFixed(3) || "0"}`,
      increament: "0%",
    },
    {
      icon: <RiBuildingLine />,
      name: "Level Income",
      val: `$${userInfo?.levelFilterIncome?.toFixed(3) || "0"}`,
      increament: "0%",
    },
    {
      icon: <RiBuildingLine />,
      name: "Over Ride Income",
      val: `$${userInfo?.overrideFilterIncome?.toFixed(3) || "0"}`,
      increament: "0%",
    },
    {
      icon: <RiBuildingLine />,
      name: "Self Income",
      val: `$${userInfo?.selfIncome?.toFixed(3) || "0"}`,
      increament: "0%",
    },
    {
      icon: <RiBuildingLine />,
      name: "Profit Team A",
      val: `$${userInfo?.level1Total?.toFixed(3) || "0"}`,
      increament: "0%",
    },
    {
      icon: <RiBuildingLine />,
      name: "Profit Team B",
      val: `$${userInfo?.level2Total?.toFixed(3) || "0"}`,
      increament: "0%",
    },
    {
      icon: <RiBuildingLine />,
      name: "Profit Team C",
      val: `$${userInfo?.level3Total?.toFixed(3) || "0"}`,
      increament: "0%",
    },
    {
      icon: <RiBuildingLine />,
      name: "Max Payout",
      val: `${userInfo?.multiplier || "0"}X`,
      increament: "0%",
    },
    
  ];
  const productData = [
    {
      id: 1000,
      name: "James Butt",
      country: {
        name: "Algeria",
        code: "dz",
      },
      company: "Benton, John B Jr",
      date: "2015-09-13",
      status: "unqualified",
      verified: true,
      activity: 17,
      representative: {
        name: "Ioni Bowcher",
        image: "ionibowcher.png",
      },
      balance: 70663,
    },
  ];
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const representativeBodyTemplate = (rowData) => {
    const representative = rowData.representative;

    return (
      <div className="flex align-items-center gap-2">
        <img
          alt={representative.name}
          src={`https://primefaces.org/cdn/primereact/images/avatar/${representative.image}`}
          width="32"
        />
        <span>{representative.name}</span>
      </div>
    );
  };

  useEffect(() => {
    setProducts(productData);
  }, []);
  useEffect(() => {
    setReferralsList(userInfo?.partners);
  }, [userInfo]);

  const serialNumberTemplate = (rowData, { rowIndex }) => {
    return rowIndex + 1;
  };
  const statusTemplate = (rowData) => {
    return rowData?.isActive ? (
      <Tag
        style={{
          fontSize: "1.4rem",
          padding: "0.5rem 1rem",
          borderRadius: "0.5rem",
        }}
        value="Active"
        severity="success"
      />
    ) : (
      <Tag
        style={{
          fontSize: "1.4rem",
          padding: "0.5rem 1rem",
          borderRadius: "0.5rem",
        }}
        value="Inactive"
        severity="danger"
      />
    );
  };
  const dateTemplate = (rowData) => {
    return rowData?.createdAt ? formatDate(rowData?.createdAt) : "N/A";
  };
  const maskWalletAddressTemplate = (rowData) => {
    return rowData?._id ? maskWalletAddress(rowData?._id) : "N/A";
  };
  const [copiedText1, setCopiedText1] = useState(false);
  const location = window.location.origin;
  const referCode = `${location}/register?referral=${userInfo?.referralLink}`;
  const levelName = [
    "Starter",
    "Beginner",
    "Achiever",
    "Champion",
    "Director",
    "Diamond",
  ];
  const userData = {
    user_id: userInfo?._id,
    date_of_activation:
      userInfo?.activeDate == null ? "NA" : formatDate(userInfo?.activeDate),
    created_at: formatDate(userInfo?.createdAt) || "NA",
    level: levelName[userInfo?.levelCount || 0],
    renewal_status: userInfo?.isActive ? "Active" : "Inactive",
  };
  const handleCopy = (text, setCopiedState) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedState(true);
        setTimeout(() => setCopiedState(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <>
      {loading && <PageLoader />}
      <div className="Dashboard1">
        <div className="top-wrapper gap-btm">
          <div className="cardBox h-full">
            <div className="top">
              <h5 className="heading">
                Congratulations{" "}
                <span style={{ textTransform: "capitalize" }}>
                  {userInfo?.username || "User"}
                </span>
              </h5>
              <img src="https://img.icons8.com/external-goofy-flat-kerismaker/96/external-Popper-Confetti-birthday-party-goofy-flat-kerismaker.png" />
            </div>
            {/* <p className="para1">
              We are happy to see you. Here&apos;s your dashboard.
            </p> */}
            <div className="content">
              <div className="c-left">
                <p className="para1">
                  {" "}
                  We are happy to see you. Here&apos;s your dashboard.
                </p>
                <span className="value mt-3">
                  Rank {levelName[userInfo?.levelCount || 0]}
                </span>
                {/* <ButtonLinear name={"View Details"} /> */}
              </div>
              <div className="c-right">
                <img
                  src="https://img.icons8.com/3d-fluency/94/gift.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="four-cards">
            {planData?.map?.((e, i) => {
              return (
                <div key={`planCard-${i}`} className="cardBox sm-box">
                  <div className="top">
                    <div className="icon">{e?.icon}</div>
                    {/* <span className="increament-val">
                      {e?.increament}
                      <FaAngleUp />
                    </span> */}
                  </div>
                  <div className="content">
                    <span className="value">{e?.val}</span>
                    <p className="para1">{e?.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* <div className="center-wrapper gap-btm">
          <div className="cardBox">
            <div className="top">
              <h5 className="heading">Team performance</h5>
              <div className="content">
                <LineColumnChart />
              </div>
            </div>
          </div>
          <div className="cardBox">
            <div className="top">
              <h5 className="heading">Total Withdrawal</h5>
            </div>
            <div className="content">
              <PieDonutChart />
            </div>
          </div>
        </div> */}
        {/* revenue cards */}
        {/* <div className="wrapper-box coln-3 gap-btm">
          <div className="cardBox">
            <div className="top">
              <h5 className="heading">Social Revenue</h5>
            </div>
            <div className="content table-box">
              <table>
                <tbody>
                  {socialData?.map?.((e, i) => {
                    return (
                      <tr key={`socialData-${i}`}>
                        <td>
                          <div className="img-box">
                            <img src={e?.icon} alt="" />
                          </div>
                        </td>
                        <td>
                          <div className="txt">
                            <h6>{e?.name}</h6>
                            <p>{e?.type}</p>
                          </div>
                        </td>
                        <td>{e?.value}</td>
                        <td>
                          <div className="tag">{e?.incVal}</div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="cardBox">
            <div className="top">
              <h5 className="heading">Top Referrals</h5>
            </div>
            <div className="content table-box">
              <table>
                <tbody>
                  {topReferals?.map?.((e, i) => {
                    return (
                      <tr key={`socialData-${i}`}>
                        <td>
                          <div className="img-box">
                            <img src={e?.icon} alt="" />
                          </div>
                        </td>
                        <td>
                          <div className="txt">
                            <h6>{e?.name}</h6>
                            <p>{e?.type}</p>
                          </div>
                        </td>
                        <td>{e?.value}</td>
                        <td>
                          <div className="tag inactive">{e?.incVal}</div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div> */}

        <div className="detail-wrapper">
          <div className="left cardBox">
            <div className="head">
              <h5 className="heading">About Me</h5>
            </div>
            <div className="inner-wrapper">
              <div className="detail-table">
                <table>
                  <tbody>
                    {userData &&
                      Object.entries(userData)?.map(([key, value]) => (
                        <tr key={`detail-${key}`}>
                          <td>{key?.replaceAll("_", " ")}</td>
                          <td>{value}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

              <div className="cardBox copy-code-wrapper">
                <p>Your Refer Code</p>
                <div className="code">
                  <span className="codebox">{referCode}</span>
                  <button onClick={() => handleCopy(referCode, setCopiedText1)}>
                    {copiedText1 ? "Copied!" : <FaRegCopy />}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="right cardBox noticeboard">
            <div className="head">
              <h5 className="heading">Notice & Updates</h5>
            </div>
            <div className="inner-wrapper">
              <div className="marquee-container">
                <div className="marquee-content">
                  {noticeList?.map((note, i) => {
                    return (
                      <div className="note mb-1" key={`notice-${i}`}>
                        <p>{note?.question}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* <marquee direction="up">
                {noticeList?.map((note, i) => {
                  return (
                    <div className="note mb-1" key={`notice-${i}`}>
                      <p>{note?.question}</p>
                    </div>
                  );
                })}
              </marquee> */}
            </div>
          </div>
        </div>

        {/* transaction */}
        <div className="wrapper-box trans-wrapper martop">
          <div className="cardBox trans">
            <div className="top">
              <h5 className="heading">Recent Referrals</h5>
            </div>
            <div className="content table-box">
              <div className="dataTable cardBox martop">
                <DataTable
                  value={referralsList}
                  paginator
                  rows={10}
                  rowsPerPageOptions={[5, 10, 25]}
                  filterDisplay="row"
                  globalFilter={globalFilter}
                >
                  <Column
                    body={serialNumberTemplate}
                    header="S.No"
                    filter
                    sortable
                    style={{ width: "5%" }}
                  />
                  <Column
                    body={maskWalletAddressTemplate}
                    header="ID"
                    filter
                    sortable
                  />
                  <Column field="username" header="Username" filter sortable />
                  <Column
                    body={statusTemplate}
                    header="Status"
                    filter
                    sortable
                  />
                  <Column body={dateTemplate} header="Date" filter sortable />
                </DataTable>
              </div>
            </div>
          </div>
          {/* <div className="cardBox full-sp">
            <div className="top">
              <h5 className="heading">My package</h5>
            </div>
            <div className="content">
              <PieImageGraph legend_pos={"bottom"} />
            </div>
          </div> */}
        </div>
        <div className="cardBox martop">
          <div className="top">
            <h5 className="heading">Market Tables</h5>
          </div>
          <ViewMarketTables />
        </div>
      </div>
    </>
  );
};

export default Dashboard1;
