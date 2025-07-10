/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import { Button2 } from "../ui/Buttons";
import TextInput from "../ui/TextInput";
import { useRef, useState } from "react";
import { AuthenticatedRoutes, AuthRoutes } from "../../constants/Routes";
import PageLoader from "../ui/PageLoader";
import { emailValidator, passwordValidator } from "../../utils/inputValidator";
import { SwalError, SwalSuccess } from "../../utils/custom-alert";
import { loginWithWallet } from "../../api/auth-api";
import { ethers } from "ethers";
import { saveToken } from "../../utils/TokenFunc";
import Swal from "sweetalert2";

const AuthLoginForm = () => {
  const [payload, setPayload] = useState({
    walletAddress: "",
  });
  const walletAddRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(AuthenticatedRoutes.USER_DASHBOARD);
    window.location.reload();
  };
  const handleSubmit = async () => {
    if (loading) return;

    setLoading(true);
    try {
      const response = await loginWithWallet({
        ...payload,
        walletAddress: walletAddRef.current,
      });

      saveToken(response?.id, response?.token, "User");
      Swal.fire({
        icon: "success",
        title: "Login Success",
        text: "You have logged in successfully",
        timer: 3000,
      }).then(() => {
        handleNavigate();
      });
    } catch (error) {
      console.log(error);
      SwalError.fire({
        icon: "error",
        title: "Login Failed",
        text: error?.response?.data.message || error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        setLoading(true);
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        walletAddRef.current = await signer.getAddress();
        setPayload({
          ...payload,
          walletAddress: walletAddRef.current,
        });
        handleSubmit();
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      } finally {
        setLoading(false);
      }
    } else {
      SwalError.fire({
        icon: "error",
        title: "Wallet Connection Failed",
        text: "MetaMask is not installed!",
        timer: 3000,
      });
    }
  };

  return (
    <>
      {loading && <PageLoader />}
      <div className="AuthLoginForm content">
        <h5 className="main-heading" data-aos="fade-up">
          Welcome Back
        </h5>
        <p data-aos="fade-up">
          Today is a new day. It's your day. You shape it. Sign in to start
          managing your projects.
        </p>
        <div data-aos="fade-up" className="btns">
          <Button2
            onClick={connectWallet}
            name={"Login With Wallet"}
            disabled={loading}
          />
        </div>

        <span data-aos="fade-up" className="accontTggle">
          Don't you have an account?{" "}
          <Link to={AuthRoutes.REGISTER} className="text-orange-500">Sign up</Link>
        </span>
      </div>
    </>
  );
};

export default AuthLoginForm;
