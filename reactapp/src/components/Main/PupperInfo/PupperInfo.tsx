import { IoMdRefreshCircle } from "react-icons/io";
import React, { MouseEventHandler } from "react";
import "./PupperInfo.style.js";
import {
  NewPupperButton,
  PupperImage,
  PupperInfoDetails,
  PupperInfoSection,
} from "./PupperInfo.style.js";
import Utils from "Utils";

interface IPupperInfoProps {
  pupper: Pupper;
  getRandomPupper: MouseEventHandler<HTMLButtonElement>;
}
export default function PupperInfo(props: IPupperInfoProps) {
  return (
    <PupperInfoSection>
      <PupperInfoDetails>
        {" "}
        <NewPupperButton onClick={props.getRandomPupper}>
          {" "}
          <IoMdRefreshCircle color={Utils.GetCssVar("second-color")} />
        </NewPupperButton>
        {props.pupper.name}|{props.pupper.age}
      </PupperInfoDetails>
      <PupperImage
        src={`http://localhost:8080/pupper/${props.pupper.name}/image`}
      />
    </PupperInfoSection>
  );
}
