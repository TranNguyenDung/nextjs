import CmsLayout from   "../../../layout/CmsLayout";
import styles from "./index.module.scss"
import React from 'react';
import { NextPage } from "next";

const Index: NextPage = () => {
    return(
        <CmsLayout 
            main={
                <div className={styles.index}>
                     <div>Bài học đầu tiên</div>
                     <div>Bài học đầu zxczxczxczxbzcbzctiên</div>
                     <div>Bài học đầu tiên</div>
                     <div>Bài học đầu tiên</div>
                     <div>Bài học đầu tiên</div>
                     <div>Bài học đầu tiên</div>
                     <div>Bài học đầu tiên</div>
                     <div>Bài học đầu tiên</div>
                     <div>Bài học đầu tiên</div>
                </div>
                
            }
        />
    );
};

export default Index;