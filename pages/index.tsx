import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from './Home.module.scss';

import Flag from 'react-world-flags'

import { Gi3DGlasses,GiAbstract010 } from "react-icons/gi";
import { FcAdvertising } from "react-icons/fc";
import { evaluate, all } from 'mathjs';
import React from 'react';
import MainLayout from "../layout/MainLayout";
import Cookies, { get } from "js-cookie";
import Cookiess from 'cookies'
import { AppState } from 'react-native';
import { useSelector } from 'react-redux';

import {mySlice} from "../redux/mySlice";

const Home: NextPage = () => {
  // Server render => to client
  const me = useSelector((state:AppState) => state.me);

  return (
    <MainLayout >
        <div className={styles.container}>
          {/* <Test /> */}

          {me}

          <button onClick={()={
              dispatch(mySlice.action.update(123));
          }}>
            Click TD
          </button>

          <div>Bài học đầu tiên</div>


          <button onClick={()=>{
            Cookies.set(
              "token1",
              JSON.stringify({
                username:"234",
                password:"12334534"
              })
            );
            

            Cookies.set("token","abc");
            Cookies.set("username","tnguyendung.x1@gmail.com");
            Cookies.set("password","123456");
          }} className={styles.button}>Nhấn vào đây</button>

          <button onClick={()=>{
            localStorage.setItem("Game","123");// Max 5MB
            console.log(localStorage.getItem("Game"));
          }} className={styles.button}>Set Cookie local</button>

          <Flag code="704" height="32" />
          <button><Gi3DGlasses color="#F00" size={32} /></button> 
          <FcAdvertising color="#F00" size={50} />
          <FcAdvertising color="#F00" size={50} />
          {evaluate("3 + 2 * (6 + 1)")}
        </div>          
    </MainLayout>
  )
}

// Program On Server
export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("---------------------");
  //console.log(context.req.cookies);
  //console.log(context.res);

  //const cookiess = new ServerCookies(context.req,context.res);
  //cookiess.set("token","xyz");

  //context.res.setHeader("set-cookie",["tokent=123123124"]);
  return {
    props:{},
  };
}

export default Home


// locolStore : Lưu mãi luôn
// sectionStore: Hết hạn trong một lần làm việc
//localStorage.getItem(key)
//localStorage.setItem(key,value)
//localStorage.removeItem(key)
//....
//sectionStore.removeItem(key)
