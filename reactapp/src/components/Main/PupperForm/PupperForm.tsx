import React, {MouseEventHandler, useEffect, useState} from 'react';
import logo from './logo.svg';
import './PupperForm.css';
interface Iprops{
    getRandomPupper:MouseEventHandler<HTMLButtonElement>
}
function PupperForm(props:Iprops) {
    return (
        <div>
            <button onClick={props.getRandomPupper} className={"newPupper_button"}>see new pupper 🐕 </button>
            <button className={"addNewPupper_button"}>+</button>
        </div>
    );

}

export default PupperForm;
