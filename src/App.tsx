import React from 'react';
import './App.css';
import Accordion from "./Component/Accordion/Accodion";

function App() {
    return (
        <div>
            <Hello/>
            <RetingStar/>
            <Accordion/>
        </div>
    );

}

function RetingStar() {
    return (
        <div><ComponentOneStar/>
            <ComponentOneStar/>
            <ComponentOneStar/>
            <ComponentOneStar/>
            <ComponentOneStar/>
        </div>
    );
}


function ComponentOneStar() {
    return (
        <div>STAR</div>
    );
}

function Hello() {
    return (
        <>Hello, this is new app component</>
    );
}


export default App;

