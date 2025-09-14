import { Modal } from "react-bootstrap";
import { Button2, ButtonLinear } from "../../components/ui/Buttons";
import TextInput from "../../components/ui/TextInput";
import { useState } from "react";
import BNBPayment from "../../components/wallet/BNBPayment";
import { MainContent } from "../../constants/content/MainContent";
import { SwalError } from "../../utils/custom-alert";
import { useSelector } from "react-redux";
import USDTPayment from "../../components/wallet/USDTPayment";
import { useEffect } from "react";

const MemberTopup = () => {
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [amount, setAmount] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(null);


  const addAmountHandler = () => {
    if (!amount) {
      SwalError.fire({
        title: "Error",
        text: "Please enter an amount greater than 0",
      });
      return;
    }
    if (amount < 50) {
      SwalError.fire({
        title: "Error",
        text: "Topup minimum 50$",
      });
      return;
    }
    setShowPaymentModal(true);
  };
  return (
    <>
      <div className="MemberTopup">
        <div className="cardBox half martop">
          <div className="top">
            <h5 className="heading">Main Wallet : $ {userInfo?.totalIncome?.toFixed(2) || "0"}</h5>
          </div>
          <div className="input-container">
            <TextInput
              placeholder={"Enter Amount (USD) Ex. $100"}
              labelName="Amount"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
            />
          </div>
          <div className="btns">
            <ButtonLinear name={"Add Amount"} onClick={addAmountHandler} />
          </div>
        </div>
      </div>

      <div className="BNBPaymentModal">
        <Modal
          show={showPaymentModal}
          onHide={!showPaymentModal}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          scrollable
          className="BNBPaymentModal"
        >
          <Modal.Body>
            <div className="inner">
              <h4>{MainContent.appName}</h4>
              {/* <BNBPayment
                amount={amount}
                onSuccess={() => setShowPaymentModal(false)}
                onFailure={() => setShowPaymentModal(false)}
              /> */}
              <USDTPayment
	  	amount={amount}
                onSuccess={() => setShowPaymentModal(false)}
                onFailure={() => setShowPaymentModal(false)}
              />
              <Button2
                className="closeBtn"
                name={"Close"}
                onClick={() => setShowPaymentModal(false)}
              />
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default MemberTopup;
