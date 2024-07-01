/** @jsxImportSource @emotion/react */
import * as s from "./style";

import React from 'react';

function Title(props) {
    return (
        <div css={s.layout}>
            <div css={s.title}>NOTICE</div>

            <div css={s.smallTitles}>
                <div>NOTICE</div>
                <div>REVIEW</div>
                <div>Q&A</div>
                <div>FAQ</div>
            </div>

            
        </div>
    );
}

export default Title;