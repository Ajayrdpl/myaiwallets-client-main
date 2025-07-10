import { useState } from "react";
import { Link } from "react-scroll";
import ContactFormPopup from "./ContactFormPopup";
import { MainContent } from "../../constants/content/MainContent";
import { useNavigate } from "react-router-dom";
import { AuthenticatedRoutes, AuthRoutes } from "../../constants/Routes";
import { getCurrentUser } from "../../utils/TokenFunc";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const navigate = useNavigate();
  const role = getCurrentUser()?.role;

  const handleNavigate = () => {
    if (role == "ADMIN") {
      navigate(AuthenticatedRoutes.ADMIN_DASHBOARD);
    } else if (role == "USER") {
      navigate(AuthenticatedRoutes.USER_DASHBOARD);
    } else {
      navigate(AuthRoutes.LOGIN);
    }
  };

  return (
    <>
      <ContactFormPopup show={showPopup} closePopup={closePopup} />
      <nav className="bg-black w-full">
        <div className="hidden md:flex justify-between items-center bg-gradient-to-r from-[#022E53] to-[#052137] py-3 px-10">
          <div>
            <img
              src={MainContent.appLogo}
              alt="Logo"
              className="h-10 lg:w-full lg:h-12 "
            />
          </div>

          <div className="flex gap-10 text-white">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer group relative"
            >
              <h2 className="text-white relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                Home
              </h2>
            </Link>

            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer group relative"
            >
              <h2 className="text-white relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                About Us
              </h2>
            </Link>

            <div onClick={openPopup} className="cursor-pointer">
              <h2 className="text-white relative pb-1 hover:after:w-full after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300">
                Contact Us
              </h2>
            </div>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handleNavigate}
              className="bg-[#2BA83C] py-3 px-6 text-white rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Log in
            </button>
            <button className="bg-[#2BA83C] py-3 px-6 text-white rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Open Account
            </button>
          </div>
        </div>

        {/* Mobile View */}
        <div className="flex md:hidden justify-between items-center px-4 py-2 bg-white">
          <img src={MainContent.appLogo} alt="Logo" className="h-10" />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="flex flex-col items-center gap-4 py-4 bg-white text-black md:hidden">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <h2>Home</h2>
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <h2>About Us</h2>
            </Link>
            <div onClick={openPopup} className="cursor-pointer">
              <h2>Contact Us</h2>
            </div>
            <div className="space-y-2 space-x-5">
              <button className="bg-[#2BA83C] py-2 px-6 text-white rounded-lg">
                Log in
              </button>
              <button className="bg-[#2BA83C] py-2 px-6 text-white rounded-lg">
                Open Account
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
