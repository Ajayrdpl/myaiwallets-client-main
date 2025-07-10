import { useSelector } from "react-redux";
import TextInput from "../../components/ui/TextInput";
import "../../styles/ProfilePage.css";
import { formatDate } from "../../utils/dateFunctions";
const ProfilePage = () => {
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  return (
    <>
      <div className="ProfilePage martop">
        <div className="inner cardBox">
          {/* <div className="profileImg">
            <img src="" alt="" />
          </div> */}
          <div className="input-container">
            <TextInput disabled={"disabled"} value={userInfo?.username} placeholder={"Name"} labelName="Name" />
            <TextInput disabled={"disabled"} value={userInfo?.mobile} placeholder={"Mobile"} labelName="Mobile" />
            <TextInput disabled={"disabled"} value={userInfo?.email} placeholder={"Email"} labelName="Email" />
            <TextInput disabled={"disabled"} value={formatDate(userInfo?.createdAt) } placeholder={"Joining Date"} labelName="Joining Date" />
            <TextInput disabled={"disabled"} value={userInfo?.isActive ? "Active" : "Inactive"} placeholder={"Status"} labelName="Status" />
            {/* <TextInput disabled={"disabled"} placeholder={"Global Crowd Share Status"} labelName="Global Crowd Share Status" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
