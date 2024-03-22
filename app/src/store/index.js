import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./carSlice";
import cardReducer from "./cardSlice"

export default configureStore({
  reducer: {
    cars: carReducer,
    card: cardReducer,
  },
});
