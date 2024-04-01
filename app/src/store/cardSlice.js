import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import apiClientInstance from "../API/API";

export const fetchCar = createAsyncThunk(
  "card/fetchCar",
  async (id) => await apiClientInstance.getCarById(id)
);
export const updateCar = createAsyncThunk(
  "card/updateCar",
  async function (car) {
    await apiClientInstance.putCar(car);
    message.success("car updated");
  }
);

const cardSlice = createSlice({
  name: "card",
  initialState: {
    car: [],
    loading: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCar.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCar.fulfilled, (state, action) => {
      state.loading = false;
      state.car = action.payload;
    });
    builder.addCase(fetchCar.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default cardSlice.reducer;
