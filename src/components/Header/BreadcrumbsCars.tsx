import React from 'react';
import styles from './header.module.scss';
import {Link} from "react-router-dom";
import {faHome, faCar, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function BreadcrumbsCars() {
    return (
        <div className={styles.navigation}>
            <div className={styles.breadcrambs}>

                <ul>

                    <li><FontAwesomeIcon icon={faHome} /><Link to="/">Главная</Link></li>
                    <li><FontAwesomeIcon icon={faAngleRight} /></li>
                    <li><FontAwesomeIcon icon={faCar} /><Link to="">Автомобили</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default BreadcrumbsCars;