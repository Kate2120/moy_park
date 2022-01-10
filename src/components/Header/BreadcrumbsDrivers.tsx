import React from 'react';
import styles from './header.module.scss';
import {Link} from "react-router-dom";
import {faHome, faUser, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function BreadcrumbsDrivers() {
    return (
        <div className={styles.navigation}>
            <div className={styles.breadcrambs}>

                <ul>

                    <li><FontAwesomeIcon icon={faHome} /><Link to="/">Главная</Link></li>
                    <li><FontAwesomeIcon icon={faAngleRight} /></li>
                    <li><FontAwesomeIcon icon={faUser} /><Link to="">Водители</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default BreadcrumbsDrivers;