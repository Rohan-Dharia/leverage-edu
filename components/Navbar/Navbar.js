import  styles from "./Navbar.module.css"; 
import React, { useState } from 'react';

export default function Navbar() {
    return(
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src="https://asset.brandfetch.io/idhRczzVps/idENk698Wh.svg" alt="Leverage Edu Logo"></img>
            </div>
            <div className={styles.navItems}>
                <a href="#">Study Abroad</a>
                <a href="#">Accommodation</a>
                <a href="#">Test Prep</a>
                <a href="#">Finance</a>
                <a href="#">Community</a>
                <a href="#">Products</a>
                <a href="#">More</a>
            </div>
            <div className={styles.rightIcons}>
                <img src="https://img.icons8.com/?size=100&id=HcIQmljj5Or3&format=png&color=000000" alt="description of image"></img>
                <img src="https://img.icons8.com/?size=100&id=43298&format=png&color=000000" alt="description of image"></img>
                <img src="https://img.icons8.com/?size=100&id=iVc75LcS3jho&format=png&color=000000" alt="description of image"></img>
            </div>
        </div>
    );
}
