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

            <div className={"pupperInfo_div"}>
                {props.pupper.name}|
                {props.pupper.age}

            </div>
        <img src={`http://localhost:8080/pupper/${props.pupper.name}/image`}/>
        </section>
    );
}
