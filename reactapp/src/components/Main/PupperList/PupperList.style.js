import styled from "styled-components/macro";
export const StyledPupperImg = styled.img`
  width: 3rem;
  image-rendering: optimizeQuality;
  border-radius: 50%;
  height: 3rem;
`;
export const StyledLi = styled.li`
  text-align: center;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: rgb(40 44 52);
  border-radius: ${(props) => (props.isSelected ? "0" : "10px")};
  box-shadow: ${(props) =>
    props.isSelected
      ? "inset 0px 0px 0px 2px var(--second-color)"
      : "0px 0px 24px -19px black"};
  padding: 1em;
  margin-top: 1em;
  -webkit-transition: ease 0.3s all;
  -webkit-transition: ease 0.3s all;
  transition: ease 0.1s all;
  cursor: pointer;
  height: 4.5rem;
  border: solid transparent 1px;
  transform: ${(props) => (props.isSelected ? "translateX(25%)" : "")};
  &:hover {
    border: solid 1px var(--second-color);
  }
  .pupperDetail_span {
    color: var(--second-color);
  }
`;
export const StyledPupperList = styled.ul`
  display: block;
  width: 18em;
  height: 100%;
  padding: 1em;
  font-size: 1.2rem;
  background: #f5fdff;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  overflow: auto;
  display: -ms-flexbox;
  display: flex;
  box-shadow: 0px 0px 15px -4px;
`;
