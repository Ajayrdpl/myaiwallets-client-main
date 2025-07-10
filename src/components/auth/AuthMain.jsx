/* eslint-disable react/prop-types */
import sideImg from "../../assets/sideImg.png";
import authBg from "../../assets/loginbg.jpg";
import "../../styles/auth/AuthMain.css";
import { MainContent } from "../../constants/content/MainContent";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

/* eslint-disable react/no-unescaped-entities */
const AuthMain = ({ inner }) => {
  const location = useLocation();

  useEffect(() => {
    if (document.querySelector(".AuthMain")) {
      document.documentElement.style.fontSize = "62.5%";
      if(window.innerWidth < 768){
        document.documentElement.style.fontSize = "50%";
      }
    }
    return () => {
      document.documentElement.style.fontSize = "";
    };
  }, [location.pathname]);
  return (
    <>
      <div
        data-aos="fade-right"
        className="AuthMain"
        style={{ backgroundImage: `url(${authBg})` }}
      >
        <div className="auth-inner">
          <div className="container-box">
            <div className="content-main">
              <div className="msg-container space-y-8">
                <div className="w-24 h-24 mx-auto md:w-40 md:h-40">
                  <img src={MainContent?.appLogo} alt=""/>
                </div>
                <h1 className="text-6xl text-white md:text-8xl text-center md:text-left" >
                  Grow Your Wealth with Smart Investments
                </h1>
                <p className="text-center text-white text-2xl md:text-4xl">
                  Maximize returns with easy-to-use staking and investment
                  options.
                </p>
              </div>

              {inner}
            </div>
            {/* <div data-aos="fade-left" className="side-img">
              <img src={sideImg} alt="" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthMain;
