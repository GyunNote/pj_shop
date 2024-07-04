import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Title from '../../components/TItle/Title';
import { useQuery } from 'react-query';
import { searchNoticeBoardRequest } from '../../apis/api/boardApi';

function NoticePage(props) {

    const noticeBoards = useQuery(
        ["noticeBoards"],
        async() => await searchNoticeBoardRequest(),
        {
            refetchOnWindowFocus : false,
            onSuccess : response => {
                console.log(response)
            }
        }
    );
    return (
        <>
            <Title />
            <div css={s.layout}>

                <div css={s.listContainer}>
                    <li css={s.listTitle}>
                        <div>번호</div>
                        <div>제목</div>
                        <div>작성자</div>
                        <div>조회</div>
                        <div>시간</div>
                    </li>
                    <li css={s.listItems}>
                        <div>공지</div>
                        <div>상담은 카카오톡 또는 게시판을 이용해주세요.</div>
                        <div>관리자</div>
                        <div>조회</div>
                        <div>시간</div>
                    </li>
                </div>
                
            </div>
        </>
    );
}

export default NoticePage;