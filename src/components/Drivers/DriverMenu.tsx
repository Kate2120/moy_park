import React from 'react';
import styles from '../main.module.scss';
import IdDriver from "./IdDriver";
import NameDriver from "./NameDriver";
import RegistryDate from "./RegistryDate";
import DateBirth from "./DateBirth";
import StatusDriver from "./StatusDriver";
import ActionsDrivers from "./ActionsDrivers";
let itemsMenuDriver = ["ID", "Полное имя", "Дата регистрации", "Дата рождения", "Статус", "Действия"];

function DriverMenu() {
    return (
        <div className={styles.row}>
            <IdDriver id={itemsMenuDriver[0]}/>
            <NameDriver name={itemsMenuDriver[1]}/>
            <RegistryDate registry={itemsMenuDriver[2]}/>
            <DateBirth birth={itemsMenuDriver[3]}/>
            <StatusDriver status={itemsMenuDriver[4]}/>
            <ActionsDrivers action={itemsMenuDriver[5]}/>
        </div>
    );
}

export default DriverMenu;