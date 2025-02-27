/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Header(props) {
    const [isFixed, setIsFixed] = useState(true); // 초기 상태에서 isFixed를 true로 설정
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

    const navigate = useNavigate();

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsFixed(true);
        } else {
            setIsFixed(true); // 항상 true로 설정하여 고정 상태를 유지
        }
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    const toggleDropdown2 = () => {
        setIsDropdownOpen2(prevState => !prevState);
    };

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };
    
    const handleMouseEnter2 = () => {
        setIsDropdownOpen2(true);
    };

    const handleMouseLeave2 = () => {
        setIsDropdownOpen2(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const linkToNotice = () => {
        navigate("/notice");
      }
    
    const linkToMain = () => {
        navigate("/");
    }

    return (
        <>
            <div css={s.headerLayout}>
                <div css={s.header}>
                    <div css={s.headerLeft}>
                        <button css={s.buttonItem}>BRAND</button>
                        <button css={s.buttonItem}>EVENT</button>
                        <button css={s.buttonItem} onClick={() => linkToNotice()}>NOTICE</button>

                        <div css={s.dropdownContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <button css={s.buttonItem}>COMMUNITY</button>
                                {isDropdownOpen && (
                                    <div css={s.dropdownMenu}>
                                        <div>NOTICE</div>
                                        <div>REVIEW</div>
                                        <div>Q&A</div>
                                        <div>FAQ</div>
                                    </div>
                                )}
                        </div>

                    </div> 
                    <div css={s.logo} onClick={() => linkToMain()}>
                        LOGO
                    </div>
                    <div css={s.headerRight}>
                        <button css={s.buttonItem2}><CiSearch /></button>
                        <div css={s.dropdownContainer} onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>

                            <button css={s.buttonItem2} onClick={toggleDropdown2}><IoPersonOutline /></button>
                            {isDropdownOpen2 && (
                                <div css={s.dropdownMenu}>
                                    <div>LOGIN</div>
                                    <div>JOIN</div>
                                    <div>MY PAGE</div>
                                    <div>ORDER</div>
                                </div>
                            )}
                        </div>

                        <button css={s.buttonItem2}><CiShoppingCart /></button>
                        <button css={s.buttonItem2}><FaBars /></button>
                    </div>
                </div>
                <div css={s.header2}>
                    <button css={s.buttonItem3}>BEST</button>
                    <button css={s.buttonItem3}>NEW 5%</button>
                    <button css={s.buttonItem3}>아우터</button>
                    <button css={s.buttonItem3}>원피스</button>
                    <button css={s.buttonItem3}>상의</button>
                    <button css={s.buttonItem3}>하의</button>
                    <button css={s.buttonItem3}>세트</button>
                </div>
            </div>
            <div css={{ height: '150px' }}></div>
        </>
    );
}

export default Header;
