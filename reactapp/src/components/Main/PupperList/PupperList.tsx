import {
  PupperStoreContext,
  PupperStoreProvider,
} from "src/Contexts/PupperStoreContext";
import React, { MouseEventHandler, useContext } from "react";
import * as styled from "./PupperList.style.js";
import Utils from "src/Utils";
import { observer } from "mobx-react-lite";
interface Iprops {
  selectedPupper: Pupper | undefined;
  setSelectedPupper: Function;
}

function PupperList(props: Iprops) {
  const pupperStore = useContext(PupperStoreContext);

  function onItemClick(e: React.MouseEvent) {
    const pupperName = e.currentTarget.getAttribute("data-pupper");

    if (pupperName !== props.selectedPupper?.name) {
      const newSelectedPupper = pupperStore.puppers?.find(
        (pup) => pup?.name === pupperName
      );
      newSelectedPupper && props.setSelectedPupper(newSelectedPupper);
    } else {
      props.setSelectedPupper(); //show all if clicked twice on pupper
    }
  }

  return (
    <styled.StyledPupperList>
      {pupperStore.puppers?.map((pupper) => (
        <styled.StyledLi
          isSelected={pupper?.name === props.selectedPupper?.name}
          data-pupper={pupper?.name}
          onClick={onItemClick}
        >
          <styled.StyledPupperImg
            src={
              Utils.ResovleServerPath() + "pupper/" + pupper?.name + "/image"
            }
          />
          <span className="pupperDetail_span">{pupper?.name}</span>{" "}
          <span className="pupperDetail_span">({pupper?.age})</span>
        </styled.StyledLi>
      ))}
    </styled.StyledPupperList>
  );
}

export default observer(PupperList);
