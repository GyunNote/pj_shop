/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useState, useEffect, useRef } from 'react';
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import middleBanner from "../../images/2b65ddeb099ae5e372052866c0bd0b91.jpeg"
import underBanner from "../../images/2a2a3c17ef2a8ff1d155388b890e2cc1.png"
import { useNavigate } from "react-router-dom";

function MainPage(props) {
  const images = [
    "https://dhait.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/67172023b4297b31e6de67a45ced0095.jpg",
    "https://dhait.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/6085f63122febad5c6692580c2276144.jpg",
    "https://dhait.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/c92ea7de58a9fac94da862e8405abab7.jpg"
  ];
  const navigate = useNavigate();
  const bannerRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideshowInterval = useRef(null);

  const resetInterval = () => {
    if (slideshowInterval.current) {
      clearInterval(slideshowInterval.current);
    }
    slideshowInterval.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3초마다 이미지 변경
  };

  useEffect(() => {
    resetInterval();
    return () => clearInterval(slideshowInterval.current);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    resetInterval();
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    resetInterval();
  };

  const linkToReview = () => {
    navigate("/review");
  };

  const linkToAbout = () => {
    navigate("/about");
  };

  useEffect(() => {
    const handleScroll = () => {
      const imgElement = bannerRef.current;
      if (imgElement) {
        const scrollPosition = window.scrollY;
        imgElement.style.transform = `translateY(-${scrollPosition * 0.3}px)`; // 스크롤 위치에 따라 translateY 값 조정
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return (
    <div css={s.mainLayout}>
      <div css={s.mainPhoto}>
        <div css={s.photo1}>
          <div
            css={s.slideShow}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div css={s.slide} key={index}>
                <img src={image} alt={`slide-${index}`} />
              </div>
            ))}
          </div>
          <button css={s.arrowLeft} onClick={prevSlide}>
          <MdArrowBackIos />
          </button>
          <button css={s.arrowRight} onClick={nextSlide}>
          <MdArrowForwardIos />
          </button>
        </div>
        <div css={s.photoRight}>
          <div css={s.photoItem}><img src="https://dhait.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/b00d58b7b122d7ddc7ce3920377f01e6.jpg" alt="" /></div>
          <div css={s.photoItem}><img src="https://dhait.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/06435447ab5e362faead3b9983301dc8.jpg" alt="" /></div>
          <div css={s.photoItem}><img src="https://dhait.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/1a3945d9f863d100a2f89fa6fcc9c56b.jpg" alt="" /></div>
          <div css={s.photoItem}><img src="https://dhait.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/db1117e0a902899dec9dc4ded97c5b59.jpg" alt="" /></div>
        </div>
      </div>

      <div css={s.middlePhoto}>
        <div css={s.middleItem}><img src="https://dhait.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/e183f7bf56554a034c84a5b7e5a8eaed.jpg" alt="" /></div>
        <div css={s.middleItem}><img src="https://dhait.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/dd4e714fabf814961d740dbd31a6593d.jpg" alt="" /></div>
        <div css={s.middleItem}><img src="https://dhait.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/6e6ac971ad1c3f37eab46dc188472906.jpg" alt="" /></div>
        <div css={s.middleItem}><img src="https://dhait.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/7153993a027b0e77957c74351657e8f5.jpg" alt="" /></div>
      </div>

      <div css={s.middleBanner}>
        <img src={middleBanner} alt="" />
        <div css={s.textOverlay}> PHOTO REVIEW</div>
        <div css={s.textOverlay2}> 고객님들의 솔직한 후기</div>
        <button css={s.textOverlay3} onClick={() => linkToReview()}> 더 많은 리뷰 보기+</button>
      </div>
      <div css={s.underBanner}  >
        <img ref={bannerRef} src={underBanner} alt="" />
        <div css={s.textOverlay4}>여성 의류 쇼핑몰 SHOPMORE</div>
        <div css={s.textOverlay5}>매일 업데이트 되는 상품을 확인해보세요.</div>
        <div css={s.textOverlay6}>품질에 집중하여 보다 완성도 높은 아이템을 준비하고 있습니다.</div>
        <button css={s.textOverlay7} onClick={() => linkToAbout()}>자세히 보기</button>
      </div>

      <div>
        {/* 추가 콘텐츠 */}
      </div>
    </div>
  );
}

export default MainPage;
