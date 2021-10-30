import React from 'react';
import styles from './MainLayout.module.scss'

interface IProps {
    main : React.ReactNode;
}

const MainLayout: React.FunctionComponent<IProps> = ({ main }) => {
    console.log("THIS IS " + {main});
    return <div className={styles.mainLayout}>
        <div className={styles.header}>header Content</div>
        <div className={styles.main}>{main}</div>
        <div className={styles.footer}>footer Content</div>
    </div>;
}

export default MainLayout;