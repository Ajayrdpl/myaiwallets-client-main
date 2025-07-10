import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import "../../styles/Header.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAdminInfo, getUserInfo } from "../../api/user-api";
import { setUserInfo } from "../../redux/slice/UserInfoSlice";
import { SwalError } from "../../utils/custom-alert";
import { AuthenticatedRoutes } from "../../constants/Routes";
import PageLoader from "./PageLoader";
import { setSidemenuToggle } from "../../redux/slice/feature-sidemenu";
import { logoutHandler } from "../../utils/additionalFunc";
import { AiOutlineLogout } from "react-icons/ai";
import { getCurrentUser } from "../../utils/TokenFunc";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const userInfo = useSelector((state) => state.userInfo.userInfo);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const role = getCurrentUser().role;
    const fetchUserInfo = async () => {
      try {
        setLoading(true);
        if (role == "Admin") {
          const user = await getAdminInfo();
          dispatch(setUserInfo(user));
        } else {
          const user = await getUserInfo();
          dispatch(setUserInfo(user));
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
        SwalError.fire({
          title: "Error",
          text: error?.response?.data?.message || "Error fetching user info",
          confirmButtonText: "OK",
        });
        setTimeout(() => {
          localStorage.clear();
          navigate(AuthenticatedRoutes.USER_HOME);
          window.location.reload();
        }, 3000);
      } finally {
        setLoading(false);
      }
    };
    fetchUserInfo();
  }, [location.pathname]);

  return (
    <>
      {loading && <PageLoader />}
      <div className="Header">
        <button
          onClick={() => dispatch(setSidemenuToggle())}
          className="sideToggleBTN"
        >
          <GiHamburgerMenu />
        </button>
        <div className="search_wrapper">
          <IoSearch color="white"/>
          <input type="text" placeholder="Search" />
        </div>
        <div className="right-wrapper">
          <div className="profile-btn">
            <h5 className="md:text-xl " style={{ textTransform: "capitalize" }}>
              {userInfo?.username}
            </h5>
            <div className="user-img">
              <img src="https://img.icons8.com/papercut/60/user.png" alt="" />
            </div>
            <button className="logout-btn" onClick={logoutHandler}>
              <AiOutlineLogout />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
