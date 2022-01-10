import React from 'react';
import BreadcrumbsDrivers from "../Header/BreadcrumbsDrivers";
import styles from '../main.module.scss';
import DriverMenu from "./DriverMenu";
import Driver from "./Driver";
import AddButton from "./AddButton";
let dataDrivers: Array<Props> = [
    {
        id: "1",
        name: "Петров Иван Иванович",
        registry: "15.07.2021",
        birth: "02.04.1985",
        status: "Активный",
        action: "Выбрать",
    },
    {
        id: "2",
        name: "Сидоров Павел Александрович",
        registry: "25.02.2021",
        birth: "30.01.1970",
        status: "Заблокированный",
        action: "Выбрать",
    },
    {
        id: "3",
        name: "Иванов Василий Иванович",
        registry: "15.06.2021",
        birth: "04.09.1980",
        status: "Не активный",
        action: "Выбрать",
    },
];

type Props = {
    [key: string]: string;
}
function Drivers() {
    return (
        <><BreadcrumbsDrivers/>
            <div className={styles.body}>

                <div className={styles.container}>

                    <h2>Данные о водителях</h2>
                    <AddButton/>
                    <DriverMenu/>
                    {dataDrivers.map(driver => {
                        return (<Driver id={driver.id} name={driver.name} registry={driver.registry} birth={driver.birth} status={driver.status} action={driver.action}/>)
                    })}

                </div>
            </div>
        </>
    );
}

export default Drivers;
