import { observer } from "mobx-react-lite";
import React, { MouseEventHandler, useContext } from "react";
import { PupperStoreContext } from "src/Contexts/PupperStoreContext";
import Utils from "src/Utils";
import * as Styled from "./VideoGrid.style.js";
import * as GeneralStyle from "src/GeneralStyle.style";
interface Iprops {}
function VideoGrid(props: Iprops) {
  const pupperStore = useContext(PupperStoreContext);
  return (
    <Styled.StyledVideoGrid>
      {pupperStore.videos?.map((video) => {
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
