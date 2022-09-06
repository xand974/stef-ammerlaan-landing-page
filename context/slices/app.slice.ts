import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AppType = {
  loading: boolean;
};

const initialState: AppType = {
  loading: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    SET_LOADING: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export default appSlice.reducer;
export const { SET_LOADING } = appSlice.actions;
