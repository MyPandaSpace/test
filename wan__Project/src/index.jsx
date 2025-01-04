import "./css/aos.css";
import './css/index.css';
import bg_mountain from "./images/index/bg_mountain.png";
import bg_sea from './images/index/bg_sea.png';
import bg_2_Filter from './images/index/bg_2_filter.png';
import Navbar from "./component/Navbar.jsx";
import { useEffect, useState } from 'react';
import Aos from "aos";
import Footer from "./component/Footer.jsx";
import Btn_goTop from "./component/Btn_goTop.jsx";

export default function Index() {
  useEffect(() => {
    Aos.init({
      delay: 2500,
      once: true
    });
  }, []);

  const [showOverlay, setShowOverlay] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0); // 記錄當前顯示的圖片索引
  const images = [
    "./src/images/index/mainEvent_Image_1.png",
    "./src/images/index/mainEvent_Image_2.png",
    "./src/images/index/mainEvent_Image_3.png"
  ];

  // 動畫結束時將overlay移除
  const handleAnimationEnd = () => {
    setShowOverlay(false);
  };

  // 上一張圖片
  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length); // 切換到上一張圖片
  };

  // 下一張圖片
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length); // 切換到下一張圖片
  };

  useEffect(() => {
    // 使用 setTimeout 延遲滾動
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // 延遲100ms，確保頁面渲染完成

    return () => clearTimeout(timer); // 清理定時器
  }, [location]);

  return (
    <>
      {/* 首頁容器 */}
      <div className="home-container">
        <Btn_goTop />
        {/* 橫幅 */}
        <main className="banner" >
          <Navbar />
          <div className='title' data-aos="fade-down" data-aos-duration="2000" >
            <img id="title-wan" src="./src/images/index/Title_wan.svg" alt="title" />
          </div>
          <img id="bg_sea" src={bg_sea} alt="bg_sea" />
          <div id='banner2'>
            <img id="bg_mountain" src={bg_mountain} alt="bg_mountain" />
            <div id="circle_ip" data-aos="fade-right" data-aos-duration="3000">
              <a href="/Event"><img src="./src/images/index/circle_ip.svg" alt="circle_ip" /></a>
              <div className="ip_hover-image" id="circle-hover-image">
                <img src="./src/images/index/Go_Event.png" alt="Go_Event" />
              </div>
            </div>
            <div id='heart_ip' data-aos="fade-left" data-aos-duration="3000">
              <a href="/Article_Bay"><img src="./src/images/index/heart_ip.svg" alt="heart_ip" /></a>
              <div className="ip_hover-image" id="heart-hover-image">
                <img src="./src/images/index/Go_ArticleBay.png" alt="Go_ArticleBay" />
              </div>
            </div>
          </div>
          {/* 將背景圖層提升到更靠近頂部 */}
          <div className='background-overlay2' onAnimationEnd={handleAnimationEnd}>
            <img src={bg_2_Filter} alt="" />
          </div>
        </main>

        {/* 區塊 2：服務 */}
        <section className="services-section" >
          <div className="service1">
            <img src="./src/images/index/service1.svg" alt="" />
            <img src="./src/images/index/service1_detail.svg" alt="Service 1" />
          </div>
          <div className="service2">
            <img src="./src/images/index/service2_detail.svg" alt="Service 2" />
            <img src="./src/images/index/service2.svg" alt="" />
          </div>
        </section>
        {/* 區塊 3：主打活動 */}
        <section className="section-mainEvent">
          <figure id="section_mainEvent_Top">
            <img src="./src/images/index/section_mainEvent_Top.png" alt="" />
          </figure>
          <div id="section_mainEvent">
            <div id="mainEvent-Left">
              <img id="mainEvent-Title" src="./src/images/index/mainEvent-Title.svg" alt="title" />
              <article id='mainEvent-Content'>
                <p>2025.01.25 (六)</p>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>以剪紙這項傳統藝術來迎接新年！透過一刀一剪，將你的心意轉化為美麗的圖案，無論是喜慶的紅色剪紙或精緻的對聯裝飾，都充滿溫暖的祝福。
                  <br /><br />
                  這個活動適合所有想要沉澱心情、用心創作的人，一同透過簡單的創作步驟，為新的一年剪出滿滿的美好與希望！</p>
              </article>
              <a href="/Event"><li
                onClick={() => document.getElementById('article_Type1_Img').scrollIntoView({ behavior: 'smooth' })}
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  width: '144px',
                  height: '100px'
                }}
              >
                <img
                  src="./src/images/btn/new-btn1-normal.png"
                  alt="Member Related"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    transition: '0.3s ease',
                    cursor: 'pointer'
                  }}
                  className="member-btn-img"
                  onMouseEnter={() => {
                    document.querySelector('.member-btn-img').src = './src/images/btn/new-btn1-hover.png';  // 切換圖片
                    document.querySelector('.member-btn-text').style.transform = 'top 45%'
                  }}
                  onMouseLeave={() => {
                    document.querySelector('.member-btn-img').src = './src/images/btn/new-btn1-normal.png';  // 還原
                    document.querySelector('.member-btn-text').style.transform = 'top 45%'
                  }}
                  onMouseDown={() => {
                    document.querySelector('.member-btn-img').src = './src/images/btn/new-btn1-pressed.png';  // 按下
                    document.querySelector('.member-btn-text').style.transform = 'top 50%';
                  }}
                  onMouseUp={() => {
                    document.querySelector('.member-btn-img').src = './src/images/btn/new-btn1-normal.png';  // 放開
                    document.querySelector('.member-btn-text').style.transform = 'top 45%'
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '45%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: '#72b2da',
                    fontSize: '20px',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer'
                  }}
                  className="member-btn-text"
                  onMouseEnter={() => {
                    document.querySelector('.member-btn-img').src = './src/images/btn/new-btn1-hover.png';  // 切換圖片
                    document.querySelector('.member-btn-text').style.transform = 'top 45%'
                  }}
                  onMouseLeave={() => {
                    document.querySelector('.member-btn-img').src = './src/images/btn/new-btn1-normal.png';  // 還原
                    document.querySelector('.member-btn-text').style.transform = 'top 45%'
                  }}
                  onMouseDown={() => {
                    document.querySelector('.member-btn-img').src = './src/images/btn/new-btn1-pressed.png';  // 按下
                    document.querySelector('.member-btn-text').style.transform = 'top 50%';
                  }}
                  onMouseUp={() => {
                    document.querySelector('.member-btn-img').src = './src/images/btn/new-btn1-normal.png';  // 放開
                    document.querySelector('.member-btn-text').style.transform = 'top 45%'
                  }}
                >
                  了解更多
                </span>
              </li></a>
            </div>
            <div id="mainEvent-Right">
              <img id="mainEvent-Image" src={images[currentSlide]} alt="image" /> {/* 顯示當前圖片 */}
              <div id="mainEvent-btnArrow">
                <div id="mainEvent-arrow_Left" onClick={goToPreviousSlide}>
                  <img src="./src/images/index/btn_ArrowLeft.svg" alt="btn_Left" />
                </div>
                <div id="mainEvent-arrow_Right" onClick={goToNextSlide}>
                  <img src="./src/images/index/btn_ArrowRight.svg" alt="btn_Right" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div >

      {/* 底部 */}
      <Footer />
    </>
  );
}