import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open:true
};

const Sidemenu = createSlice({
  initialState,
  name: "Sidemenu",
  reducers: {
    setSidemenuToggle: (state) => {
       state.open= !state.open;
    },
    setSidemenuToggleOff: (state) => {
       state.open= false;
    },
  },
});

export const { setSidemenuToggle, setSidemenuToggleOff } = Sidemenu.actions;
export default Sidemenu.reducer;
