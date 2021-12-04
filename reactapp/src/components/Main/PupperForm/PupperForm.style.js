import styled from "styled-components/macro";

export const AddPupperButton = styled.button`
  position: fixed;
  padding: 0;
  right: 3em;
  bottom: 3em;
  cursor: pointer;
  border-radius: 50%;
  width: 4em;
  padding: 1em;
  background-color: inherit;
  height: 4em;
  border: none;
  background-color: var(--accent-color);
  box-shadow: 0px 0px 3px -2px black;

  &:hover {
    background-color: var(--second-color);
  }
`;
