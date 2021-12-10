import { observer } from "mobx-react-lite";
import React, { MouseEventHandler, useContext } from "react";
import { PupperStoreContext } from "src/Contexts/PupperStoreContext";
import { useParams } from "react-router-dom";
import Utils from "src/Utils";
//import Utils from "src/Utils";
import { StyledVideoView } from "./VideoView.style.js";

interface Iprops {}
function VideoView(props: Iprops) {
  const pupperStore = useContext(PupperStoreContext);
  const selectedVideo = pupperStore.selectedVideo;

  return (
    <StyledVideoView>
      <h1>{selectedVideo?.name}</h1>
      <video
        controls
        src={Utils.ResovleServerPath() + `video/${selectedVideo?.id}`}
      ></video>
    </StyledVideoView>
  );
}

export default observer(VideoView);
