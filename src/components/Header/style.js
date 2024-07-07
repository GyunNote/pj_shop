import { css } from "@emotion/react";

export const headerLayout = css`
width: 100%;
height: 150px;
box-sizing: border-box;
position: fixed;
z-index: 1000;
top: 0;
`;

export const header = css`
display: flex;
justify-content: space-between;
align-items: center;
height: 60%;
padding: 0px 40px 0px 50px;
border-bottom: 1px solid #dbdbdb;
background-color: white;
`;


export const logo = css`
margin-right: 170px;
cursor: pointer;
`;

export const headerRight = css`
display: flex;
margin-top: 10px;
`;

export const headerLeft = css`
display: flex;
margin-top: 10px;
`;

export const buttonItem = css`
border: none;
background-color: white;
margin-right: 15px;
 :hover{
    color: #c6c3c3;
    cursor: pointer;
}
`;

export const buttonItem2 = css`
position: relative;
box-sizing: border-box;
border: none;
background-color: white;
margin-right: 4px;
font-size: 20px;
 :hover{
    cursor: pointer;
}
`;



export const header2 = css`
display: flex;
justify-content: center;
height: 40%;
background-color: white;
`;

export const buttonItem3 = css`
box-sizing: border-box;
border: none;
background-color: white;
margin-right: 24px;
font-size: 14.5px;
 :hover{
    color: #c6c3c3;
    cursor: pointer;
}
`;

export const dropdownContainer = css`
  position: relative;
`;

export const dropdownMenu = css`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  border: 1px solid #dbdbdb;
  padding: 5px;
  white-space: nowrap;
  font-size: 14px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  div {
    padding: 8px 12px;
    cursor: pointer;

    &:hover {
      background-color: #f1f1f1;
      transition: 0.3sec ease-in-out;
    }
  }

  & > div {
    font-size: 10px;
    display: flex;
    justify-content: center;
    font-weight: 600;
  } 
`;