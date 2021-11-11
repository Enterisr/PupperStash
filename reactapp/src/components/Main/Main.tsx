import React, { useEffect, useState } from "react";
import "./Main.style";
import PupperInfo from "./PupperInfo/PupperInfo";
import PupperForm from "./PupperForm/PupperForm";
import { PageTitle, MainStyle } from "./Main.style";
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
        <PageTitle className={"title_h1"}>PupperHub</PageTitle>
      </header>
      <MainStyle>
        <PupperInfo getRandomPupper={getRandomPupper} pupper={watchedPupper} />
        <PupperForm />
      </MainStyle>
    </>
  );
}

export default Main;
