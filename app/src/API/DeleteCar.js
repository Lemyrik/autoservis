import axios from "axios";
import { SERVER_URL } from "../constants/common/constants";

async function deleteCar(userId) {
  try {
    await axios.delete(`${SERVER_URL}/${userId}`);
  } catch (err) {
    console.error(err);
  }
}

export default deleteCar;