import styled from "styled-components";
export const StyledPupperList = styled.ul`
  display: block;
  width: 18em;
  height: calc(100% - 71px);
  padding: 1em;
  background: #f5fdff;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  position: absolute;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  overflow: auto;
  display: -ms-flexbox;
  display: flex;
  box-shadow: 0px 0px 15px -4px;
  li {
    text-align: center;
    width: 13em;
    background-color: white;
    color: rgb(40 44 52);
    border-radius: 10px;
    box-shadow: 0px 0px 24px -19px black;
    padding: 1em;
    margin-top: 1em;
    -webkit-transition: ease 0.3s all;
    -webkit-transition: ease 0.3s all;
    transition: ease 0.1s all;
    cursor: pointer;
    border: solid transparent 3px;
    &:hover {
      border: solid 3px var(--second-color);
    }
  }
`;
