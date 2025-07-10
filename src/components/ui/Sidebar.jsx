import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Accordion } from "react-bootstrap";
import { FaCaretRight } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import "../../styles/Sidebar.css";
import { SidebarContent } from "../../constants/content/SidebarContent";
import { MainContent } from "../../constants/content/MainContent";
import { AuthenticatedRoutes } from "../../constants/Routes";
import { FiChevronDown, FiChevronLeft } from "react-icons/fi";
import { TiChevronLeft } from "react-icons/ti";
import {
  setSidemenuToggle,
  setSidemenuToggleOff,
} from "../../redux/slice/feature-sidemenu";
import { logoutHandler } from "../../utils/additionalFunc";
import { getCurrentUser } from "../../utils/TokenFunc";

const Sidebar = () => {
  const sideMenuTgl = useSelector((state) => state.Sidemenu);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const role = getCurrentUser()?.role;
  const [activeLink, setActiveLink] = useState(
    SidebarContent?.dashboard?.[0]?.id
  );

  useEffect(() => {
    const allItems =
      role === "Admin" ? SidebarContent?.admin : SidebarContent?.user;
    Object.values(allItems).forEach((section) => {
      section.forEach((item) => {
        if (item.link === location.pathname) {
          setActiveLink(item.id);
        }
      });
    });
  }, [location.pathname, role]);

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
    if (window.innerWidth < 768) {
      dispatch(setSidemenuToggle())
    }
  };

  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionToggle = (key) => {
    if (activeAccordion === key) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(key);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        dispatch(setSidemenuToggleOff());
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`Sidebar ss-card ${sideMenuTgl?.open ? "show" : "hide"}`}
      id="navbar"
    >
      <nav className="nav">
        <button
          className="sideToggleClgBtn"
          onClick={() => dispatch(setSidemenuToggle())}
        >
          <TiChevronLeft />
        </button>
        <div>
          <Link to={AuthenticatedRoutes.USER_DASHBOARD} onClick={() => handleLinkClick(SidebarContent?.dashboard?.[0]?.id)} className="nav-logo">
            <div className="nav-logo-icon">
              <img src={MainContent.appLogo} alt="logo" />
            </div>
            {/* <h4 className="name">{MainContent.appName}</h4> */}
          </Link>

          <ul className="nav-list">
            <Accordion defaultActiveKey="0">
              {Object.keys(
                role === "Admin" ? SidebarContent?.admin : SidebarContent?.user
              ).map((section, idx) => {
                const sectionItems =
                  role === "Admin"
                    ? SidebarContent?.admin[section]
                    : SidebarContent?.user[section];

                if (sectionItems?.length === 1) {
                  return (
                    <li key={section}>
                      <Link
                        to={sectionItems?.[0]?.link}
                        className={`nav-link ${activeLink === sectionItems?.[0]?.id ? "active" : ""
                          }`}
                        onClick={() => handleLinkClick(sectionItems?.[0]?.id)}
                        aria-label={`Navigate to ${sectionItems?.[0]?.name}`}
                      >
                        {sectionItems?.[0]?.icon}{" "}
                        <span className="name">{sectionItems?.[0]?.name}</span>
                      </Link>
                    </li>
                  );
                }

                return (
                  <Accordion.Item key={idx} eventKey={String(idx + 1)}>
                    <Accordion.Header
                      onClick={() => handleAccordionToggle(idx + 1)}
                    >
                      <div className="left flex">
                        {sectionItems?.[0]?.icon}{" "}
                        <span className="name">
                          {section?.replaceAll("_", " ")}
                        </span>
                      </div>
                      {activeAccordion === idx + 1 ? (
                        <FiChevronDown />
                      ) : (
                        <FiChevronLeft />
                      )}
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        {sectionItems?.map((item) => (
                          <li key={item?.id}>
                            <Link
                              to={item?.link}
                              className={`nav-link ${activeLink === item?.id ? "active" : ""
                                }`}
                              onClick={() => handleLinkClick(item?.id)}
                              aria-label={`Navigate to ${item?.name}`}
                            >
                              <FaCaretRight /> {item?.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
            <li>
              <Link className={`nav-link logout-btn`} onClick={logoutHandler}>
                {<AiOutlineLogout />}
                <span className="name">LogOut</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
