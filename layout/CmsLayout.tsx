import React,{FC} from 'react';
import styles from "./CmsLayout.module.scss";

interface IProps{
    main : React.ReactNode;
}

const CmsLayout: FC<IProps> = ({main}) => {
    console.log("THIS IS " + {main});
    return <div className={styles.CmsLayout}>
            <div className={styles.header}>header Content</div>
            <div className={styles.sidebar}>sidebar Content</div>
            <div className={styles.content}>{main}</div>
        </div>
};

export default CmsLayout;