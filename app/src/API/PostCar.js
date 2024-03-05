import axios from "axios";
import { SERVER_URL } from "../constants/common/constants";

async function PostCar(newCar) {
  try {
    await axios.post(SERVER_URL, newCar);
  } catch (err) {
    console.error(err.toJSON());
  }
}

export default PostCar;
