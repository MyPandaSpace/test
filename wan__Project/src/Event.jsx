import './css/Event.css';
import { Link } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import { useEffect, useState } from 'react';
import Btn_goTop from './component/Btn_goTop';

function Event() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "./src/images/Event/events/newyear_1.jpg",
    "./src/images/Event/events/newyear_2.jpg",
    "./src/images/Event/events/newyear_3.jpg",
  ];
  const [timer, setTimer] = useState(null); // 用來保存定時器的 ID

  // 自動切換輪播
  useEffect(() => {
    // 定義一個函數來啟動計時器
    const startTimer = () => {
      return setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      }, 3000); // 每3秒自動切換
    };

    // 啟動計時器
    const interval = startTimer();
    setTimer(interval); // 保存定時器 ID 以便後續清除

    // 清除計時器
    return () => clearInterval(interval);
  }, [images.length]);

  // 點擊指示器後重設計時器
  const handleIndicatorClick = (index) => {
    setCurrentSlide(index); // 點擊指示器切換到對應圖片

    // 每次點擊指示器時重設計時器
    if (timer) {
      clearInterval(timer); // 清除當前的計時器
    }

    const newTimer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 4000); // 重新啟動計時器

    setTimer(newTimer); // 更新定時器
  };

  return (
    <>
      <div className="home-container">
        <Btn_goTop />
        {/* Banner */}
        <div className="main_Event">
          <Navbar />
          <img id='season_Event' src="./src/images/Event/season_event.png" alt="" />
          {/* 輪播圖片 */}
          <div className="season-event-carousel">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Slide ${index}`}
                className={`detail-carousel-img ${index === currentSlide ? "active" : ""
                  }`}
              />
            ))}
            {/* 輪播指示器 */}
            <div className="season-event-carousel-indicators">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`detail-indicator ${index === currentSlide ? "active" : ""
                    }`}
                  onClick={() => handleIndicatorClick(index)} // 點擊切換
                />
              ))}
            </div>
          </div>
        </div>
        {/* 評論卡片 */}
        <div className="comment-Card-row1">
          <div className='comment-Card' id='comment-Card1'>
            <img className='user-medal' src="./src/images/Event/silver_medal.png" alt="" />
            <p className='comment-title'>北極圈夢幻體驗</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>Experiencing the Aurora Sledding helped me reconnect with nature. The healing here is not just about the activities, but a way of life. — Ana, from Eastern America — John, UK</p>
          </div>
          <div className='comment-Card' id='comment-Card2'>
            <img className='user-medal' src="./src/images/Event/gold_medal.png" alt="" />
            <p className='comment-title'>北極圈夢幻體驗</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>Experiencing the Aurora Sledding helped me reconnect with nature. The healing here is not just about the activities, but a way of life. — Ana, from Eastern America — John, UK</p>
          </div>
          <div className='comment-Card' id='comment-Card3'>
            <img className='user-medal' src="./src/images/Event/bronze_medal.png" alt="" />
            <p className='comment-title'>北極圈夢幻體驗</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>Experiencing the Aurora Sledding helped me reconnect with nature. The healing here is not just about the activities, but a way of life. — Ana, from Eastern America — John, UK</p>
          </div>
          <div className='comment-Card' id='comment-Card1'>
            <img className='user-medal' src="./src/images/Event/silver_medal.png" alt="" />
            <p className='comment-title'>北極圈夢幻體驗</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>Experiencing the Aurora Sledding helped me reconnect with nature. The healing here is not just about the activities, but a way of life. — Ana, from Eastern America — John, UK</p>
          </div>
          <div className='comment-Card' id='comment-Card2'>
            <img className='user-medal' src="./src/images/Event/gold_medal.png" alt="" />
            <p className='comment-title'>北極圈夢幻體驗</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>Experiencing the Aurora Sledding helped me reconnect with nature. The healing here is not just about the activities, but a way of life. — Ana, from Eastern America — John, UK</p>
          </div>
          <div className='comment-Card' id='comment-Card3'>
            <img className='user-medal' src="./src/images/Event/bronze_medal.png" alt="" />
            <p className='comment-title'>北極圈夢幻體驗</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>Experiencing the Aurora Sledding helped me reconnect with nature. The healing here is not just about the activities, but a way of life. — Ana, from Eastern America — John, UK</p>
          </div>
        </div>
        <div className="comment-Card-row2">
          <div className='comment-Card' id='comment-Card1'>
            <img className='user-medal' src="./src/images/Event/silver_medal.png" alt="" />
            <p className='comment-title'>北極圈夢幻體驗</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>Experiencing the Aurora Sledding helped me reconnect with nature. The healing here is not just about the activities, but a way of life. — Ana, from Eastern America — John, UK</p>
          </div>
          <div className='comment-Card' id='comment-Card2'>
            <img className='user-medal' src="./src/images/Event/gold_medal.png" alt="" />
            <p className='comment-title'>北極圈夢幻體驗</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>Experiencing the Aurora Sledding helped me reconnect with nature. The healing here is not just about the activities, but a way of life. — Ana, from Eastern America — John, UK</p>
          </div>
          <div className='comment-Card' id='comment-Card3'>
            <img className='user-medal' src="./src/images/Event/bronze_medal.png" alt="" />
            <p className='comment-title'>北極圈夢幻體驗</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>Experiencing the Aurora Sledding helped me reconnect with nature. The healing here is not just about the activities, but a way of life. — Ana, from Eastern America — John, UK</p>
          </div>
          <div className='comment-Card' id='comment-Card1'>
            <img className='user-medal' src="./src/images/Event/silver_medal.png" alt="" />
            <p className='comment-title'>北極圈夢幻體驗</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>Experiencing the Aurora Sledding helped me reconnect with nature. The healing here is not just about the activities, but a way of life. — Ana, from Eastern America — John, UK</p>
          </div>
          <div className='comment-Card' id='comment-Card2'>
            <img className='user-medal' src="./src/images/Event/gold_medal.png" alt="" />
            <p className='comment-title'>北極圈夢幻體驗</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>Experiencing the Aurora Sledding helped me reconnect with nature. The healing here is not just about the activities, but a way of life. — Ana, from Eastern America — John, UK</p>
          </div>
          <div className='comment-Card' id='comment-Card3'>
            <img className='user-medal' src="./src/images/Event/bronze_medal.png" alt="" />
            <p className='comment-title'>北極圈夢幻體驗</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>Experiencing the Aurora Sledding helped me reconnect with nature. The healing here is not just about the activities, but a way of life. — Ana, from Eastern America — John, UK</p>
          </div>
        </div>
        {/* 活動 */}
        <div className="event">
          <div id='event-Type'>
            <img src="./src/images/Event/circle_Talk.png" alt="" />
            <Link to="/Event"><img src="./src/images/Event/event-Type1_hover.png" alt="" /></Link>
            <Link to="/Event_Type2"><img id="event-Type2" src="./src/images/Event/event-Type2.png" alt="" /></Link>
            <Link to="/Event_Type3"><img id='event-Type3' src="./src/images/Event/event-Type3.png" alt="" /></Link>
            <img style={{ marginLeft: '268px' }} src="./src/images/Event/btn_Select.png" alt="" />
          </div>
          <div id='row-event_Card'>
            <div id='column-event_Card'>
              <a href="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </a>
            </div>
            <div id='column-event_Card'>
              <a href="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </a>
            </div>
            <div id='column-event_Card'>
              <a href="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </a>
            </div>
          </div>
          <div id='row-event_Card'>
            <div id='column-event_Card'>
              <a href="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </a>
            </div>
            <div id='column-event_Card'>
              <a href="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </a>
            </div>
            <div id='column-event_Card'>
              <a href="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </a>
            </div>
          </div>
          <div id='row-event_Card'>
            <div id='column-event_Card'>
              <a href="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </a>
            </div>
            <div id='column-event_Card'>
              <a href="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </a>
            </div>
            <div id='column-event_Card'>
              <a href="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </a>
            </div>
          </div>
          <div id='row-event_Card'>
            <div id='column-event_Card'>
              <a href="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </a>
            </div>
            <div id='column-event_Card'>
              <a href="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </a>
            </div>
            <div id='column-event_Card'>
              <a href="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* 底部 */}
      <Footer />
    </>
  )
}

export default Event;