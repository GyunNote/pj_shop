/** @jsxImportSource @emotion/react */
import { useLocation, useNavigate } from "react-router-dom";
import * as s from "./style";

import React, { useEffect, useState } from 'react';

function Title(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentSection, setCurrentSection] = useState("");

    useEffect(() => {
        // 현재 경로를 기반으로 활성화된 섹션을 설정
        switch (location.pathname) {
            case "/notice":
                setCurrentSection("notice");
                break;
            case "/review":
                setCurrentSection("review");
                break;
            case "/qna":
                setCurrentSection("qa");
                break;
            case "/faq":
                setCurrentSection("faq");
                break;
            default:
                setCurrentSection("");
        }
    }, [location.pathname]);

    const sections = {
        notice: 'NOTICE',
        review: 'REVIEW',
        qa: 'Q&A',
        faq: 'FAQ'
    };

    const handleSectionChange = (section, path) => {
        navigate(path);
        setCurrentSection(section);
    };

    return (
        <div css={s.layout}>
            <div css={s.title}>{sections[currentSection]}</div>
            <div css={s.smallTitles}>
                {Object.keys(sections).map(section => (
                    <div
                        key={section}
                        css={currentSection === section ? s.activeSmallTitle : s.smallTitle}
                        onClick={() => handleSectionChange(section, `/${section}`)}
                    >
                        {sections[section]}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Title;
