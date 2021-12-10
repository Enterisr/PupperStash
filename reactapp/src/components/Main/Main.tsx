import React, { useEffect, useState, useContext } from "react";
import "./Main.style";
import PupperInfo from "./PupperInfo/PupperInfo";
import PupperForm from "./PupperForm/PupperForm";
import * as styled from "./Main.style";
import PupperList from "./PupperList/PupperList";
import VideoGrid from "./VideoGrid/VideoGrid";
import { observer } from "mobx-react";

import { PupperStoreContext } from "src/Contexts/PupperStoreContext";
import VideoView from "./VideoGrid/VideoView/VideoView";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Main() {
  const [selectedPupper, setSelectedPupper] = useState();
  const pupperStore = useContext(PupperStoreContext);

  return (
    <>
      <header>
        <styled.PageTitle className={"title_h1"}>PupperHub</styled.PageTitle>
      </header>

      <styled.MainStyle>
        <styled.MainSection>
          <PupperList
            selectedPupper={selectedPupper}
            setSelectedPupper={setSelectedPupper}
          />
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <VideoGrid
                    selectedPupper={selectedPupper}
                    setSelectedPupper={setSelectedPupper}
                  />
                }
              ></Route>
              <Route path="/video/:id" element={<VideoView />}></Route>
            </Routes>
          </Router>
        </styled.MainSection>
        <PupperForm />
      </styled.MainStyle>
    </>
  );
}

export default observer(Main);
