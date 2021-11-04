import { NextPage } from "next";
import React, { useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import Styles from "./pissaRuler.module.scss"
import axios from "axios";

interface IProps {}


const PissaRuler:NextPage<IProps> = () => {
    useEffect(()=>{
        axios
            .get("https://jsonplaceholder.typicode.com/posts").then((resp)=>{
            //.get("http://localhost:3000/pissaRuler").then((resp)=>{
                console.log(resp.data);
            }).catch((err)=>{});
    },[])
    return (
    <MainLayout> 
        <div className={Styles.PissaRuler}> 
            <div className={Styles.banner}>
                <div className={Styles.bannerleft}>
                    nội dung sdfsdfsdf
                </div>
                <div className={Styles.bannerright}>
                    image ádasdasdasd
                </div>
            </div>
            <div className={Styles.content}>
                Mô tả
            </div>
        </div>
    </MainLayout>
    );
}

export default PissaRuler;