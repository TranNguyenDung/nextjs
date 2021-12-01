import React, { useEffect, useState } from 'react';
import st from "./login.module.scss"

// Link ưu việt hơn the a
import Link from "next/link";
import { NextPage } from 'next';
import Button from '@mui/material/Button';
import { AuthAPI } from '../../apis/authAPI';
const axios = require("axios");
import {Storage} from "../../libs/storage";

interface IProps {}// Dùng để Server truyền data xuống client
const SignUpPage: NextPage<IProps> = () => {
    const [name, setName] = useState<any>('');
    const [email, setEmail] = useState<any>('');
    const [password, setPassword] = useState<any>('');

    const clickSignUp = () =>{ 
        console.log(name + ":"+ email + ":"+ password);
        AuthAPI.signUp(name,email,password).then((resp)=>{
            console.log(resp);
        }).catch((err)=>{
            console.log(err);
        })
    }

    return (
        <>
            <div className={st.container}>
                <div className={st.block}>
                    <div className={st.blockChild}>
                        {/* <div className={st.lableLogin}>Login</div> */}
                        <div className={st.lableEmail}>Name</div>
                        <input className={st.inputEmail} type="text" value={name}  onChange={(e)=>{setName(e.target.value.trim());}}></input>
                        <div className={st.lableEmail}>Email</div>
                        <input className={st.inputEmail} type="text" value={email} onChange={(e)=>{setEmail(e.target.value.trim());}}></input>
                        <div className={st.lablePassword}>Password</div>
                        <input className={st.inputPassword} type="password" value={password}  onChange={(e)=>{setPassword(e.target.value.trim());}}></input>
                        <Button variant="outlined" className={st.btnLogin} onClick={clickSignUp}>SignUp</Button>
                    </div>
                </div>
            </div>               
        </>
    )
}

export default SignUpPage
