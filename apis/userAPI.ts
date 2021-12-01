import { axios } from "../libs/custom-axios";

const API = "http://localhost:5000//users";

export const UserAPI = {
    getUsers:() => {
        return axios.get(`${API}`);
    }
}