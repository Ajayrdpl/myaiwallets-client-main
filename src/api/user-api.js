import axios from "axios";
import { backendConfig } from "../constants/content/MainContent";
import { getCurrentUser } from "../utils/TokenFunc";

const userApi = backendConfig.base;
const adminApi = backendConfig.base + "/admin";
 const token = getCurrentUser()?.token;

export async function getUserInfo() {
  const response = await axios.get(`${userApi}/user/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data?.user;
}
export async function getAdminInfo() {
  const response = await axios.get(`${userApi}/admin/admin`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data?.user;
}

export async function raiseSupportRequest(payload) {
  const response = await axios.post(
    `${userApi}/user/support-request`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    }
  );
  return response?.data;
}
export async function getComplainHistory() {
  const response = await axios.get(`${userApi}/user/support-messages`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function getUserTeamAMembers() {
  const response = await axios.get(`${userApi}/user/team-a`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}
export async function getUserTeamBMembers() {
  const response = await axios.get(`${userApi}/user/team-b`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}
export async function getUserTeamCMembers() {
  const response = await axios.get(`${userApi}/user/team-c`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}
export async function getLevelIncomes() {
  const response = await axios.get(`${userApi}/user/level-income-reports`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

const apiURL = backendConfig.base + "/user";
export async function getSelfIncomeHistory() {
  const response = await axios.get(`${apiURL}/self-income-history`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}
export async function getInvestmentHistory() {
  const response = await axios.get(`${apiURL}/investment-history`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}
export async function getWithdrawalHistory() {
  const response = await axios.get(`${apiURL}/withdrawal-history`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}
export async function getReferralHistory() {
  const response = await axios.get(`${apiURL}/referral-history`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}
export async function updateUserProfile(payload) {
  const response = await axios.put(`${userApi}/user/update-profile`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data?.user;
}
export async function getAllBanners() {
  const response = await axios.get(`${adminApi}/banner/get-banner`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

// api/admin/banner/get-find

export async function getUserRankRewardDetails() {
  const response = await axios.get(`${apiURL}/rank-leaderboard`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}
export async function sendWithdrawalOTP() {
  const response = await axios.get(`${apiURL}/send-otp`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}


export async function getNoticeUpdates() {
  const response = await axios.get(`${apiURL}/survey/get-user-history`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}


export async function foundadd(payload) {
  try {
    const response = await axios.post(`${apiURL}/transaction/investment/manual`, payload, {
   
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });
    
    return response?.data;
  } catch (error) {
    return error?.response.data;
  }
}

export async function sendPaymentResponse(paymentData, token) {
  const response = await axios.post(
    `${apiURL}/save-transaction`,
    paymentData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }
  );
  return response?.data;
}