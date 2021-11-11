import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from './Home.module.scss';


import Flag from 'react-world-flags'
import { Gi3DGlasses,GiAbstract010 } from "react-icons/gi";
import { FcAdvertising } from "react-icons/fc";
import { evaluate, all } from 'mathjs';

import React, { useEffect } from 'react';
import MainLayout from "../layout/MainLayout";
import { get } from "lodash";

//npm install react-redux
//npm install @reduxjs/toolkit
//npm install next-redux-wrappe
//npm install js-cookie next-cookies
//import Cookies from 'js-cookie'
import Cookies from "js-cookie";

// Cookie
//$ npm install cookies
var ServerCookies = require("cookies");

// redux
import { AppState } from "../redux/store";
import { mySlice } from "../redux/mySlice";
import { useDispatch, useSelector } from "react-redux";
import Test from "../components/Test";
import Products from './products';

// Link ưu việt hơn the a
import Link from "next/link";

import Head from "next/head";


interface IProps {}// Dùng để Server truyền data xuống client
const Home: NextPage<IProps> = () => {
  // Server render => to client
  const me = useSelector((state: AppState) => state.me);
  const dispatch = useDispatch();


  return (
    <>
    <React.Fragment>
    <MainLayout >
        <div className={styles.container}>
          {/* ----------------------------------------------------- */}
          {/* Redux */}
          <Test />
          {me}
          {/* onClick={()={dispatch(mySlice.action.update(123));}} */}
          <button onClick={()=>{
            dispatch(mySlice.actions.update(me + 1));
            console.log("Click TD *_*");
          }}>Click TD</button>

          {/* ----------------------------------------------------- */}
          {/* Cookie */}
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
          }} className={styles.button}>Nhấn vào đây để set cookie</button>

          {/* ----------------------------------------------------- */}
          {/* Local store */}
          <button onClick={()=>{
            localStorage.setItem("Game","123");// Max 5MB
            console.log(localStorage.getItem("Game"));
          }} className={styles.button}>Set Cookie local</button>


          {/* ----------------------------------------------------- */}
          {/* Image / Icon / calculator */}
          <Flag code="704" height="32" />
          <button><Gi3DGlasses color="#F00" size={32} /></button> 
          <FcAdvertising color="#F00" size={50} />
          <FcAdvertising color="#F00" size={50} />
          {evaluate("3 + 2 * (6 + 1)")}

          {/* ----------------------------------------------------- */}
          {/* Link page */}
          {/* <a href="./contat">Contact</a> */}
          <Link href="https://thientong.com/">
            <a>Contact page</a>
          </Link>

          {/* ----------------------------------------------------- */}
          {/* SSR */}
          

          {/* Chền nội dung / html */}

           {/* <div className={styles.content}>
          {article.content}
            </div> */}
          {/* <div className={styles.content} dangerouslySetInnerHTML={{ __html: article.content }}></div> */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-52045105-1"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-52045105-1');
      </script> */}

            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-52045105-1"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-52045105-1');`,
                }}
            ></script>

        {/* Convert code */}
        {/* <ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" />;
        <ins
            className="adsbygoogle"
            style={{
                display: 'inline-block',
                width: '300px',
                height: '250px',
            }}
        />; */}
          
        {/* Gép 2 style vào 1 futter */}
      {/* className={classnames(styles.button, styles.likes)}
      className={[styles.button, styles.likes].join(" ")} */}
      
      {/* <div className={classnames(styles.searchBox, {[styles.visible]: visibleOnMobile,})}> */}
      {/* <div className={classnames(styles.searchBox, visibleOnMobile ? styles.visible : {})}></div> */}

        </div>          
    </MainLayout>      
    </React.Fragment>    
    
    </>


  )
}

// Program On Server
export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("---------------------");
  //console.log(context.req.cookies);
  //console.log(context.res);
  const cookies = new ServerCookies(context.req,context.res);
  //cookies.set("token","xyz");




  //context.res.setHeader("set-cookie",["tokent=123123124"]);
  return {
    // Server có thể build web rồi mới trả xuống cho Client => lợi ích cho google tìm kiếm, kinh doanh
    // Bất lợi. server chạy nhiều chường trình 
    props:{},// Server đẫy props cho client qua props
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
