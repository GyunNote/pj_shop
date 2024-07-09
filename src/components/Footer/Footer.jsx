/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React from 'react';
import insta from "../../images/80139173c86ec06e82c64a32ad6302ca.png"
import facebook from "../../images/27319cc60067da346c231513f5f7546e.png"
import image1 from "../../images/inis01.png"
import image2 from "../../images/inis02.png"
import image3 from "../../images/inis03.png"
import image4 from "../../images/inis04.png"

function Footer(props) {
    return (
        <div css={s.footerLayout}>
            <div css={s.section1}>
                <div>LOGO</div>
                <div>
                    <div>상호명: corporation</div>
                    <div>대표: 김이박</div>
                </div>
                <div>
                    <div>사업자 등록번호: 123-11-12345</div>
                    <div>Tel: 010-1234-1234</div>
                </div>
                <div>
                    통신판매신고번호
                </div>
                <div>주소: 부산광역시 중구</div>
                <div>개인정보보호책임자: 김이박 (rladlqkr@naver.com)</div>
                <div>이메일: rladlqkr@naver.com</div>
            </div>
            <div css={s.section2}>
                <div>CS CENTER</div>
                <div>010-1234-1234</div>
                <div>현재는 업무시간이 아닙니다.</div>
                <div>문의글을 남겨주세요</div>
                <div>업무시간: 10:00 ~ 18:00</div>
                <div>점심시간: 13:00 ~ 14:00</div>
            </div>
            <div css={s.section3}>
                <div>BANK INFO</div>
                <div>부산은행: 288-12-010101-1</div>
                <div>예금주: (대표명)</div>
                <div>RETURN / EXCHANGE</div>
                <div>꼭 연락 후 반품 해주셔야 빠른처리가 가능합니다!</div>
            </div>
            <div css={s.section4}>
                <div>SNS</div>
                <div>
                    <img src={insta} alt="" />
                   <div><img src={facebook} alt="" /></div>
                </div>
                <div>고객님은 안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰</div>
                <div>에서 가입한 구매안전 서비스를 이용하실 수 있습니다.</div>
                <div>
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                    <img src={image4} alt="" />

                </div>
            </div>
            
        </div>
    );
}

export default Footer;