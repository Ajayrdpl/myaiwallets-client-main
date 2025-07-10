import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button2 } from "../ui/Buttons";
import TextInput from "../ui/TextInput";
import { AuthenticatedRoutes, AuthRoutes } from "../../constants/Routes";
import {
  emailValidator,
  nameValidator,
  phoneValidator,
} from "../../utils/inputValidator";
import { SwalError, SwalSuccess } from "../../utils/custom-alert";
import PageLoader from "../ui/PageLoader";
import { registerWithWallet } from "../../api/auth-api";
import { ethers } from "ethers";
import { saveToken } from "../../utils/TokenFunc";
import Swal from "sweetalert2";

/* eslint-disable react/no-unescaped-entities */
const AuthRegisterForm = () => {
  const walletAddRef = useRef(null);
  const navigate = useNavigate();
  const { search } = useLocation();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    referral: "",
    walletAddress: "",
  });
  useEffect(() => {
    if (search) {
      setFormData({
        ...formData,
        referral: search?.split("=")[1] || "",
      });
    }
  }, [search]);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e, field) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleNavigate = () => {
    navigate(AuthenticatedRoutes.USER_DASHBOARD);
    window.location.reload();
  };

  const validate = () => {
    const validationErrors = {};
    let isValid = true;

    const nameError = nameValidator(formData.username);
    const emailError = emailValidator(formData.email);
    const referralError =
      formData.referral?.trim() === "" ? "Referral code is required" : "";
    const mobileError = phoneValidator(formData.mobile, false);

    if (nameError) {
      validationErrors.username = nameError;
      isValid = false;
    }
    if (emailError) {
      validationErrors.email = emailError;
      isValid = false;
    }
    if (mobileError) {
      validationErrors.mobile = mobileError;
      isValid = false;
    }
    // if (referralError) {
    //   validationErrors.referral = referralError;
    //   isValid = false;
    // }

    setErrors(validationErrors);
    return isValid;
  };

  const handleRegisterClick = async () => {
    setLoading(true);
    try {
      const response = await registerWithWallet({
        ...formData,
        walletAddress: walletAddRef.current,
      });
      saveToken(response?.id, response?.token, "User");
      Swal.fire({
        icon: "success",
        title: "Registration Success",
        text: response?.message || "You have registered successfully",
        timer: 3000,
      }).then(() => {
        handleNavigate();
      });
    } catch (error) {
      console.log(error);
      SwalError.fire({
        icon: "error",
        title: "Registration Failed",
        text: error?.response?.data?.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const connectWallet = async () => {
    if (!validate()) return;

    if (window.ethereum) {
      try {
        setLoading(true);
        // eslint-disable-next-line no-unused-vars
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        walletAddRef.current = await signer.getAddress();
        setFormData({
          ...formData,
          walletAddress: walletAddRef.current,
        });
        handleRegisterClick();
        // setUser(userDetails);
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

      <div className="AuthRegisterForm content">
        <h5 className="main-heading" data-aos="fade-up">
          Register
        </h5>
        <div data-aos="fade-up" className="input-form">
          <div className="input-container">
            <TextInput
              value={formData.username}
              onChange={(e) => handleChange(e, "username")}
              placeholder="John Doe"
              labelName="Name"
              error={errors.username}
            />
            <TextInput
              value={formData.email}
              onChange={(e) => handleChange(e, "email")}
              placeholder="example@gmail.com"
              labelName="Email Address"
              error={errors.email}
            />
            <TextInput
              value={formData.mobile}
              onChange={(e) => handleChange(e, "mobile")}
              placeholder="Enter Mobile Number"
              labelName="Mobile Number"
              error={errors.mobile}
              min={10}
              max={10}
            />

            <TextInput
              value={formData.referral}
              onChange={(e) => handleChange(e, "referral")}
              placeholder="Refer Code"
              labelName="Referral Code"
              error={errors.referral}
            />
          </div>

          <div className="btns">
            <Button2
              name={"Connect Wallet"}
              onClick={connectWallet}
              disabled={loading}
            />
          </div>
        </div>

        <span className="accontTggle">
          Already have an account? <Link to={AuthRoutes.LOGIN} className="text-orange-500">Sign In</Link>
        </span>
      </div>
    </>
  );
};

export default AuthRegisterForm;
