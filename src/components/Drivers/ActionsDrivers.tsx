import React from 'react';
import styles from '../main.module.scss';
type Props = {
    [key: string]: string;
};
function ActionsDrivers(props: Props) {
    return (
        <div className={styles.blockActionsDrivers}>
            {props.action}
        </div>
    );
}

export default ActionsDrivers;