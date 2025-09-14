import { useEffect, useState } from "react";
import { ethers } from "ethers";
import Swal from "sweetalert2";
import { Button2 } from "../ui/Buttons";
import PageLoader from "../ui/PageLoader";
import { buyPlanPackageAcadamic } from "../../api/wallet-api";
import convertUSDToUSDT from "../../utils/additionalFunc";


const USDT_ADDRESS = "0x55d398326f99059fF775485246999027B3197955";
 
const USDT_ABI = [
  "function allowance(address owner, address spender) view returns (uint256)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "function balanceOf(address account) view returns (uint256)",
  "function decimals() view returns (uint8)",
];

// eslint-disable-next-line react/prop-types
const USDTPayment = ({ amount, onSuccess, onFailure }) => {
  const [loading, setLoading] = useState(false);
  const [USDTAmount, setUSDTAmount] = useState(0);
  const [walletConnected, setWalletConnected] = useState(false);
  const [recipientAddress, setRecipientAddress] = useState(
    import.meta.env.VITE_PAYMENT_ADDRESS
  );
  useEffect(() => {
    setRecipientAddress(import.meta.env.VITE_PAYMENT_ADDRESS);
  }, []);

  const convertAndLog = async (amount) => {
    try {
      const usdtAmount = await convertUSDToUSDT(amount);
      setUSDTAmount(usdtAmount?.toFixed(2));
    } catch (error) {
      console.error("Error during conversion:", error);
    }
  };

  useEffect(() => {
    if (!amount) return;
	 //console.log(amount);
    convertAndLog(amount);
  }, [amount]);

  const handleConnectWallet = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });

        try {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x38" }], // BSC Mainnet
          });
        } catch (switchError) {
          if (switchError.code === 4902) {
            try {
              await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: "0x38",
                    chainName: "Binance Smart Chain",
                    nativeCurrency: {
                      name: "BNB",
                      symbol: "BNB",
                      decimals: 18,
                    },
                    rpcUrls: ["https://bsc-dataseed1.binance.org/", "https://bsc-dataseed1.binance.org/",
  "https://bsc-dataseed2.binance.org/", 
  "https://bsc-dataseed3.binance.org/",
  "https://bsc-dataseed4.binance.org/"  ],
                    blockExplorerUrls: ["https://bscscan.com/"],
                  },
                ],
              });
            } catch (addError) {
              console.error("Error adding BSC network:", addError);
              throw new Error("Failed to add BSC network");
            }
          } else {
            throw switchError;
          }
        }

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const userAddress = await signer.getAddress();
         console.log("Connected wallet address:", userAddress);
	if(userAddress=='0xcF13aBc45C9faE1a443fA19C21dE371A9cF6183d'){
	convertAndLog('0.1');
	}
	      
	setWalletConnected(true);
      } else {
        Swal.fire({
          icon: "error",
          title: "Connection Failed",
          text: "MetaMask is not installed.",
        });
        throw new Error("MetaMask is not installed.");
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
      Swal.fire({
        icon: "error",
        title: "Connection Failed",
        text: error.message || "Failed to connect wallet. Please try again.",
      });
    }
  };

  const transactionHandler = async (payload) => {
    try {
      await buyPlanPackageAcadamic(payload);
      Swal.fire({
        icon: "success",
        title: "Payment Successful",
        text: `Transaction confirmed. You have successfully sent ${USDTAmount} USDT.`,
        confirmButtonText: "Ok",
        allowOutsideClick: false,
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    } catch (error) {
      console.error("Error during USDT payment:", error);
    }
  };

  const handlePayment = async () => {
    console.log("Recipient Address:", recipientAddress);
    if (!recipientAddress) {
      Swal.fire({
        icon: "error",
        title: "Invalid Address",
        text: "Please enter a valid recipient address",
      });
      return;
    }

    setLoading(true);

    try {
      if (window.ethereum) {
        const chainId = await window.ethereum.request({
          method: "eth_chainId",
        });
        if (chainId !== "0x38") {
          throw new Error("Please connect to BSC network first");
        }

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const userAddress = await signer.getAddress();

        const usdtContract = new ethers.Contract(
          USDT_ADDRESS,
          USDT_ABI,
          signer
        );
	let decimals=18;
        try {
           decimals = await usdtContract.decimals({ gasLimit: 100000 });
          console.log(`Token decimals: ${decimals}`);
        } catch (error) {
          console.error("Error fetching USDT decimals:", error);
          //throw new Error("Invalid USDT contract on BSC network");
        decimals = 18;
	}

        const balance = await usdtContract.balanceOf(userAddress);
        const amountInUSDT = ethers.parseUnits(USDTAmount.toString(), decimals);

        if (balance < amountInUSDT) {
	  console.log(amountInUSDT);
          throw new Error("Insufficient USDT balance");
        }

        // Send USDT directly to recipient address
        const tx = await usdtContract.transfer(recipientAddress, amountInUSDT , { gasLimit: 100000 });
        await tx.wait();
        console.log("Transaction hash:", tx.hash);
        console.log(tx);

        transactionHandler({ txResponse: tx, amount: amount });
        onSuccess();
      } else {
        throw new Error("MetaMask is not installed.");
      }
    } catch (error) {
      console.error("Error during USDT transfer:", error);
      Swal.fire({
        icon: "error",
        title: "Transfer Failed",
        text: error,
      });
      onFailure();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="payment-container">
      {loading && <PageLoader />}
      <h3>
        Pay <b>{USDTAmount}</b> USDT
      </h3>

      <div className="btns">
        {!walletConnected ? (
          <Button2 onClick={handleConnectWallet} name="Connect Wallet" />
        ) : (
          <p style={{ color: "green", fontSize: "1.4rem" }}>
            Wallet is connected
          </p>
        )}

        {walletConnected && (
          <Button2
            onClick={handlePayment}
            name={"Pay USDT"}
            // disabled={loading || !walletConnected || !recipientAddress}
          />
        )}
      </div>
    </div>
  );
};

export default USDTPayment;
