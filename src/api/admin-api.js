import axios from "axios";
import { backendConfig } from "../constants/content/MainContent";
import { getCurrentUser } from "../utils/TokenFunc";

const apiURL = backendConfig.base + "/admin";
const token = getCurrentUser()?.token;

export async function getPendingComplainHistory() {
  const response = await axios.get(`${apiURL}/support-in-process`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function approveComplainRequest(id) {
  const response = await axios.post(
    `${apiURL}/support/status/${id}`,
    { status: "accept" },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    }
  );
  return response;
}
export async function rejectComplainRequest(id) {
  const response = await axios.post(
    `${apiURL}/support/status/${id}`,
    { status: "reject" },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    }
  );
  return response;
}

export async function getAllUserList() {
  const response = await axios.get(`${apiURL}/all-users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}
export async function getTotalIncome() {
  const response = await axios.get(`${apiURL}/total-incomes-count`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function userStatusToggle(id) {
  const response = await axios.get(`${apiURL}/user-block/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response;
}
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
export async function getAllBanners() {
  const response = await axios.get(`${apiURL}/banner/get-banner`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}
export async function createOrUpdateBanner(payload) {
  const response = await axios.post(`${apiURL}/banner/create-update`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}
export async function deleteBanner(id) {
  const response = await axios.get(`${apiURL}/upload-banner/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function addNoticeUpdates(payload) {
  const response = await axios.post(`${apiURL}/survey/create`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}
export async function getNoticeUpdates() {
  const response = await axios.get(`${apiURL}/survey/get-admin-history`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}
export async function deleteNoticeUpdates(id) {
  const response = await axios.delete(`${apiURL}/survey/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function getAllLevelIncomes() {
  const response = await axios.get(`${apiURL}/level-income-history`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function approveWithdrawal(payload) {
  const response = await axios.post(`${apiURL}/approve-withdrawal`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function rejectWithdrawal(payload) {
  const response = await axios.post(`${apiURL}/reject-withdrawal`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

