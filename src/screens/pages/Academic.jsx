import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import '../../assets/app/academic.css';
import { sendPaymentResponse } from '../../api/user-api';
import { Modal } from "react-bootstrap";
import { Button2, ButtonLinear } from "../../components/ui/Buttons";
import { MainContent } from "../../constants/content/MainContent";
import { SwalError } from "../../utils/custom-alert";
import USDTPayment from "../../components/wallet/USDTpaymentAcadamic";

const Academic = () => {
  const [account, setAccount] = useState(null);
  const [amount, setAmount] = useState(0); // will be set from selected course
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const cards = [
    { id: 1, title: 'AI Crypto Trading', amount: 100 },
    { id: 2, title: 'AI Forex Trading', amount: 200 },
    { id: 3, title: 'My Ai Wallet Complete Coures', amount: 400 },
  ];

  // Check wallet connection on mount
  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: "eth_accounts" });
          if (accounts.length > 0) {
            setAccount(accounts[0]);
          }
        } catch (err) {
          console.error("Error checking wallet connection:", err);
        }
      }
    };
    checkConnection();
  }, []);

  // Connect wallet function
  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask not found! Install it.");
      return null;
    }
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);
      return accounts[0];
    } catch (err) {
      console.error("User rejected connection", err);
      return null;
    }
  };

  // Handle ETH payment
  const handlePayNow = async (course) => {
    const usdToEthRate = 0.00032; // TODO: Replace with live API call
    const amountInEther = (course.amount * usdToEthRate).toFixed(6);

    let currentAccount = account;
    if (!currentAccount) {
      currentAccount = await connectWallet();
      if (!currentAccount) return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const balance = await provider.getBalance(currentAccount);
      const amountWei = ethers.parseEther(amountInEther);

      if (balance < amountWei) {
        alert("Insufficient balance in wallet");
        return;
      }
	console.log("T1");
      const tx = await signer.sendTransaction({
        to: "0xE3A65Cf5EB009af2B894C66f34963d7dfcd1aD7A", // Change to your receiving address
        value: amountWei
      });
	console.log("T2");
      await tx.wait();
	console.log("T3");
      const response = await sendPaymentResponse({
        account: currentAccount,
        courseTitle: course.title,
        amountUSD: course.amount,
        amountETH: amountInEther,
        txHash: tx.hash
      });
	console.log("T4");
      if (response.success) {
        alert(`✅ Payment saved for ${course.title}!`);
      } else {
        alert(`❌ Failed: ${response.message}`);
      }
    } catch (err) {
      console.error("Transaction failed", err);
    }
  };

  // Open modal for selected course
  const addAmountHandler = (course) => {
    setAmount(course.amount);
    setSelectedCourse(course.title);

    if (!course.amount || course.amount <= 0) {
      SwalError.fire({
        title: "Error",
        text: "Please enter an amount greater than 0",
      });
      return;
    }
    if (course.amount < 50) {
      SwalError.fire({
        title: "Error",
        text: "Topup minimum 50$",
      });
      return;
    }
    setShowPaymentModal(true);
  };

  return (
    <div className="academic-container">
      <h2 className="academic-heading">Academic Courses</h2>
      <div className="card-grid">
        {cards.map((card) => (
          <div key={card.id} className="payment-card">
            <h3>{card.title}</h3>
            <p className="amount">${card.amount}</p>
            <div className="btns">
              <ButtonLinear name={"Buy Now"} onClick={() => addAmountHandler(card)} />
            </div>
          </div>
        ))}
      </div>

      {/* Payment Modal */}
      <Modal
        show={showPaymentModal}
        onHide={() => setShowPaymentModal(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable
        className="BNBPaymentModal"
      >
        <Modal.Body>
          <div className="inner">
            <h4>{MainContent.appName}</h4>
            {selectedCourse && <h5>Course: {selectedCourse}</h5>}
            <p>Amount: ${amount}</p>
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
  );
};

export default Academic;
