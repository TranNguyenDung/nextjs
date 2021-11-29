import React, { useEffect } from 'react';
import st from "./login.module.scss"

// Link ưu việt hơn the a
import Link from "next/link";
import { NextPage } from 'next';
import Button from '@mui/material/Button';

interface IProps {}// Dùng để Server truyền data xuống client
const Login: NextPage<IProps> = () => {
    
    const routeChange = () =>{ 
        console.log("123123");
    }
    return (
        <>
            <div className={st.container}>
                <div className={st.block}>
                    <div className={st.blockChild}>
                        {/* <div className={st.lableLogin}>Login</div> */}
                        <div className={st.lableEmail}>Email</div>
                        <input className={st.inputEmail} type="text"></input>
                        <div className={st.lablePassword}>Password</div>
                        <input className={st.inputPassword} type="password"></input>
                        <Button variant="outlined" className={st.btnLogin} onClick={routeChange}>Login</Button>
                    </div>
                </div>
            </div>               
        </>
    )
}

export default Login
