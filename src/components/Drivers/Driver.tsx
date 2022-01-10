import React from 'react';
import styles from '../main.module.scss';
import IdDriver from "./IdDriver";
import NameDriver from "./NameDriver";
import RegistryDate from "./RegistryDate";
import DateBirth from "./DateBirth";
import StatusDriver from "./StatusDriver";
import ActionsDrivers from "./ActionsDrivers";

type Props = {
    [key: string]: string;
};

function Driver(props: Props) {
    return (
        <div className={styles.row}>
            <IdDriver id={props.id}/>
            <NameDriver name={props.name}/>
            <RegistryDate registry={props.registry}/>
            <DateBirth birth={props.birth}/>
            <StatusDriver status={props.status}/>
            <ActionsDrivers action={props.action}/>
        </div>
    );
}

export default Driver;