import React from 'react';
import styles from '../main.module.scss';
type Props = {
    [key: string]: string;
};
function NameDriver(props: Props) {
    return (
        <div className={styles.blockName}>
            {props.name}
        </div>
    );
}

export default NameDriver;