import Btn_goTop from "./component/Btn_goTop";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import './css/About.css';

export default function About() {

  return (
    <>
      <Navbar />
      <Btn_goTop />
      <div className="about-Banner">
        <img src="./src/images/About/about_Title.png" alt="" />
      </div>
      <div className="about-Content">
        <div id="about-Content-Title">
          <img src="./src/images/About/about-Content-Title.png" alt="" />
        </div>
        <div id="about-Content-Text">
          <p>在喧囂的生活中，我們常忘了停下腳步，感受內心的聲音。
            <br /><br />
            灣wan，正是為此而誕生的一個心靈角落——「一座充滿療癒與溫暖的港灣」
            <br />
            讓您繁忙與壓力得以稍稍喘息，重新拾起生活中的溫柔與美好。</p>
        </div>
        <div id="about-dec5-Img">
          <img src="./src/images/About/dec5.png" alt="" />
        </div>
        <div id="about-Bay1-Img">
          <img src="./src/images/About/Bay_1.png" alt="" />
        </div>
        <div id="about-Bay1-Text">
          <p>灣是一片寧靜的海域，也是無數個小故事的交匯地。<br />
            每一次的學習、創作或探索，都是一段通往心靈深處的旅程。<br />透過我們探索體驗村的活動及心途之灣的文章，您將能發現更多生命中的小確幸，<br />並將這份療癒傳遞出去~</p>
        </div>
        <div id="about-Bay2-Img">
          <img src="./src/images/About/Bay_2.png" alt="" />
        </div>
        <div id="about-Bay2-Text">
          <img src="./src/images/About/about-Bay2_Text.png" alt="" />
        </div>
        <div id="about-circle_ip-Img">
          <img src="./src/images/About/circle_ip.png" alt="" />
        </div>
        <div id="about-heart_ip-Img">
          <img src="./src/images/About/heart_ip.png" alt="" />
        </div>
        <div id="about-Content-2">
          <img src="./src/images/About/about-Content-Title_2.png" alt="" />
          <img src="./src/images/About/about-Content_2.png" alt="" />
        </div>
        <Footer />
      </div>
    </>
  )
}