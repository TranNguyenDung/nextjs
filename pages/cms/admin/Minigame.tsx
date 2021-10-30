import { NextPage } from "next";
import CmsLayout from   "../../../layout/CmsLayout";
import styles from "./minigame.module.scss"

const Minigame: NextPage = () => {
    return(
        <CmsLayout main={<div className={styles.minigame}>MiniGame Content</div>} />
    );
};

export default Minigame;