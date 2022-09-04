import React from 'react';
import './App.css';
import Accordion from "./Component/Accordion/Accodion";
import {RatingStar} from "./Component/Rating/Rating";

function App() {

    return (
        <div>
            <Hello title={'Hello'}/>
            <Hello title={'Hello, this is new app component'}/>
            <Accordion titleValue = {'Mеню'} collapsed = {true}/>
            <Accordion titleValue = {'Цена'} collapsed = {false}/>
            <RatingStar value={1}/>
            <RatingStar value={2}/>
            <RatingStar value={3}/>
            <RatingStar value={4}/>
            <RatingStar value={5}/>


        </div>
    );

}

type TitleHelloPropsType = {
    title: string
}


class TitleHelloProps {
}

function Hello(props:TitleHelloPropsType) {
    return (
        <div>{props.title}</div>
    );
}


export default App;

