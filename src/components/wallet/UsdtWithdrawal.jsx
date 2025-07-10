import { useState } from "react";
import { ethers } from "ethers";
import Swal from "sweetalert2";
import { Button2 } from "../../components/ui/Buttons";
import PageLoader from "../../components/ui/PageLoader";
import { Modal } from "react-bootstrap";
import { MainContent } from "../../constants/content/MainContent";
import { useSelector } from "react-redux";
import { setWithdrawalTransaction } from "../../api/wallet-api";

// eslint-disable-next-line react/prop-types
const UsdtWithdrawal = ({ amount, isModalOpen, setIsModalOpen }) => {
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const [loading, setLoading] = useState(false);

  const withdrawalAddress = import.meta.env.VITE_WITHDRAWAL_ADDRESS;
  // const withdrawalPrivateKey = import.meta.env.VITE_ADMIN_PRIVATE_KEY;
  const checkMetaMask = () => {
    if (window.ethereum) {
      return true;
    } else {
      Swal.fire({
        icon: "error",
        title: "MetaMask not found",
        text: "Please install MetaMask to continue.",
      });
      return false;
    }
  };

  const handleWithdrawal = async () => {
    if (!checkMetaMask()) return;

    setLoading(true);

    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const userWalletAddress = await signer.getAddress();

      // console.log("User wallet address:", userWalletAddress);

      const usdtAddress = "0x55d398326f99059fF775485246999027B3197955";
      const usdtABI = [
        "function transfer(address recipient, uint256 amount) public returns (bool)",
        "function balanceOf(address account) public view returns (uint256)",
        "function approve(address spender, uint256 amount) public returns (bool)",
        "function transferFrom(address sender, address recipient, uint256 amount) public returns (bool)"
      ];

      const usdtContract = new ethers.Contract(usdtAddress, usdtABI, provider);
      // add 10% deduction
      const deductionAmount = amount * 0.1;
      const amountInWei = ethers.parseUnits((amount - deductionAmount).toString(), 18);

      const adminBalance = await usdtContract.balanceOf(withdrawalAddress);
      // console.log("Admin balance:", adminBalance.toString());
      return Swal.fire({
        icon: "error",
        title: "Withdrawal Failed",
        text: "It's been over 48 hours since your last withdrawal, but due to a technical issue, this request couldn't be processed. Please try again shortly.",
      });

      if (BigInt(adminBalance) < BigInt(amountInWei)) {
        Swal.fire({
          icon: "error",
          title: "Withdrawal Failed",
          text: "You can only withdraw once every 48 hours. Please try again later.",
        });
        setLoading(false);
        return;
      }

      // const adminWallet = new ethers.Wallet(withdrawalPrivateKey, provider);
      const contractWithAdminSigner = usdtContract.connect(adminWallet);

      const tx = await contractWithAdminSigner.transfer(userWalletAddress, amountInWei);
      await tx.wait();

      setLoading(false);
      setWithdrawalResponse(tx);
      setIsModalOpen(false);

    } catch (error) {
      console.error("Error processing withdrawal:", error);
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Withdrawal Failed",
        text: "Failed to process withdrawal. Please try again.",
      });
    }
  };

  const setWithdrawalResponse = async (res) => {
    setLoading(true);
    try {
      await setWithdrawalTransaction({ response: res, amount });
      Swal.fire({
        icon: "success",
        title: "Withdrawal Successful",
        text: `You have successfully withdrawn ${amount} USDT!`,
        allowOutsideClick: false,
      }).then(() => {
        window.location.reload();
      });
    } catch (error) {
      // console.error("Error set withdrawal response:", error);
      Swal.fire({
        icon: "error",
        title: "Withdrawal Failed",
        text: error?.response?.data?.message || "There was an error during the withdrawal. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <PageLoader />}

      <div className="USDTPaymentModal">
        <Modal
          show={isModalOpen}
          onHide={!isModalOpen}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          scrollable
        >
          <Modal.Body>
            <div className="inner">
              <h3 className="heading mb-5">{MainContent.appName}</h3>
              <p className="para">
                Current wallet balance: $ {userInfo?.totalIncome || "0"}
              </p>
              <p className="para">
                Withdrawal amount: {amount} USDT
              </p>

              <div className="btns">
                <Button2
                  name={"Confirm Withdrawal"}
                  onClick={handleWithdrawal}
                  disabled={loading}
                />
                <Button2
                  className="closeBtn"
                  name={"Cancel"}
                  onClick={() => setIsModalOpen(false)}
                  disabled={loading}
                />
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default UsdtWithdrawal;
