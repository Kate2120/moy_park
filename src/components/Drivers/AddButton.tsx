import React from 'react';
import styles from '../main.module.scss';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function AddButton() {
    return (
        <div className={styles.rowAdd}>
            <div className={styles.add} title="Добавить нового водителя">
                <FontAwesomeIcon icon={faPlus}/>
            </div>
        </div>
    );
}

export default AddButton;