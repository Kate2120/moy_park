import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import React, { useState } from 'react';
import Header from "./components/Header/Header";
import Cars from "./components/Cars/Cars";
import Drivers from "./components/Drivers/Drivers";
import Home from "./components/Home/Home";
import { driversPage, carsPage } from './components/Header/Menu';
import Modal from "./components/Drivers/Modal";
import { useSelector } from "react-redux";



function App() {
    const store = useSelector(store => store);
    console.log(store);
    const [modalActive, setModalActive] = useState(false);
    return (
        <>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path={carsPage} element={<Cars/>}/>
                    <Route path={driversPage} element={<Drivers/>}/>
                </Routes>
                <Modal active={modalActive} setActive={setModalActive}/>
            </Router>
        </>
    );
}

export default App;
