import React from "react";

type PropsStarType ={
  value: number
}

export function RatingStar(props: PropsStarType) {

    if (props.value === 1) {
        return (
            <div>
                <ComponentOneStar selected={true}/>
                <ComponentOneStar selected={false}/>
                <ComponentOneStar selected={false}/>
                <ComponentOneStar selected={false}/>
                <ComponentOneStar selected={false}/>
            </div>
        );
    }
    if (props.value === 2) {
        return (

            <div>
                <ComponentOneStar selected={true}/>
                <ComponentOneStar selected={true}/>
                <ComponentOneStar selected={false}/>
                <ComponentOneStar selected={false}/>
                <ComponentOneStar selected={false}/>
            </div>
        );
    }
    if (props.value === 3) {
        return (
            <div>
                <ComponentOneStar selected={true}/>
                <ComponentOneStar selected={true}/>
                <ComponentOneStar selected={true}/>
                <ComponentOneStar selected={false}/>
                <ComponentOneStar selected={false}/>
            </div>
        );
    }
    if (props.value === 4) {
        return (
            <div>
                <ComponentOneStar selected={true}/>
                <ComponentOneStar selected={true}/>
                <ComponentOneStar selected={true}/>
                <ComponentOneStar selected={true}/>
                <ComponentOneStar selected={false}/>
            </div>
        );
    }
    if (props.value === 5) {
        return (
            <div>
                <ComponentOneStar selected={true}/>
                <ComponentOneStar selected={true}/>
                <ComponentOneStar selected={true}/>
                <ComponentOneStar selected={true}/>
                <ComponentOneStar selected={true}/>
            </div>
        );
    } else {
        return (
            <div>
                <ComponentOneStar selected={false}/>
                <ComponentOneStar selected={false}/>
                <ComponentOneStar selected={false}/>
                <ComponentOneStar selected={false}/>
                <ComponentOneStar selected={false}/>
            </div>
        );

    }

}

type TypeComponentOneStarProps = {
    selected: boolean;
}

function ComponentOneStar(props: TypeComponentOneStarProps) {
    if (props.selected === true) {
        return <span><b>STAR </b></span>
    }
    return (
        <span>STAR </span>
    );
}