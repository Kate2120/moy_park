import React from 'react';
import styles from '../main.module.scss';
type Props = {
    [key: string]: string;
};
function IdDriver(props: Props) {
    return (
        <div className={styles.blockId}>
            {props.id}
        </div>
    );
}

export default IdDriver;