/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React from 'react';
import firstEx from "../../images/image.png"
import { GoogleMap } from "@react-google-maps/api";

function ExplainPage(props) {

    const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

    console.log(API_KEY);
    return (
        <div css={s.Aboutlayout}>
            <div css={s.layoutCut}>
                <div css={s.division}>
                    <img src={firstEx} alt="" />
                </div>
                <div css={s.division3}>
                    <div css={s.divLayout2}>
                        <div>본인소개</div>
                        <div>
                            <div>저는 2023년 12월에 본격적으로 코딩을 시작하여</div>
                            <div>웹 분야를 공부하기 시작하였으며 백엔드: java, spring boot</div>
                            <div>프론트: javascript, react 데이터베이스: mysql,firebase,aws 등을 배우고</div>
                            <div>프로젝트를 진행하였으며 현재도 꾸준히 공부중에 있습니다.</div>
                            <div>현재 만들고 있는 사이트는 다잇이라는 웹 사이트를 모티브로 클론코딩을</div>
                            <div>하며 제가 가지고 있는 기술들을 재점검 및 향상시키는 중입니다.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div css={s.layoutCut}>
                <div css={s.division3}>
                    <div css={s.divLayout}>
                        <div>스토어</div>
                        <div css={s.smallTitle}>주소</div>
                        <div>부산광역시 동래구 명륜역</div>
                        <div css={s.smallTitle}>고객센터</div>
                        <div>010-1234-1234</div>
                        <div>rladlqkr@naver.com</div>
                        <div css={s.smallTitle}>업무시간</div>
                        <div>월-금: 9:00-18:00 (점심시간: 12:00-13:00)</div>
                        <div>토요일,일요일,공휴일 휴무</div>
                    </div>
                </div>
                <div css={s.division}>
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=명륜역&zoom=15`}
                    />
                </div>
            </div>
        </div>
    );
}

export default ExplainPage;