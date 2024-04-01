import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import apiClientInstance from "../API/API";
export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (params) => await apiClientInstance.getAllCars(params)
);
export const deletedCar = createAsyncThunk(
  "cars/deleteCar",
  async function (id, { dispatch }) {
    await apiClientInstance.deleteCar(id);
    dispatch(fetchCars());
    message.success("car deleted");
  }
);
export const addCar = createAsyncThunk(
  "cars/addCar",
  async function (car, { dispatch }) {
    await apiClientInstance.postCar(car);
    dispatch(fetchCars());
    message.success("car added");
  }
);
const carSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    loading: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCars.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.loading = false;
      state.cars = action.payload;
    });
    builder.addCase(fetchCars.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default carSlice.reducer;
