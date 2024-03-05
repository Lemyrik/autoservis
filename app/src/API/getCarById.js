import axios from "axios";
import { SERVER_URL } from "../constants/common/constants";

async function getCarById(id) {
  const response = await axios.get(`${SERVER_URL}/${id}`);
  return response?.data;
}

export default getCarById;
