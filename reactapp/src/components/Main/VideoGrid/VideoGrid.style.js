import styled from "styled-components/macro";
export const StyledVideoGrid = styled.div`
  display: grid;
  margin: auto;
  height: 100%;
  width: 100%;
  padding: 1.5rem;
  border-radius: 3px;
  grid-gap: var(--margin-unit);
  justify-items: center;
  align-content: flex-start;
  grid-template-columns: 1fr 1fr 1fr;
`;
export const StyledVideoTile = styled.div`
  text-align: center;
  font-weight: lighter;
  cursor: pointer;
  background-color: aliceblue;
  height: 10rem;
  box-shadow: 0px 0px 31.1px -12.1px #b7b7c1;
  width: 20rem;
  border-radius: 15px;
  h2 {
    &:hover {
      text-decoration: underline;
    }
  }
  img {
    width: 4rem;
    border-radius: 50%;
    height: 4rem;
  }
`;
