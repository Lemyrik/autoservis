import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import putCar from "../API/putCars";
import { message } from "antd";
import getCarById from "../API/getCarById";

export const fetchCar = createAsyncThunk(
  "card/fetchCar",
  async (id) => await getCarById(id)
);
export const updateCar = createAsyncThunk(
  "card/updateCar",
  async function (car) {
    await putCar(car);
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
