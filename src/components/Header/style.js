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
padding: 0px 50px 0px 50px;
border-bottom: 1px solid #dbdbdb;
background-color: white;
`;


export const logo = css`
margin-right: 170px;
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
    cursor: pointer;
}
`;