const safeGetStorageItem = (key, defaultValue = null) => {
  try {
    const value = sessionStorage.getItem(key) || localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultValue;
  } catch (e) {
    console.error(`Error accessing ${key}:`, e);
    return defaultValue;
  }
};

export const saveCurrentUser = (userId) => {
  try {
    sessionStorage.setItem("currentUser", JSON.stringify(userId));
  } catch (e) {
    console.error("Error saving current user:", e);
  }
};

export const saveToken = (userId, token, role) => {
    console.log({userId, token, role})
  const currentTokens = safeGetStorageItem("authTokens", {});
  currentTokens[userId] = { token, role };
  try {
    localStorage.setItem("authTokens", JSON.stringify(currentTokens));
  } catch (e) {
    console.error("Error saving token:", e);
  }
  saveCurrentUser(userId);
};

export const getToken = (userId) => {
  const currentTokens = safeGetStorageItem("authTokens");
  return currentTokens ? currentTokens[userId] : null;
};

export const getCurrentUser = () => {
  const currentUser = safeGetStorageItem("currentUser");
  return currentUser ? getToken(currentUser) : null;
};

export const removeToken = (userId) => {
  const currentTokens = safeGetStorageItem("authTokens", {});
  sessionStorage.removeItem("currentUser");
  if (currentTokens && currentTokens[userId]) {
    delete currentTokens[userId];
    try {
      localStorage.setItem("authTokens", JSON.stringify(currentTokens));
    } catch (e) {
      console.error("Error removing token:", e);
    }
  }
};
