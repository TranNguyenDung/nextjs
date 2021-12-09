import { axios } from "../libs/custom-axios";

const API = "http://localhost:5000/users";

export const UserAPI = {
  getUsers: () => {
    return axios.get(`${API}`);
  },
  getUserById: (id: String) => {
    return axios.get(`${API}/${id}`);
  },
  updateUser: (id: String, name: String) => {
    return axios.put(`${API}/${id}`, { name });
  },
};
