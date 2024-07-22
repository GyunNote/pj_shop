/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const mainLayout = css`
  width: 100%;
  margin-left: 15px;
`;

export const mainPhoto = css`
  display: flex;
  width: 95%;
  min-height: 760px;
  max-height: 760px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const photo1 = css`
  position: relative;
  flex: 1;
  margin-right: 0;
  box-sizing: border-box;
  overflow: hidden;
`;

export const slideShow = css`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

export const slide = css`
  min-width: 100%;
  height: 100%;
  box-sizing: border-box;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const arrow = css`
  position: absolute;
  top: 50%;
  border: none;
  cursor: pointer;
  transform: translateY(-50%);
  z-index: 10;
  background: none;
  font-size: 35px;
  color: #f2f1f1;

`;

export const arrowLeft = css`
  ${arrow};
  left: 3px;
`;

export const arrowRight = css`
  ${arrow};
  right: 0px;

`;

export const photoRight = css`
  display: grid;
  flex: 1;
  gap: 0;
  margin-left: 0;
  box-sizing: border-box;
  grid-template-rows: 380px 380px; /* Divide the space into 2 rows */
  grid-template-columns: repeat(2, 1fr); /* Divide the space into 2 columns */
  max-height: 740px; /* Ensure the height does not exceed 740px */
`;

export const photoItem = css`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure the image covers the entire area without being distorted */
    display: block;
  }
`;

export const middlePhoto = css`
display: flex;
justify-content: center;
box-sizing: border-box;
margin-top: 80px;
width: 100%;
margin-left: 18px;

`;

export const middleItem = css`
margin-right: 30px;

& > img {
    width: 370px;
    height: 360px;
}
`;

export const middleBanner = css`
  position: relative;
  width: 100%;
  margin-top: 80px;
  img {
    width: 100%;
    height: 350px;
    display: block;
  }
`;

export const textOverlay = css`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black; 
  font-size: 21px;
  font-weight: 600;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
`;

export const textOverlay2 = css`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #757474e5;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
`;

export const textOverlay3 = css`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background-color: black;
  font-size: 12px;
  text-align: center;
  padding: 20px 40px;
  border-radius: 35px;
  cursor: pointer;
`;

export const underBanner = css`
   position: relative;
  margin-top: 100px;
  overflow: hidden;
  height: 400px;
  width: 100%;
  
  img {
    width: 100%;
    height: auto;
    position: absolute;
    left: 0;
    transform: -(translateY(100%)); /* 초기에는 보이도록 설정 */
    transition: transform 0.5s ease-out; /* transform 속성에 대한 transition 설정 */
  }
`;

export const textOverlay4 = css`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white; 
  font-size: 28px;
  font-weight: 550;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
`;

export const textOverlay5 = css`
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white; 
  font-size: 14px;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
`;

export const textOverlay6 = css`
  position: absolute;
  top: 49%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white; 
  font-size: 14px;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
`;

export const textOverlay7 = css`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  border:1px solid white ;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  padding: 15px 45px;
  background: fixed;
  cursor: pointer;
`;
