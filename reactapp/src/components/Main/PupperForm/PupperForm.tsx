import React, {MouseEventHandler, useEffect, useState} from 'react';
import logo from './logo.svg';
import './PupperForm.css';
interface Iprops{
    getRandomPupper:MouseEventHandler<HTMLButtonElement>
}
function PupperForm(props:Iprops) {
    return (<button onClick={props.getRandomPupper} className={"newPupper_button"}>new pupper 🐕 </button>);

}

export default PupperForm;
