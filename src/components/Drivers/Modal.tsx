import React from 'react';
import styles from '../main.module.scss';
interface modalProps{
    active: boolean,
    setActive: Function,
}

function Modal(props: modalProps) {
   
    return (
        <div className={props.active ? ".backModal.active"  : ".backModal"} onClick={() => props.setActive(false)}>
            <div className={styles.modalWindow} onClick={event => event.stopPropagation()}>

            </div>
        </div>
    );
}

export default Modal;