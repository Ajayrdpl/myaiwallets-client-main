import { AiOutlineHome } from "react-icons/ai";
import { AuthenticatedRoutes } from "../Routes";
import {
  MdAttachMoney,
  MdHistory,
  MdManageAccounts,
  MdOutlineAttachMoney,
  MdOutlineSupportAgent,
  MdVideoCameraBack,
} from "react-icons/md";
import {
  FaMoneyBillTransfer,
  FaPeopleGroup,
  FaRegMoneyBill1,
  FaUsers,
} from "react-icons/fa6";
import { IoWallet } from "react-icons/io5";
import { FaMoneyBillAlt } from "react-icons/fa";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

export const SidebarContent = {
  admin: {
    dashboard: [
      {
        id: "Dashboard",
        icon: <HiOutlineSquares2X2 />,
        name: "Dashboard",
        link: AuthenticatedRoutes.ADMIN_DASHBOARD,
      },
    ],

    users: [
      {
        id: "All Users",
        icon: <FaUsers />,
        name: "All Users",
        link: AuthenticatedRoutes.ALL_USERS,
      },
    ],
    Financial_history: [
      {
        id: "Investment",
        name: "Investment History",
        link: AuthenticatedRoutes.ALL_INVESTMENTS,
        icon: <FaRegMoneyBill1 />,
      },
      {
        id: "Self Income",
        name: "Self Income History",
        link: AuthenticatedRoutes.SELF_INCOME_HISTORY,
        icon: <FaRegMoneyBill1 />,
      },
      {
        id: "Referral",
        name: "Referral History",
        link: AuthenticatedRoutes.REFERRAL_HISTORY,
        icon: <FaRegMoneyBill1 />,
      },
      {
        id: "Level Incomes",
        icon: <AiOutlineHome />,
        name: "Level Income",
        link: AuthenticatedRoutes?.ALL_LEVEL_INCOMES,
      },
    ],
    Promotional_Management: [
      {
        id: "Add Banner",
        name: "Add Banner",
        link: AuthenticatedRoutes.ADD_BANNER,
        icon: <MdHistory />,
      },
      {
        id: "Add Notice & Updates",
        name: "Add Notice & Updates",
        link: AuthenticatedRoutes.ADD_NOTICE_UPDATES,
        icon: <MdHistory />,
      },
    ],
    Withdrawal_Request: [
      {
        id: "Total Withdrawal",
        name: "Withdrawal History",
        link: AuthenticatedRoutes.WITHDRAWAL_ADMIN_REPORT,
        icon: <IoWallet />,
      },
    ],

    Found_Add: [
      {
        id: "Total Found",
        name: "Found Add",
        link: AuthenticatedRoutes.FOUND_ADD,
        icon: <MdAttachMoney />,
      },
    ],
    "Intro video": [
      {
        id: "intro video",
        name: "Intro Video",
        link: AuthenticatedRoutes.VIDEO_TUTORIAL,
        icon: <MdVideoCameraBack />,
      },
    ],
    "Help_&_Support": [
      {
        id: "Support history",
        name: "Raise Ticket History",
        link: AuthenticatedRoutes.RAISE_TICKET_LIST,
        icon: <MdOutlineSupportAgent />,
      },
    ],
  },

  user: {
    dashboard: [
      {
        id: "Dashboard1",
        icon: <AiOutlineHome />,
        name: "Dashboard",
        link: AuthenticatedRoutes?.USER_DASHBOARD,
      },
    ],
    my_account: [
      {
        id: "Profile",
        icon: <MdManageAccounts />,
        name: "Profile",
        link: AuthenticatedRoutes?.PROFILE,
      },
      // {
      //   id: "Edit",
      //   icon: <AiOutlineHome />,
      //   name: "Edit Profile",
      //   link: AuthenticatedRoutes?.EDIT_PROFILE,
      // },
      {
        id: "Rank & Leaderboard",
        icon: <AiOutlineHome />,
        name: "Rank & Leaderboard",
        link: AuthenticatedRoutes?.RANK_AND_LEADERBOARD,
      },
    ],
    my_network: [
      {
        id: "TeamA",
        icon: <FaPeopleGroup />,
        name: "Team A",
        link: AuthenticatedRoutes?.TEAM_A_MEMBERS,
      },
      {
        id: "TeamB",
        icon: <AiOutlineHome />,
        name: "Team B",
        link: AuthenticatedRoutes?.TEAM_B_MEMBERS,
      },
      {
        id: "TeamC",
        icon: <AiOutlineHome />,
        name: "Team C",
        link: AuthenticatedRoutes?.TEAM_C_MEMBERS,
      },
      {
        id: "Level Incomes",
        icon: <AiOutlineHome />,
        name: "Level Income",
        link: AuthenticatedRoutes?.LEVEL_INCOMES,
      },
      {
        id: "Self Incomes",
        icon: <AiOutlineHome />,
        name: "Self Income",
        link: AuthenticatedRoutes?.ALL_SELF_INCOME_HISTORY,
      },
    ],
    withdrawal: [
      {
        id: "Withdrawal",
        icon: <FaMoneyBillTransfer />,
        name: "Withdrawal",
        link: AuthenticatedRoutes?.WITHDRAWAL,
      },
      {
        id: "WithdrawalReport",
        icon: <AiOutlineHome />,
        name: "Withdrawal Report",
        link: AuthenticatedRoutes?.WITHDRAWAL_REPORT,
      },
    ],
    topup: [
      {
        id: "Topup",
        icon: <FaMoneyBillAlt />,
        name: "ID Topup",
        link: AuthenticatedRoutes?.MEMBER_TOPUP,
      },
      {
        id: "TopupHistory",
        icon: <AiOutlineHome />,
        name: "Topup History",
        link: AuthenticatedRoutes?.TOPUP_HISTORY,
      },
    ],
    // payout_reports: [
    //   {
    //     id: "PayoutReports",
    //     icon: <IoWallet />,
    //     name: "Payout Reports",
    //     link: AuthenticatedRoutes?.PAYOUT_REPORTS,
    //   },
    // ],
    // report: [
    //   {
    //     id: "Report",
    //     icon: <TbReportSearch />,
    //     name: "Report",
    //     link: AuthenticatedRoutes?.REPORT,
    //   },
    // ],
    // "news_&_events": [
    //   {
    //     id: "news_&_events",
    //     icon: <PiNewspaperClippingBold />,
    //     name: "News & Events",
    //     link: AuthenticatedRoutes?.REPORT,
    //   },
    // ],
    // promotional_tools: [
    //   {
    //     id: "PromotionalTools",
    //     icon: <FaToolbox />,
    //     name: "Promotional Tools",
    //     link: AuthenticatedRoutes?.PROMOTIONAL_TOOLS,
    //   },
    // ],
    "Intro video": [
      {
        id: "intro video",
        name: "Intro Video",
        link: AuthenticatedRoutes.VIDEO_TUTORIAL,
        icon: <MdVideoCameraBack />,
      },
    ],
    "help_&_support": [
      {
        id: "Support",
        icon: <MdOutlineSupportAgent />,
        name: "Raise Ticket",
        link: AuthenticatedRoutes?.SUPPORT_RAISE_TICKET,
      },
      {
        id: "Support History",
        icon: <MdOutlineSupportAgent />,
        name: "Complain History",
        link: AuthenticatedRoutes?.SUPPORT_RAISE_TICKET_HISTORY,
      },
    ],
  },
};
