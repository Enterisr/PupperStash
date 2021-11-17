import React, { useEffect, useState } from "react";
import "./Main.style";
import PupperInfo from "./PupperInfo/PupperInfo";
import PupperForm from "./PupperForm/PupperForm";
import * as styled from "./Main.style";
import PupperList from "./PupperList/PupperList";
function Main() {
  const [watchedPupper, setWatchedPupper] = useState({ age: -1, name: "" });
  useEffect(() => {
    getRandomPupper();
  }, []);
  function getRandomPupper() {
    fetch("http://localhost:8080/pupper/random")
      .then((responsePupper) => responsePupper.json())
      .then((pupper) => setWatchedPupper(pupper));
  }
  return (
    <>
      <header>
        <styled.PageTitle className={"title_h1"}>PupperHub</styled.PageTitle>
      </header>
      <styled.MainStyle>
        <styled.StyledSection>
          <PupperList />
          <PupperInfo
            getRandomPupper={getRandomPupper}
            pupper={watchedPupper}
          />
        </styled.StyledSection>
        <PupperForm />
      </styled.MainStyle>
    </>
  );
}

export default Main;
