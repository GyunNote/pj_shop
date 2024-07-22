/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useState, useEffect } from "react";

function GetTime(props) {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    const formatTime = (date) => {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <div css={s.timeContainer}>
            <div>{formatTime(currentTime)}</div>
        </div>
    );
}

export default GetTime;
