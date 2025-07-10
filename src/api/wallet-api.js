import axios from "axios";
import { backendConfig } from "../constants/content/MainContent";
import { getCurrentUser } from "../utils/TokenFunc";

const setApiURL = backendConfig.base;
 const token = getCurrentUser()?.token;

export async function buyPlanPackage(payload) {
  const response = await axios.post(`${setApiURL}/user/transaction/wallet/request`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}


export async function checkWithdrawEligibility(payload) {
  const response = await axios.post(`${setApiURL}/user/withdrawal-amount`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials:true
  });
  return response?.data;
}
export async function setWithdrawalTransaction(payload) {
  const response = await axios.post(`${setApiURL}/user/withdrawal-handle`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials:true
  });
  return response?.data;
}
