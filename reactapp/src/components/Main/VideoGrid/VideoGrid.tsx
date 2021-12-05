import { observer } from "mobx-react-lite";
import React, { MouseEventHandler, useContext } from "react";
import { PupperStoreContext } from "src/Contexts/PupperStoreContext";
import Utils from "src/Utils";
import * as Styled from "./VideoGrid.style.js";
import * as GeneralStyle from "src/GeneralStyle.style";
interface Iprops {
  selectedPupper: Pupper | undefined;
  setSelectedPupper: Function;
}
function VideoGrid(props: Iprops) {
  const pupperStore = useContext(PupperStoreContext);
  const selectedVidoes = pupperStore.videos?.filter(
    (vid) =>
      vid?.pupper.name === props.selectedPupper?.name || !props.selectedPupper
  );
  return (
    <Styled.StyledVideoGrid>
      {selectedVidoes?.map((video) => {
        return (
          <Styled.StyledVideoTile>
            <GeneralStyle.secondTitle>
              {video?.name && Utils.GetFilenameWithoutExtension(video?.name)}
            </GeneralStyle.secondTitle>
            <figure>
              <img
                width={100}
                src={
                  Utils.ResovleServerPath() +
                  "pupper/" +
                  video?.pupper?.name +
                  "/image"
                }
              />
            </figure>
            <code>
              {video?.seconds &&
                Utils.pointNotationToColon(
                  Utils.secondsDurationTostring(video?.seconds)
                )}
            </code>
          </Styled.StyledVideoTile>
        );
      })}
    </Styled.StyledVideoGrid>
  );
}

export default observer(VideoGrid);
