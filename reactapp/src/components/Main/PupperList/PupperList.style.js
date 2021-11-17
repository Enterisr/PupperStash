import styled from "styled-components";
export const StyledPupperList = styled.ul`
  margin-right: auto;
  li {
    padding: 1em;
    text-align: center;
    width: 10em;
    background-color: ${(props) =>
      props.selected ? "var(--accent-color)" : "#5b55551a"};
    border-radius: 1px;
    color: var(--second-color);
    margin-top: 0.3em;
    border-radius: 0.3em;
    transition: ease 0.3s all;
    cursor: pointer;
    &:hover {
      background-color: #e3dfdb;
    }
  }
`;
