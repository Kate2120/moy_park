import React from 'react';
import styles from '../main.module.scss';
type Props = {
    [key: string]: string;
};

let classStatus: string;
function StatusDriver(props: Props) {

    if(props.status === "Активный"){
        classStatus = styles.active;
    } else{
        if(props.status === "Не активный"){
            classStatus = styles.disactive;
        }
        else {
            if(props.status === "Заблокированный"){
                classStatus = styles.danger;
            }
        }
    }
    return (
        <div className={styles.blockStatusDriver}>
            <span className={classStatus}>
            {props.status}
                </span>
        </div>
    );
}

export default StatusDriver;