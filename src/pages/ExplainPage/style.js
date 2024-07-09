import { css } from "@emotion/react";
<style>
@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');
</style>

export const Aboutlayout = css`
display: flex;
flex-direction: column;
 width: 100%;
 height: 100%;
`;

export const layoutCut = css`
display: flex;

`;

export const division = css`
width: 50%;
max-height: 828px;
min-height: 750px;

& > img{
width: 100%;
height: 100%;
}
`;

export const division3 = css`
display: flex;
flex-direction: column;
align-items: center;
width: 50%;
max-height: 828px;
min-height: 750px;

& > div:nth-of-type(1){
    padding-top: 160px;
}

`;

export const divLayout = css`
font-family: "Do Hyeon", sans-serif;
font-size: 16px;
margin-right: 15px;
   
& > div:nth-of-type(1){
    font-size: 26px;
    margin-bottom: 30px;
    font-weight: 600;
}
& > div:nth-of-type(3){
    color: #888;
    font-size: 15px;
    margin-bottom: 27px;

}
& > div:nth-of-type(5){
    color: #888;
    font-size: 15px;
    margin-bottom: 10px;

}
& > div:nth-of-type(6){
    color: #888;
    font-size: 15px;
    margin-bottom: 27px;

}
& > div:nth-of-type(8){
    color: #888;
    font-size: 15px;
    margin-bottom: 10px;

}
& > div:nth-of-type(9){
    color: #888;
    font-size: 15px;
}

`;

export const smallTitle = css`
font-size: 16px;
margin-bottom: 11px;
`;

export const divLayout2 = css`
font-family: "Do Hyeon", sans-serif;
font-size: 16px;
margin-top: 38px;
   
& > div:nth-of-type(1){
    font-size: 26px;
    margin-bottom: 30px;
    font-weight: 600;
}

& > div:nth-of-type(2){
    color: #888;
    font-size: 15px;
    & > div{
        margin-bottom: 18px;
    }
}
`;

