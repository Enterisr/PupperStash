import styled from "styled-components/macro";
export const PupperInfoSection = styled.section`
  background-color: var(--accent-color);
  color: white;
  text-align: center;
  width: 30rem;
  height: 16em;
  margin: auto;
  border-radius: 1rem;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  box-shadow: 0px -1px 9px 1px #7f7f7f;
  font-size: 2rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  position: relative;
  -ms-flex-direction: column;
  flex-direction: column;
`;
export const NewPupperButton = styled.button`
  background-color: inherit;
  font-size: 3rem;
  border: none;
  border-radius: 0.7rem;
  font-weight: lighter;
  cursor: pointer;
  border: none;
  margin-right: auto;
  width: 3rem;
  left: 0;
  svg {
    box-shadow: 0px 0px 10px -2px grey;
    border-radius: 5em;
    transition: ease 0.1s all;
    &:hover {
      box-shadow: none;
    }
    &:active {
      transform: rotate(180deg);
    }
  }
`;
export const PupperInfoDetails = styled.div`
  margin-bottom: auto;
  display: flex;

  padding: 0.5em;
`;
export const PupperImage = styled.img`
  max-height: 70%;
  max-width: 100%;
  margin-top: 1em;
  border-radius: 1rem;
  position: relative;
  vertical-align: middle;
  filter: grayscale(0.3);
  transition: ease 0.3s all;
  &:hover {
    filter: grayscale(0);
  }
`;
