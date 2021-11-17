import { PupperStoreContext } from "src/Contexts/PupperStoreContext";
import React, { MouseEventHandler, useContext } from "react";
import { StyledPupperList } from "./PupperList.style.js";

interface Iprops {}
function PupperList(props: Iprops) {
  const pupperStore = useContext(PupperStoreContext);
  return (
    <StyledPupperList>
      {pupperStore.puppers?.map((pupper) => (
        <li>
          {pupper?.name} ({pupper?.age})
        </li>
      ))}
    </StyledPupperList>
  );
}

export default PupperList;
