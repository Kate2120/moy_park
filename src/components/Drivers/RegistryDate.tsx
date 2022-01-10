import React from 'react';
import styles from '../main.module.scss';
type Props = {
    [key: string]: string;
};
function RegistryDate(props: Props) {
    return (
        <div className={styles.blockRegistry}>
            {props.registry}
        </div>
    );
}

export default RegistryDate;