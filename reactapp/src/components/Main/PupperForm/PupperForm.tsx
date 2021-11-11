import React, { MouseEventHandler } from "react";
import { AddPupperButton } from "./PupperForm.style.js";
import { FaPlus } from "react-icons/fa";

interface Iprops {}
function PupperForm(props: Iprops) {
  return (
    <div>
      <AddPupperButton className={"addNewPupper_button"}>
        <FaPlus color="white" size={"100%"} />
      </AddPupperButton>
    </div>
  );
}

export default PupperForm;
