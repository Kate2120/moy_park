import React from 'react';
import styles from '../main.module.scss';
type Props = {
    [key: string]: string;
};
function DateBirth(props: Props) {
    return (
        <div className={styles.blockDateBirth}>
            {props.birth}
        </div>
    );
}

export default DateBirth;