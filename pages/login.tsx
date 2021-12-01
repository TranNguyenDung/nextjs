import axios from "axios";
import { NextPage } from "next";
import { useState } from "react";
import MainLayout from "../layout/MainLayout";
import {Storage} from "../libs/storage";
interface IProps {}

const Contact: NextPage<IProps> = () =>{
    //username tuyệt đối viết thường
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    return (
        <MainLayout>
            <input type ="text" value={username} onChange={(e)=>{setUsername(e.target.value.trim())}}/>
            <br />
            <input type ="password" value={password} onChange={(e)=>{setPassword(e.target.value.trim())}}/>
            <br />
            <button onClick={()=>{
                console.log(username);
                console.log(password);
                axios.post("https://training-api.stdio.vn/login",{
                    username,
                    password
                }).then((resp)=>{
                    console.log(resp.data);
                    console.log(resp.data.payload.access_token);
                    Storage.Cookie.set("token",resp.data.payload.access_token);
                })
                .catch((err)=>{
                    console.log(err);
                });
            }}>Login</button>
        </MainLayout>
    );
}

export default Contact;