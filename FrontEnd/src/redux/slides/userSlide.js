import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  avatar: "",
  access_token: "",
  id: "",
};

export const userSlide = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const {
        name = "",
        email = "",
        phone = "",
        address = "",
        avatar = "",
        access_token = "",
        _id = "",
      } = action.payload;
      state.name = name ? name : state.name;
      state.email = email ? email : state.email;
      state.phone = phone ? phone : state.phone;
      state.address = address ? address : state.address;
      state.avatar = avatar ? avatar : state.avatar;
      state.access_token = access_token ? access_token : state.access_token;
      state.id = _id ? _id : state.id;
    },
    resetUser: (state) => {
      state.name = "";
      state.email = "";
      state.phone = "";
      state.address = "";
      state.avatar = "";
      state.access_token = "";
      state.id = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser, resetUser } = userSlide.actions;

export default userSlide.reducer;
