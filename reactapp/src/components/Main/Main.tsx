import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './Main.css';
import PupperInfo from './PupperInfo/PupperInfo';
import PupperForm from "./PupperForm/PupperForm";
function Main() {
    const [watchedPupper,setWatchedPupper] = useState({age:-1,name:""});
    useEffect(
        ()=>{
            getRandomPupper()
        }
    ,[]);
    function getRandomPupper(){
        fetch("http://localhost:8080/pupper/")
            .then((responsePupper)=>responsePupper.json())
            .then((pupper)=>setWatchedPupper(pupper));
    }
    return (
        <>
        <header>
            <h1 className={"title_h1"}>PupperHub</h1>
        </header>
        <main>

            <PupperInfo pupper={watchedPupper}/>
            <PupperForm getRandomPupper={getRandomPupper}/>
        </main></>
    )
}

export default Main;
