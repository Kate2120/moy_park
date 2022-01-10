import React from 'react';
import styles from './header.module.scss';
import {Link} from "react-router-dom";
export const driversPage = '/drivers';
export const carsPage = '/cars';
function Menu() {
    return (
        <div className={styles.menu}>
            <ul>
                <li><Link to="/cars">Автомобили</Link></li>
                <li><Link to="/drivers">Водители</Link></li>
            </ul>
        </div>
    );
}

export default Menu;