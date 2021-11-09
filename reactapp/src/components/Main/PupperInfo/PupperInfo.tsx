import React from 'react';
import './PupperInfo.css';

type Pupper = {
    age:number,
    name:string

}
interface IPupperInfoProps{
    pupper:Pupper
}
export default function PupperInfo(props:IPupperInfoProps) {
    return (

        <section className={"pupperInfo_section"}>

            <div>
                {props.pupper.name}|
                {props.pupper.age}
            </div>
        </section>
    );
}
