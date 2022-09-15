import React from 'react';
import './App.css';

import {CarsComponent} from "./Component/Map/UsedMapFile";

function App() {

    const topCars = [
        {id:1, manufacturer:'BMW', model:'m5cs'},
        {id:2, manufacturer:'Mercedes', model:'e63s'},
        {id:3, manufacturer:'Audi', model:'rs6'}
    ]

    return (
        <>
        <CarsComponent CarsArray={topCars} />
        </>
    )

}



export default App;

