import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import NoticePage from '../pages/NoticePage/NoticePage';
import ReviewPage from '../pages/ReviewPage/ReviewPage';

function ShoppingRoute(props) {
    return (
        <>
            <Routes>
                <Route path='/' element={<MainPage/>} />
                    <Route path='/notice' element={<NoticePage />} />
                    <Route path='/review' element={<ReviewPage />} />

            </Routes>
        </>
    );
}

export default ShoppingRoute;