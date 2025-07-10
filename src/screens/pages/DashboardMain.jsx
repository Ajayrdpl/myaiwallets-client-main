/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import Breadscrumb from "../../components/ui/Breadscrumb";
import Header from "../../components/ui/Header";
import Sidebar from "../../components/ui/Sidebar";
import "../../styles/dashboard/DashboardMain.css";
import { useEffect, useState } from "react";
import PageLoader from "../../components/ui/PageLoader";
import { getAllBanners } from "../../api/user-api";
import OfferFeaturesPopup from "../../components/ui/OfferFeaturesPopup";
import { getCurrentUser } from "../../utils/TokenFunc";

const DashboardMain = ({ inner, pageName, pageIcon, parentName }) => {
  const role = getCurrentUser().role;
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [bannerData, setBannerData] = useState(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (document.querySelector(".DashboardMain")) {
      document.documentElement.style.fontSize = "62.5%";
      if (window.innerWidth < 768) {
        document.documentElement.style.fontSize = "50%";
      }
    }
    return () => {
      document.documentElement.style.fontSize = "";
    };
  }, [location.pathname]);

  const getBanner = async () => {
    const storedBanner = JSON.parse(sessionStorage.getItem("showBanner"));
    if (storedBanner === false) return;
    try {
      setLoading(true);
      const res = await getAllBanners();
      setBannerData(res.data);
      setShowBanner(true);
    } catch (error) {
      console.error("Failed to fetch banners", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (role === "User") {
      getBanner();
    }
  }, []);
  const closeBannerHandler = () => {
    setShowBanner(false);
    sessionStorage.setItem("showBanner", JSON.stringify(false));
  };

  return (
    <>
      {loading && <PageLoader />}
      {bannerData && (
        <OfferFeaturesPopup
          show={showBanner}
          onHide={closeBannerHandler}
          data={bannerData}
        />
      )}
      <div className={`DashboardMain ${role === "Admin" ? "admin" : ""}`}>
        <div className="DashboardMain-inner">
          <Sidebar />
          <div className="right-container">
            <Header />
            <div className="main-wrapper">
              <Breadscrumb
                parentName={parentName}
                pageName={pageName}
                pageIcon={pageIcon}
              />
              {inner}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardMain;
