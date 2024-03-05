import axios from "axios";
import { SERVER_URL } from "../constants/common/constants";

async function getAllCars(params) {
  const response = await axios.get(SERVER_URL, { params });
  return response?.data;
}

export default getAllCars;
