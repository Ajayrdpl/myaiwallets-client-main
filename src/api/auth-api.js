import axios from "axios";
import { backendConfig } from "../constants/content/MainContent";
import { getCurrentUser } from "../utils/TokenFunc";

const loginApiBaseAUrl = backendConfig.base;
 const token = getCurrentUser()?.token;

export async function loginWithWallet(payload) {
  const response = await axios.post(`${loginApiBaseAUrl}/wallet/login`, payload, {
    withCredentials: true,
  });
  return response?.data;
}
export async function registerWithWallet(payload) {
  const response = await axios.post(
    `${loginApiBaseAUrl}/wallet/register`,
    payload,
    {
      withCredentials: true,
    }
  );
  return response?.data;
}

export async function loginWithEmailAdminApi(payload) {
  const response = await axios.post(`${loginApiBaseAUrl}/admin/login`, payload, {
    withCredentials: true,
  });
  return response?.data;
}