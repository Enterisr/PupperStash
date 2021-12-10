import React from "react";
import { useNavigate } from "react-router-dom";
import PuppersStore from "src/Stores/PuppersStore";
import { PupperStoreContext } from "src/Contexts/PupperStoreContext";
import { observer } from "mobx-react-lite";
function useNavigateToVideo() {
  const pupperStore = React.useContext(PupperStoreContext);

  const navigate = useNavigate();
  React.useEffect(() => {
    function handleBack() {
      pupperStore.setSelectedVideo && pupperStore.setSelectedVideo(null);
    }
    window.addEventListener("popstate", handleBack);
  }, []);
  React.useEffect(() => {
    if (pupperStore.selectedVideo) {
      navigate(`/video/${pupperStore.selectedVideo.id}`, { replace: false });
    } else {
      if (window.location.pathname !== "/") navigate("/", { replace: false });
    }
  }, [pupperStore.selectedVideo, navigate]);
}

export default useNavigateToVideo;
