import { configureStore } from "@reduxjs/toolkit";
import userInfoSlice from "./slice/UserInfoSlice";
import Sidemenu from "./slice/feature-sidemenu";

const SsStore = configureStore({
  reducer: {
    userInfo: userInfoSlice,
    Sidemenu: Sidemenu,
  },
});

export default SsStore;
