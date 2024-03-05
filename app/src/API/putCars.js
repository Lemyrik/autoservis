import axios from "axios";
import { SERVER_URL } from "../constants/common/constants";

async function putCar(editedCar) {
  const response = await axios.put(`${SERVER_URL}/${editedCar.id}`, editedCar);
  return response?.data;
}

export default putCar;