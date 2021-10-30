import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from './Home.module.scss';

import Flag from 'react-world-flags'

import { Gi3DGlasses,GiAbstract010 } from "react-icons/gi";
import { FcAdvertising } from "react-icons/fc";
import { evaluate, all } from 'mathjs';
import React from 'react';
import MainLayout from "../layout/MainLayout";


const Home: NextPage = () => {
  return (
    <MainLayout 
      main={
        <div className={styles.container}>
          <div>Bài học đầu tiên</div>
          <button  className={styles.button}>Nhấn vào đây</button>
          <Flag code="704" height="32" />
          <button><Gi3DGlasses color="#F00" size={32} /></button> 
          <FcAdvertising color="#F00" size={50} />
          <FcAdvertising color="#F00" size={50} />
          {evaluate("3 + 2 * (6 + 1)")}
        </div>        
      }
    />
  )
}

export default Home
