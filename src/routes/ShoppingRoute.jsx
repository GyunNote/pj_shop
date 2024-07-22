import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import NoticePage from '../pages/NoticePage/NoticePage';
import ReviewPage from '../pages/ReviewPage/ReviewPage';
import ExplainPage from '../pages/ExplainPage/ExplainPage';
import NoticeWritePage from '../pages/WritePage/NoticeWritePage';

function ShoppingRoute(props) {
    return (
        <>
            <Routes>
                <Route path='/' element={<MainPage/>} />
                    <Route path='/notice' element={<NoticePage />} />
                    <Route path='/review' element={<ReviewPage />} />
                    <Route path='/about' element={<ExplainPage />} />
                    <Route path='/notice/write' element={<NoticeWritePage />} />

            </Routes>
        </>
    );
}

export default ShoppingRoute;