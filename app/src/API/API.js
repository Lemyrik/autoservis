import axios from "axios";
import { SERVER_URL } from "../constants/common/constants";

class ApiClient {
  constructor() {
    this.serverUrl = SERVER_URL;
  }

  async getAllCars(params) {
    const response = await axios.get(this.serverUrl, { params });
    return response?.data;
  }
  async deleteCar(userId) {
    const response = await axios.delete(`${this.serverUrl}/${userId}`);
    return response?.data;
  }
  async getCarById(id) {
    const response = await axios.get(`${this.serverUrl}/${id}`);
    return response?.data;
  }
  async postCar(newCar) {
    const response = await axios.post(this.serverUrl, newCar);
    return response?.data;
  }
  async putCar(editedCar) {
    const response = await axios.put(
      `${this.serverUrl}/${editedCar.id}`,
      editedCar
    );
    return response?.data;
  }
}

const apiClientInstance = new ApiClient();

export default apiClientInstance;
