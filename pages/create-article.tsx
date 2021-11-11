import axios from "axios";
import { NextPage } from "next";
import { useState } from "react";
import MainLayout from "../layout/MainLayout";
import {Storage} from "./storage";
interface IProps {}

const CreateArticle: NextPage<IProps> = () =>{
    //username tuyệt đối viết thường
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");

    return (
        <MainLayout>
            <input type="checkbox"/>
            <br />
            <input type ="text" value={title} onChange={(e)=>{setTitle(e.target.value.trim())}}/>
            <br />
            <input type ="text" value={content} onChange={(e)=>{setContent(e.target.value.trim())}}/>
            <br />
            <button onClick={()=>{
                const token = Storage.Cookie.get("token");
                if(!!!token) return;
                axios.post("https://training-api.stdio.vn/article",{
                    title,
                    content,
                    description: "Mô tả"
                },
                {
                    headers:{
                        Authorization : token,
                    },
                }).then((resp)=>{
                    console.log("--------------------------");
                    console.log(resp);
                })
                .catch((err)=>{
                    console.log(err);
                });
            }}>Login</button>
        </MainLayout>
    );
}

export default CreateArticle;