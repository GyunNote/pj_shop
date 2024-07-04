import { css } from "@emotion/react";

export const layout = css`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px 50px 0px 50px;
border: 1px solid #dbdbdb;
margin-top: 50px;
`;
export const listContainer = css`
width: 100%;
`;

export const listTitle = css`
text-decoration: none;
display: flex;
background-color: rgb(246,246,246);
width: 100%;
height: 50px;
align-items: center;
& > div{
    display: flex;
    justify-content: center;
    font-size: 13.5px;
    font-weight: 600;
}
& > div:nth-of-type(1){
    width: 10%;
} 
& > div:nth-of-type(2){
    width: 60%;
} 
& > div:nth-of-type(3){
    width: 20%;
} 
& > div:nth-of-type(4){
    width: 8%;
} 
& > div:nth-of-type(5){
    width: 12%;
} 
`;

export const listItems = css`
text-decoration: none;
display: flex;
width: 100%;
height: 70px;
align-items: center;
& > div{
    display: flex;
    justify-content: center;
    font-size: 12px;
}
& > div:nth-of-type(1){
    width: 10%;
} 
& > div:nth-of-type(2){
    width: 60%;
    display: flex;
    justify-content: flex-start;
} 
& > div:nth-of-type(3){
    width: 20%;
} 
& > div:nth-of-type(4){
    width: 8%;
} 
& > div:nth-of-type(5){
    width: 12%;
} 
`;