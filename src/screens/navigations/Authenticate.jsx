import { Route, Routes } from "react-router-dom";
import { AuthenticatedRoutes } from "../../constants/Routes";
import DashboardMain from "../pages/DashboardMain";
import Dashboard1 from "../pages/Dashboard1";
import ProfilePage from "../pages/ProfilePage";
import { SidebarContent } from "../../constants/content/SidebarContent";
import Withdrawal from "../pages/Withdrawal";
import MemberTopup from "../pages/MemberTopup";
import WithdrawalReport from "../pages/WithdrawalReport";
import TopupHistory from "../pages/TopupHistory";
import ComplainRaiseTicket from "../pages/ComplainRaiseTicket";
import ComplainTicketHistory from "../pages/ComplainTicketHistory";
import UserMain from "../website/UserMain";
import InvestmentHistory from "../admin/InvestmentHistory";
import AdminDashboard from "../admin/AdminDashboard";
import ComplainTicketList from "../admin/ComplainTicketList";
import AllUsersList from "../admin/AllUsersList";
import WithdrawalAdminReport from "../admin/WithdrawalAdminReport";
import SelfIncomeHistory from "../admin/SelfIncomeHistory";
import ReferralHistory from "../admin/ReferralHistory";
import TeamANetwork from "../pages/TeamANetwork";
import TeamBNetwork from "../pages/TeamBNetwork";
import TeamCNetwork from "../pages/TeamCNetwork";
import { getCurrentUser } from "../../utils/TokenFunc";
import CreatePromotionalBanner from "../pages/CreatePromotionalBanner";
import RankAndRewardLeaderboard from "../pages/RankAndRewardLeaderboard";
import AddNoticeUpdates from "../pages/AddNoticeUpdates";
import LevelIncomes from "../pages/LevelIncomes";
import AllLevelIncomes from "../pages/AllLevelIncomes";
import AllSelfIncomeHistory from "../pages/AllSelfIncomeHistory";
import FoundAdd from "../admin/FoundAdd";
import Tutorial from "../admin/Video";
import Video from "../admin/Video";

const Authenticate = () => {
  const token = getCurrentUser().token;
  const role = getCurrentUser().role;
  return (
    <>
      <Routes>
        {role === "Admin" ? (
          <>
            <Route
              path={AuthenticatedRoutes.ADMIN_DASHBOARD}
              element={
                <DashboardMain
                  inner={<AdminDashboard />}
                  parentName={"Dashboard"}
                  pageName={"Dashboard"}
                />
              }
            />
            <Route
              path={"*"}
              element={
                <DashboardMain
                  inner={<AdminDashboard />}
                  pageName={"Dashboard"}
                  parentName={"Dashboard"}
                />
              }
            />
            <Route
              path={AuthenticatedRoutes.RAISE_TICKET_LIST}
              element={
                <DashboardMain
                  inner={<ComplainTicketList />}
                  parentName={"Dashboard"}
                  pageName="Raise Ticket History"
                />
              }
            />
               <Route
              path={AuthenticatedRoutes.VIDEO_TUTORIAL}
              element={
                <DashboardMain
                  inner={<Video />}
                  parentName={"Dashboard"}
                  pageName=" Video"
                />
              }
            />
            <Route
              path={AuthenticatedRoutes.ALL_USERS}
              element={
                <DashboardMain
                  inner={<AllUsersList />}
                  parentName={"Dashboard"}
                  pageName="All Users List"
                />
              }
            />
            <Route
              path={AuthenticatedRoutes.ALL_INVESTMENTS}
              element={
                <DashboardMain
                  inner={<InvestmentHistory />}
                  parentName={"Dashboard"}
                  pageName="Investment History"
                />
              }
            />
            <Route
              path={AuthenticatedRoutes.SELF_INCOME_HISTORY}
              element={
                <DashboardMain
                  inner={<SelfIncomeHistory />}
                  parentName={"Dashboard"}
                  pageName="Self Income History"
                />
              }
            />
            <Route
              path={AuthenticatedRoutes.ADD_BANNER}
              element={
                <DashboardMain
                  inner={<CreatePromotionalBanner />}
                  parentName={"Dashboard"}
                  pageName="Add Banner"
                />
              }
            />
            <Route
              path={AuthenticatedRoutes.REFERRAL_HISTORY}
              element={
                <DashboardMain
                  inner={<ReferralHistory />}
                  parentName={"Dashboard"}
                  pageName="Referral History"
                />
              }
            />
            <Route
              path={AuthenticatedRoutes.ALL_LEVEL_INCOMES}
              element={
                <DashboardMain
                  inner={<AllLevelIncomes />}
                  parentName={"Dashboard"}
                  pageName="Lavel Incomes"
                />
              }
            />
            <Route
              path={AuthenticatedRoutes.WITHDRAWAL_ADMIN_REPORT}
              element={
                <DashboardMain
                  inner={<WithdrawalAdminReport />}
                  parentName={"Dashboard"}
                  pageName="Withdrawal History"
                />
              }
            />
                <Route
              path={AuthenticatedRoutes.FOUND_ADD}
              element={
                <DashboardMain
                  inner={<FoundAdd />}
                  parentName={"Dashboard"}
                  pageName="Found Add"
                />
              }
            />
            <Route
              path={AuthenticatedRoutes.ADD_NOTICE_UPDATES}
              element={
                <DashboardMain
                  inner={<AddNoticeUpdates />}
                  parentName={"Dashboard"}
                  pageName="Add Notice & Updates"
                />
              }
            />
          </>
        ) : (
          <>
            <Route
              path={AuthenticatedRoutes.USER_HOME}
              element={<UserMain />}
            />
            {token && (
              <Route
                path={"*"}
                element={
                  <DashboardMain
                    pageIcon={SidebarContent?.user?.dashboard[0]?.icon}
                    pageName={"Dashboard"}
                    parentName={"Dashboard"}
                    inner={<Dashboard1 />}
                  />
                }
              />
            )}

            <Route
              path={AuthenticatedRoutes.USER_DASHBOARD}
              element={
                <DashboardMain
                  pageIcon={SidebarContent?.user?.dashboard[0]?.icon}
                  pageName={"Dashboard"}
                  parentName={"Dashboard"}
                  inner={<Dashboard1 />}
                />
              }
            />
            <Route
              path={AuthenticatedRoutes.PROFILE}
              element={
                <DashboardMain
                  pageIcon={SidebarContent?.user?.my_account[0]?.icon}
                  parentName={"My Account"}
                  pageName={"Profile"}
                  inner={<ProfilePage />}
                />
              }
            />

            {/* <Route
              path={AuthenticatedRoutes.EDIT_PROFILE}
              element={
                <DashboardMain
                  pageIcon={SidebarContent?.user?.my_account[0]?.icon}
                  parentName={"My Account"}
                  pageName={"Edit Profile"}
                  inner={<EditProfilePage />}
                />
              }
            /> */}
            <Route
              path={AuthenticatedRoutes.TEAM_A_MEMBERS}
              element={
                <DashboardMain
                  pageIcon={SidebarContent?.user?.my_network[0]?.icon}
                  parentName={"My Network"}
                  pageName={"Team A"}
                  inner={<TeamANetwork />}
                />
              }
            />
            <Route
              path={AuthenticatedRoutes.TEAM_B_MEMBERS}
              element={
                <DashboardMain
                  pageIcon={SidebarContent?.user?.my_network[0]?.icon}
                  parentName={"My Network"}
                  pageName={"Team B"}
                  inner={<TeamBNetwork />}
                />
              }
            />
            <Route
              path={AuthenticatedRoutes.TEAM_C_MEMBERS}
              element={
                <DashboardMain
                  pageIcon={SidebarContent?.user?.my_network[0]?.icon}
                  parentName={"My Network"}
                  pageName={"Team C"}
                  inner={<TeamCNetwork />}
                />
              }
            />
            <Route
              path={AuthenticatedRoutes.LEVEL_INCOMES}
              element={
                <DashboardMain
                  pageIcon={SidebarContent?.user?.my_network[0]?.icon}
                  parentName={"My Network"}
                  pageName={"Level Incomes"}
                  inner={<LevelIncomes />}
                />
              }
            />
            <Route
              path={AuthenticatedRoutes.ALL_SELF_INCOME_HISTORY}
              element={
                <DashboardMain
                  pageIcon={SidebarContent?.user?.my_network[0]?.icon}
                  parentName={"My Network"}
                  pageName={"Self Incomes"}
                  inner={<AllSelfIncomeHistory />}
                />
              }
            />
            
            
            <Route
              path={AuthenticatedRoutes.WITHDRAWAL}
              element={
                <DashboardMain
                  pageIcon={SidebarContent?.user?.withdrawal[0]?.icon}
                  parentName={"Withdrawal"}
                  pageName={"Withdrawal"}
                  inner={<Withdrawal />}
                />
              }
            />
            <Route
              path={AuthenticatedRoutes.WITHDRAWAL_REPORT}
              element={
                <DashboardMain
                  pageIcon={SidebarContent?.user?.withdrawal[0]?.icon}
                  parentName={"Withdrawal"}
                  pageName={"Withdrawal Report"}
                  inner={<WithdrawalReport />}
                />
              }
            />
            <Route
              path={AuthenticatedRoutes.MEMBER_TOPUP}
              element={
                <DashboardMain
                  pageIcon={SidebarContent?.user?.topup[0]?.icon}
                  parentName={"Topup"}
                  pageName={"Member Topup"}
                  inner={<MemberTopup />}
                />
              }
            />
            <Route
              path={AuthenticatedRoutes.TOPUP_HISTORY}
              element={
                <DashboardMain
                  pageIcon={SidebarContent?.user?.topup[0]?.icon}
                  parentName={"Topup"}
                  pageName={"Topup History"}
                  inner={<TopupHistory />}
                />
              }
            />
            <Route
              path={AuthenticatedRoutes.SUPPORT_RAISE_TICKET}
              element={
                <DashboardMain
                  inner={<ComplainRaiseTicket />}
                  name="Raise Ticket"
                />
              }
            />
            <Route
              path={AuthenticatedRoutes.SUPPORT_RAISE_TICKET_HISTORY}
              element={
                <DashboardMain
                  inner={<ComplainTicketHistory />}
                  name="Raise Ticket"
                />
              }
            />
            <Route
              path={AuthenticatedRoutes.RANK_AND_LEADERBOARD}
              element={
                <DashboardMain
                  pageIcon={SidebarContent?.user?.my_account[0]?.icon}
                  parentName={"My Account"}
                  pageName={"Rank & Leaderboard"}
                  inner={<RankAndRewardLeaderboard />}
                />
              }
            />
          </>
        )}
      </Routes>
    </>
  );
};

export default Authenticate;
