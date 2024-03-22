import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getAllCars from "../API/GetAllCars";
import deleteCar from "../API/DeleteCar";
import postCar from "../API/PostCar";
import { message } from "antd";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (params) => await getAllCars(params)
);
export const deletedCar = createAsyncThunk(
  "cars/deleteCar",
  async function (id, { dispatch }) {
    await deleteCar(id);
    dispatch(fetchCars());
    message.success("car deleted");
  }
);
export const addCar = createAsyncThunk(
  "cars/addCar",
  async function (car, { dispatch }) {
    await postCar(car);
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
