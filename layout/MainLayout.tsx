import React from 'react';
import styles from './MainLayout.module.scss'
import Image from "next/image"
import classnames from "classnames"
import { BiAbacus } from "react-icons/bi";


const MainLayout: React.FunctionComponent = ({ children }) => {
    // console.log("THIS IS " + {machildrenin});
    return <div className={styles.mainLayout}>
        <div className={styles.header}>
            <div className={styles.heardContent}>
                <div className={styles.logo_search}>
                    <div className={styles.logo}>
                        <Image src="https://www.stdio.vn/static/logo.svg"
                        width={40}
                        height={40}
                        alt="STIO logo"
                        unoptimized={true}/>
                    </div>            
                    <form>
                        <input type="text" name="name"  className={styles.Search} />
                    </form>
                    <BiAbacus color="#FAF" size={32} />
            </div>

                <div className={styles.buttonHD}>
                    <div className={styles.buttonHDChi}>PIXEL RULER</div>
                    <div className={styles.buttonHDChi2}>PISA RULER</div>
                    <div className={styles.buttonHDChi}>CONSTACT</div>                
                </div>
            </div>
        </div>

        <div className={styles.main}>{children}</div>

        <div className={styles.footer}>
            <div className={styles.menufooter}>
                <div className={styles.logo}>
                        <Image className={styles.Imagelogo} src="https://www.stdio.vn/static/logo.svg"
                        width={32}
                        height={32}
                        alt="STIO logo"
                        unoptimized={true}/>
                </div>

                <ul>
                    <li><h4>HOME</h4></li>
                    <li>Contact</li>
                </ul>
                <ul>
                    <li><h4>LINKS</h4></li>
                    <li>STDIO Training</li>
                    <li>STDIO Solutions</li>
                    <li>Bugs</li>
                    <li>FB Page</li>
                </ul>

                <ul>
                    <li><h4>POLICY</h4></li>
                    <li>Policy policy</li>
                    <li>Term of use</li>
                </ul>

                <ul>
                    <li><h4>STDIO CO., LTD</h4></li>
                    <li>30 Trinh Dinh Thao, Hoa Thanh ward, district Tan Phu, Ho Chi Minh city, Vietnam</li>
                    <li>+84 28.36205514</li>
                    <li>developer@stdio.vn</li>
                    <li>383/1 Quang Trung, ward 10, district Go Vap, Ho Chi Minh city</li>
                    <li>Business license number: 0311563559 issued by the Department of Planning and Investment of Ho Chi Minh City on February 23, 2012</li>
                </ul>
            </div>
            <div className={styles.copyr}>©STDIO, 2013 - 2021</div>
        </div>
    </div>;
}

export default MainLayout;