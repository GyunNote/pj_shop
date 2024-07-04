import { css } from "@emotion/react";

export const layout = css`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px 50px 0px 50px;
`;

export const title = css`
font-size: 25px;
font-weight: 600;

`;

export const smallTitles = css`
display: flex;
justify-content: space-around;
width: 25%;
margin-top: 30px;
color: #939292;
cursor: pointer;
`

export const smallTitle = css`
  position: relative;
  padding-bottom: 5px;
  &:hover::after {
    width: 100%;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: black;
    transition: width 0.3s ease;
  }
`;

export const activeSmallTitle = css`
  position: relative;
  color: black;
  padding-bottom: 5px;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: black;
    transition: width 0.3s ease;
  }
  `