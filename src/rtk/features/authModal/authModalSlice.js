import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  open: false,
  render: "",
  email: "",
  phone: "",
  verification_code: "",
  password: "",
  rePassword: "",
};

export const authModalSlice = createSlice({
  name: "authModal",
  initialState,
  reducers: {
    setValues: (state, action) => {
      // {email: 'duzix@mailinator.com', password: 'Pa$$w0rd!'}
      let payload = action.payload;

      for (const property in payload) {
        state[`${property}`] = payload[property];
      }
    },
    toggleModal: (state) => {
      state.open = !state.open;
    },
    setRender: (state, action) => {
      state.render = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setValues, toggleModal, setRender} = authModalSlice.actions;

export const authModalReducer = authModalSlice.reducer;
