//const axios = require("axios");
import { axios } from "../libs/custom-axios"

const API = "http://localhost:5000";
export const AuthAPI = {
    signUp: (name: String, username: String, password: String) => {
        return axios.post(`${API}/sign-up`, {
            name, email: username,password
        });

        // return axios({
        //     url: `${API}/sign-up`,
        //     method: 'post',
        //     data: {name, email: username,password}
        // });
    },

    login:(username: String, password: String) => {
        return axios.post(`${API}/login`,{
            email: username,password
        });

        // return axios({
        //     url: `${API}/login`,
        //     method: 'post',
        //     data: {email: username,password}
        // });
    }
}