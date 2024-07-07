/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React from 'react';

function ExplainPage(props) {
    return (
        <div css={s.Aboutlayout}>
            <div css={s.layoutCut}>
                <div css={s.division}>커피사진</div>
                <div css={s.division}>스튜디오 설명</div>
            </div>

            <div css={s.layoutCut}>
                <div css={s.division}>스토어 설명</div>
                <div css={s.division}>구글 맵</div>
            </div>
        </div>
    );
}

export default ExplainPage;