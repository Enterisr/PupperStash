import React, { useEffect, useState } from "react";
import "./Main.style";
import PupperInfo from "./PupperInfo/PupperInfo";
import PupperForm from "./PupperForm/PupperForm";
import * as styled from "./Main.style";
import PupperList from "./PupperList/PupperList";
import VideoGrid from "./VideoGrid/VideoGrid";
import { observer } from "mobx-react";
function Main() {
  return (
    <>
      <header>
        <styled.PageTitle className={"title_h1"}>PupperHub</styled.PageTitle>
      </header>
      <styled.MainStyle>
        <styled.MainSection>
          <PupperList />
          <VideoGrid />
        </styled.MainSection>
        <PupperForm />
      </styled.MainStyle>
    </>
  );
}

export default observer(Main);
