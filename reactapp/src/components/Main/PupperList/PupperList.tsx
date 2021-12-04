import {
  PupperStoreContext,
  PupperStoreProvider,
} from "src/Contexts/PupperStoreContext";
import React, { MouseEventHandler, useContext } from "react";
import * as styled from "./PupperList.style.js";
import Utils from "src/Utils";
import { observer } from "mobx-react-lite";

function PupperList() {
  const pupperStore = useContext(PupperStoreContext);
  return (
    <styled.StyledPupperList>
      {pupperStore.puppers?.map((pupper) => (
        <li>
          <styled.StyledPupperImg
            src={
              Utils.ResovleServerPath() + "pupper/" + pupper?.name + "/image"
            }
          />
          <span className="pupperDetail_span">{pupper?.name}</span>{" "}
          <span className="pupperDetail_span">({pupper?.age})</span>
        </li>
      ))}
    </styled.StyledPupperList>
  );
}

export default observer(PupperList);
