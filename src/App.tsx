import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import React from 'react';
import Header from "./components/Header/Header";
import Cars from "./components/Cars/Cars";
import Drivers from "./components/Drivers/Drivers";
import Home from "./components/Home/Home";
import { driversPage, carsPage } from './components/Header/Menu';


function App() {
    return (
        <>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path={carsPage} element={<Cars/>}/>
                    <Route path={driversPage} element={<Drivers/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
