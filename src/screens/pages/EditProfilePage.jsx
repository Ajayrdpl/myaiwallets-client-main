import { useSelector } from "react-redux";
import { ButtonLinear } from "../../components/ui/Buttons";
import TextInput from "../../components/ui/TextInput";
import "../../styles/ProfilePage.css";
import { formatDate } from "../../utils/dateFunctions";
import { useEffect, useState } from "react";
import {
  nameValidator,
  emailValidator,
  phoneValidator,
} from "../../utils/inputValidator";
import { SwalError, SwalSuccess } from "../../utils/custom-alert";
import PageLoader from "../../components/ui/PageLoader";
import { updateUserProfile } from "../../api/user-api";
// import TextInputPassword from "../../components/ui/TextInputPassword";

const EditProfilePage = () => {
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const [payload, setPayload] = useState({
    username: userInfo?.username,
    mobile: userInfo?.mobile,
    email: userInfo?.email,
    createdAt: formatDate(userInfo?.createdAt) || "NA",
    status: userInfo?.isActive ? "Active" : "Inactive",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPayload({
      ...payload,
      username: userInfo?.username,
      mobile: userInfo?.mobile,
      email: userInfo?.email,
      createdAt: formatDate(userInfo?.createdAt) || "NA",
      status: userInfo?.isActive ? "Active" : "Inactive",
    });
  }, [userInfo]);

  const handleChange = (e, field) => {
    const { value } = e.target;
    setPayload({
      ...payload,
      [field]: value,
    });
  };

  const validate = () => {
    const validationErrors = {};
    let isValid = true;

    const nameError = nameValidator(payload.username);
    const emailError = emailValidator(payload.email);
    const mobileError = phoneValidator(payload.mobile);

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

    setErrors(validationErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      setLoading(true);
      const response = await updateUserProfile(payload);
      SwalSuccess.fire({
        icon: "success",
        title: "Profile Updated Successfully",
        text: response?.message || "Your profile has been updated.",
      });
    } catch (error) {
      console.log(error);
      SwalError.fire({
        icon: "error",
        title: "Profile Update Failed",
        text:
          error?.response?.data?.message ||
          "There was an error updating your profile.",
      });
    }finally{
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <PageLoader />}
      <div className="ProfilePage martop">
        <div className="inner cardBox">
          <div className="input-container">
            <TextInput
              value={payload?.username}
              onChange={(e) => handleChange(e, "username")}
              placeholder={"Name"}
              labelName="Name"
              error={errors.username}
            />
            <TextInput
              value={payload?.mobile}
              onChange={(e) => handleChange(e, "mobile")}
              placeholder={"Mobile"}
              labelName="Mobile"
              error={errors.mobile}
            />
            <TextInput
              value={payload?.email}
              onChange={(e) => handleChange(e, "email")}
              placeholder={"Email"}
              labelName="Email"
              error={errors.email}
            />
            <TextInput
              disabled
              value={payload?.createdAt}
              placeholder={"Joining Date"}
              labelName="Joining Date"
            />
            <TextInput
              disabled
              value={payload?.status}
              placeholder={"Status"}
              labelName="Status"
            />
            {/* <TextInputPassword
              value={payload?.password}
              onChange={(e) => handleChange(e, "password")}
              placeholder={"New Password"}
              labelName="New Password"
            />
            <TextInputPassword
              value={payload?.password}
              onChange={(e) => handleChange(e, "password")}
              placeholder={"Confirm Password"}
              labelName="Confirm Password"
            /> */}
          </div>

          <div className="btns">
            <ButtonLinear name={"Update Profile"} onClick={() => handleSubmit()} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfilePage;
