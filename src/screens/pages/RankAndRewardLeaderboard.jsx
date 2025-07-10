import { useEffect, useState } from "react";
import "../../styles/ProfilePage.css";
import PageLoader from "../../components/ui/PageLoader";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getUserRankRewardDetails } from "../../api/user-api";
import { Tag } from "primereact/tag";

const RankAndRewardLeaderboard = () => {
  const [loading, setLoading] = useState(false);
  const [rankListData, setRankListData] = useState([]);
  const getRankDetails = async () => {
    try {
      setLoading(true);
      const response = await getUserRankRewardDetails();
      setRankListData(response?.data);
    } finally {
      setLoading(false);
    }
  };
  const serialNumberTemplate = (rowData, { rowIndex }) => {
    return rowIndex + 1;
  };

  useEffect(() => {
    getRankDetails();
  }, []);

  const tableStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    width: "100%",
  };

  const headerStyle = {
    backgroundColor: "#99beff8f",
    color: "white",
    fontWeight: "bold",
    padding: "14px 16px",
  };

  const bodyStyle = {
    padding: "14px 16px",
    borderBottom: "1px solid #f1f1f1",
    fontWeight: "medium",
    fontSize: "1.7rem",
  };

  const statusTemplate = (rowData) => {
    return (
      <Tag
        style={{
          fontSize: "1.4rem",
          padding: ".5rem .8rem",
          textWrap: "nowrap",
          fontWeight: "bold",
          backgroundColor: `${
            rowData?.status === "Achieved" ? "#8bc34a" : "#fbc02d"
          }`,
          textTransform: "capitalize",
        }}
      >
        {rowData?.status || "NA"}
      </Tag>
    );
  };
  return (
    <>
      {loading && <PageLoader />}
      <div className="RankAndRewardEntry martop">
        <div className="dataTable ss-card martop">
          <DataTable style={tableStyle} value={rankListData}>
          <Column
              body={serialNumberTemplate}
              headerStyle={headerStyle}
              bodyStyle={bodyStyle}
              header="S.No"
              filter
              sortable
            />
            <Column
              headerStyle={headerStyle}
              bodyStyle={bodyStyle}
              field="title"
              header="Rank Name"
            />
            <Column
              headerStyle={headerStyle}
              bodyStyle={bodyStyle}
              header="Team A"
              body={(rowData) => {
                return rowData?.totalTeamA >= rowData?.minTeamA ? (
                  <span style={{ color: "green" }} >{rowData?.minTeamA}/{rowData?.minTeamA}</span>
                ) : (
                  <>
                    <span style={{ color: "red" }}>{rowData?.totalTeamA}/{rowData?.minTeamA}</span>
                  </>
                );
              }}
            />
            <Column
              headerStyle={headerStyle}
              bodyStyle={bodyStyle}
              header={
                <>
                  Total Team (B+C)
                </>
              }
              body={(rowData) => {
                return rowData?.totalTeamsLength >= rowData?.totalTeam ? (
                  <>
                    <span style={{ color: "yellowgreen" }}>{rowData?.totalTeam}/{rowData?.totalTeam}</span>
                  </>
                ) : (
                  <>
                    <span style={{ color: "red" }}>{rowData?.totalTeamsLength}/{rowData?.totalTeam}</span>
                  </>
                );
              }}
            />
            <Column
              headerStyle={headerStyle}
              bodyStyle={bodyStyle}
              header="Investment ($)"
              body={(rowData) => {
                return (
                  <><span style={{textWrap:"nowrap"}}>{rowData?.investment} /
                    ({rowData?.min} - {rowData?.max})</span>
                  </>
                );
              }}
            />
            <Column
              headerStyle={headerStyle}
              bodyStyle={bodyStyle}
              field="reward"
              header="Rewards"
              body={(rowData) => {
                return <>{rowData?.reward}%</>;
              }}
            />
            <Column
              headerStyle={headerStyle}
              bodyStyle={bodyStyle}
              field="status"
              header="Achievement"
              body={statusTemplate}
            />
          </DataTable>
        </div>
      </div>
    </>
  );
};

export default RankAndRewardLeaderboard;
