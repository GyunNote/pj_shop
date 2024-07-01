import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import NoticePage from '../pages/NoticePage/NoticePage';

function ShoppingRoute(props) {
    return (
        <>
            <Routes>
                <Route path='/' element={<MainPage/>} />
                    <Route path='/notice' element={<NoticePage />} />

            </Routes>
        </>
    );
}

export default ShoppingRoute;