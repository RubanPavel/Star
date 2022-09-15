import React from 'react';
import './StyleCSS.css';

type TopCarsTypeComp = {
    CarsArray:Array<NewComponentCars>
}

type NewComponentCars = {
    id: number
    manufacturer:string
    model:string
}

export const CarsComponent = (props:TopCarsTypeComp) => {
    return(
        <>
            {props.CarsArray.map((newObjekt) =>{
                return(
                    <table  key={newObjekt.id}>
                        <tr className='tableNew'>
                            <td>{newObjekt.id}</td>
                            <td>{newObjekt.manufacturer}</td>
                            <td>{newObjekt.model}</td>
                        </tr>




                    </table>
                )
            })}


        </>

    )
}

