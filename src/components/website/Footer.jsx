import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t text-gray-700 py-8 text-lg">
      <div className="container mx-auto px-4 max-w-7xl">

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div>
            <h4 className="font-bold mb-4">About</h4>
            <p>
              My Ai Wallet is an AI-based Forex Trading Robot with the power of more
              than 6 powerful languages.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold">Subscribe To Newsletter</h4>
            <form className="flex gap-2 items-center mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-2 border rounded-md focus:outline-none"
              />
              <button className="bg-green-500 text-white text-sm px-3 py-2 rounded-md">
                SEND
              </button>
            </form>
            <div className="flex space-x-4">
              <a href="#" className="bg-green-600 p-3 rounded-full text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-green-600 p-3 rounded-full text-white">
                <FaTwitter />
              </a>
              <a href="#" className="bg-green-600 p-3 rounded-full text-white">
                <FaLinkedinIn />
              </a>
              <a href="#" className="bg-green-600 p-3 rounded-full text-white">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center border-t pt-6 text-lg">
          © {new Date().getFullYear()} — My Ai Wallet. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
