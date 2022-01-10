import React from 'react';
import styles from './header.module.scss';
import Menu from './Menu';
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <Link to="/"><img src="images/logo.svg" alt="logo"/></Link>
                <Menu/>
            </div>
        </div>
    );
}

export default Header;
