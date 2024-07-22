import { css } from "@emotion/react";

export const footerLayout = css`
display: flex;
box-sizing: border-box;
width: 100%;
height: 300px;
padding: 50px;
border-top: 1px solid #dbdbdb;
`;

export const section1 = css`
width: 49%;
& > div{
    font-size: 12px;
    color: #767676;
    margin-bottom: 5px;
}
& > div:nth-of-type(2){
    display: flex;
    & > div:nth-of-type(1){
        margin-right: 10px;
    }
}
& > div:nth-of-type(3){
    display: flex;
    & > div:nth-of-type(1){
        margin-right: 10px;
    }
}
`

export const section2 = css`
width: 18%;
& > div:nth-of-type(1){
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 15px;
}
& > div:nth-of-type(2){
    font-size: 19px;
    margin-bottom: 17px;

}
& > div:nth-of-type(3){
    font-size: 11.69px;
    color: red;
    font-weight: 600;
    margin-bottom: 5px;
}
& > div:nth-of-type(4){
    font-size: 11px;
    color: red;
    margin-bottom: 5px;

}
& > div:nth-of-type(5){
    font-size: 12px;
    margin-bottom: 5px;
    color: #767676;

}
& > div:nth-of-type(6){
    font-size: 12px;
    color: #767676;

}
`
export const section3 = css`
width: 25%;
& > div:nth-of-type(1){
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 15px;
}
& > div:nth-of-type(2){
    font-size: 12px;
    margin-bottom: 5px;
    color: #767676;
}
& > div:nth-of-type(3){
    font-size: 12px;
    margin-bottom: 28px;
    color: #767676;
}
& > div:nth-of-type(4){
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 15px;

}
& > div:nth-of-type(5){
    font-size: 12px;
    color: #767676;
}
`
export const section4 = css`
width: 20%;
& > div:nth-of-type(1){
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 15px;
}
& > div:nth-of-type(2){
display: flex;
  & > img {
    width: 16px;
    height: 16px;
    margin-right: 20px;
    margin-top: 2px;
    cursor: pointer;
  }
  & > div{
    & > img {
       height:21px;
       cursor: pointer;
    }
  }
}
& > div:nth-of-type(3){
    font-size: 10px;
    color: #767676;
    font-weight: 550;
    margin-top: 21px;
    margin-bottom: 8px;
}
& > div:nth-of-type(4){
    font-size: 10px;
    color: #767676;
    font-weight: 550;

}
& > div:nth-of-type(5){
    margin-top: 20px;
   & > img{
    width: 35px;
    height: 35px;
    margin-right: 12px;
    cursor: pointer;
   }
}
`