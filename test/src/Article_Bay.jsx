import Btn_goTop from "./component/Btn_goTop";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import './css/Article_Bay.css';

export default function Article_Bay() {

  return (
    <>
      <Navbar />
      <Btn_goTop />
      <img id="navbar-Bg" src="../src/images/index/navbar_Bg.png" alt="" />
      <div className="title-Row">
        <div className="title_Article_Bay">
          <div id="title_Article_Bay_Img">
            <img src="./src/images/Article_Bay/title-Article_Bay.png" alt="" />
          </div>
          {/* 分類按鈕 */}
          <ul className="btn_Article-Type">
            <li
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
                正念冥想
              </span>
            </li>
            <li
              onClick={() => document.getElementById('article_Type2_Img').scrollIntoView({ behavior: 'smooth' })}
              style={{
                position: 'relative',
                display: 'inline-block',
                width: '144px',
                height: '100px'
              }}
            >
              <img
                src="./src/images/btn/new-btn1-normal.png"
                alt="Event Related"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  transition: '0.3s ease',
                  cursor: 'pointer'
                }}
                className="event-btn-img"
                onMouseEnter={() => {
                  document.querySelector('.event-btn-img').src = './src/images/btn/new-btn1-hover.png';  // 切換圖片
                  document.querySelector('.event-btn-text').style.transform = 'top 45%'
                }}
                onMouseLeave={() => {
                  document.querySelector('.event-btn-img').src = './src/images/btn/new-btn1-normal.png';  // 還原
                  document.querySelector('.event-btn-text').style.transform = 'top 45%'
                }}
                onMouseDown={() => {
                  document.querySelector('.event-btn-img').src = './src/images/btn/new-btn1-pressed.png';  // 按下
                  document.querySelector('.event-btn-text').style.transform = 'top 50%';
                }}
                onMouseUp={() => {
                  document.querySelector('.event-btn-img').src = './src/images/btn/new-btn1-normal.png';  // 放開
                  document.querySelector('.event-btn-text').style.transform = 'top 45%'
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
                className="event-btn-text"
                onMouseEnter={() => {
                  document.querySelector('.event-btn-img').src = './src/images/btn/new-btn1-hover.png';  // 切換圖片
                  document.querySelector('.event-btn-text').style.transform = 'top 45%'
                }}
                onMouseLeave={() => {
                  document.querySelector('.event-btn-img').src = './src/images/btn/new-btn1-normal.png';  // 還原
                  document.querySelector('.event-btn-text').style.transform = 'top 45%'
                }}
                onMouseDown={() => {
                  document.querySelector('.event-btn-img').src = './src/images/btn/new-btn1-pressed.png';  // 按下
                  document.querySelector('.event-btn-text').style.transform = 'top 50%';
                }}
                onMouseUp={() => {
                  document.querySelector('.event-btn-img').src = './src/images/btn/new-btn1-normal.png';  // 放開
                  document.querySelector('.event-btn-text').style.transform = 'top 45%'
                }}

              >
                身心健康
              </span>
            </li>
            <li
              onClick={() => document.getElementById('article_Type3_Img').scrollIntoView({ behavior: 'smooth' })}
              style={{
                position: 'relative',
                display: 'inline-block',
                width: '144px',
                height: '100px'
              }}
            >
              <img
                src="./src/images/btn/new-btn1-normal.png"
                alt="Other"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  transition: '0.3s ease',
                  cursor: 'pointer'
                }}
                className="other-btn-img"
                onMouseEnter={() => {
                  document.querySelector('.other-btn-img').src = './src/images/btn/new-btn1-hover.png';  // 切換圖片
                  document.querySelector('.other-btn-text').style.transform = 'top 45%'
                }}
                onMouseLeave={() => {
                  document.querySelector('.other-btn-img').src = './src/images/btn/new-btn1-normal.png';  // 還原
                  document.querySelector('.other-btn-text').style.transform = 'top 45%'
                }}
                onMouseDown={() => {
                  document.querySelector('.other-btn-img').src = './src/images/btn/new-btn1-pressed.png';  // 按下
                  document.querySelector('.other-btn-text').style.transform = 'top 50%';
                }}
                onMouseUp={() => {
                  document.querySelector('.other-btn-img').src = './src/images/btn/new-btn1-normal.png';  // 放開
                  document.querySelector('.other-btn-text').style.transform = 'top 45%'
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
                className='other-btn-text'
                //寫兩次才達到滑鼠到文字或圖片都有ㄎ
                onMouseEnter={() => {
                  document.querySelector('.other-btn-img').src = './src/images/btn/new-btn1-hover.png';  // 切換圖片
                  document.querySelector('.other-btn-text').style.transform = 'top 45%'
                }}
                onMouseLeave={() => {
                  document.querySelector('.other-btn-img').src = './src/images/btn/new-btn1-normal.png';  // 還原
                  document.querySelector('.other-btn-text').style.transform = 'top 45%'
                }}
                onMouseDown={() => {
                  document.querySelector('.other-btn-img').src = './src/images/btn/new-btn1-pressed.png';  // 按下
                  document.querySelector('.other-btn-text').style.transform = 'top 50%';
                }}
                onMouseUp={() => {
                  document.querySelector('.other-btn-img').src = './src/images/btn/new-btn1-normal.png';  // 放開
                  document.querySelector('.other-btn-text').style.transform = 'top 45%'
                }}
              >
                自我接納
              </span>
            </li>
          </ul>
        </div>
        <img src="./src/images/Article_Bay/ipHeart_speak.png" alt="" />
      </div>
      <div id="article-Container">
        <section className="section_article-Type">
          <div className="article_Type_Img">
            <img id="article_Type1_Img" src="./src/images/Article_Bay/title_Type1.png" alt="" />
          </div>
          <div className="article-Card-Column">
            <div className="article-Row">
              <div className='article-Card'>
                <a href="/Article">
                  <img src="./src/images/Article_Bay/meditation_1.png" alt="" />
                </a>
                <div className="article-Card-Content">
                  <small>撰文 / 林郁虹醫師</small>
                  <h2>實踐正念冥想，改善情緒健康</h2>
                  <p>透過正念冥想，我們能夠學會觀察當下的經驗，而不是被過去的回憶或未來的焦慮所困擾。這不僅有助於情緒的穩定，還能增進人際關係的理解與同理心。當我們專注於當下，我們的內心變得更加清晰，應對生活挑戰時也能更加冷靜和理智。</p>
                </div>
              </div>
              <div className='article-Card'>
                <a href="/Article">
                  <img src="./src/images/Article_Bay/meditation_2.png" alt="" />
                </a>
                <div className="article-Card-Content">
                  <small>撰文 / 劉婉玲作家</small>
                  <h2>五分鐘正念冥想，改變你的每一天</h2>
                  <p>每天五分鐘的正念練習，或許看似微不足道，但它的效果卻是顯而易見的。透過短短的片刻專注，你可以讓一整天的心情都保持平和，並在面對挑戰時更加從容。</p>
                </div>
              </div>
            </div>
            <div className="article-Row">
              <div className='article-Card'>
                <a href="/Article">
                  <img src="./src/images/Article_Bay/meditation_3.png" alt="" />
                </a>
                <div className="article-Card-Content">
                  <small>撰文 / 王芷若作家</small>
                  <h2>香氣與指尖交織—平衡身心的冥想時光</h2>
                  <p>當生活壓力積聚時，讓精油的香氣引導你進入正念冥想的狀態。選擇檸檬草或迷迭香精油，將幾滴稀釋後輕輕按摩內關穴，這個穴道位於手腕內側，能有效幫助安撫緊張情緒。在進行穴道按摩的同時，將注意力集中於呼吸與肌膚的觸感，讓每一次觸碰都成為一種正念的練習。透過這種方法，你會發現，冥想不僅是靜止的姿態，還可以是流動的療癒過程。</p>
                </div>
              </div>
              <div className='article-Card'>
                <a href="/Article">
                  <img src="./src/images/Article_Bay/meditation_4.png" alt="" />
                </a>
                <div className="article-Card-Content">
                  <small>撰文 / 陳安琪教授</small>
                  <h2>透過「呼吸」找回內心的寧靜</h2>
                  <p>正念冥想教我們將注意力集中在呼吸上，從而找到內心的平靜。每一次吸氣與吐氣，都是與自己對話的機會。當你感到壓力或焦慮時，不妨閉上眼睛，專注於呼吸，讓心靈回歸當下，感受內在的安穩。</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section_article-Type">
          <div className="article_Type_Img">
            <img id="article_Type2_Img" src="./src/images/Article_Bay/title_Type2.png" alt="" />
          </div>
          <div className="article-Card-Column">
            <div className="article-Row">
              <div className='article-Card'>
                <a href="/Article">
                  <img src="./src/images/Article_Bay/health_1.png" alt="" />
                </a>
                <div className="article-Card-Content">
                  <small>撰文 / 陳彥宇醫師</small>
                  <h2>身心健康；從聆聽自己的需要開始</h2>
                  <p>當我們忙於應付生活的各種挑戰時，往往忽略了內心與身體的真正需求。學會停下來，聆聽自己的聲音，才能更好地照顧自己。這不僅是健康的基礎，也是幸福的源泉。</p>
                </div>
              </div>
              <div className='article-Card'>
                <a href="/Article">
                  <img src="./src/images/Article_Bay/health_2.png" alt="" />
                </a>
                <div className="article-Card-Content">
                  <small>撰文 / 許哲豪醫師</small>
                  <h2>穴道按摩＋生活調理：打造全面健康</h2>
                  <p>穴道按摩的力量，能在簡單的日常中為身體注入活力。當你感到疲憊不堪時，按壓足三里穴能有效增強免疫力。如果搭配生薑或尤加利精油，還能促進血液循環，加速新陳代謝。在每一次按摩的過程中，讓自己專注於觸感與香氣，這種雙重刺激能讓身體回到平衡狀態，為忙碌的生活注入更多能量。</p>
                </div>
              </div>
            </div>
            <div className="article-Row">
              <div className='article-Card'>
                <a href="/Article">
                  <img src="./src/images/Article_Bay/health_3.png" alt="" />
                </a>
                <div className="article-Card-Content">
                  <small>撰文 / 林郁虹醫師</small>
                  <h2>用簡單的運動來管理壓力，找到喘息的空間</h2>
                  <p>當生活壓力積聚時，讓精油的香氣引導你進入正念冥想的狀態。選擇檸檬草或迷迭香精油，將幾滴稀釋後輕輕按摩內關穴，這個穴道位於手腕內側，能有效幫助安撫緊張情緒。在進行穴道按摩的同時，將注意力集中於呼吸與肌膚的觸感，讓每一次觸碰都成為一種正念的練習。透過這種方法，你會發現，冥想不僅是靜止的姿態，還可以是流動的療癒過程。</p>
                </div>
              </div>
              <div className='article-Card'>
                <a href="/Article">
                  <img src="./src/images/Article_Bay/health_4.png" alt="" />
                </a>
                <div className="article-Card-Content">
                  <small>撰文 / 李宛萱醫師</small>
                  <h2>健康飲食，讓身心感受真正的活力</h2>
                  <p>飲食是影響身心健康的重要因素。選擇新鮮且富有營養的食材，不僅能提升身體的健康，也能改善心情。美國醫學研究團隊指出健康飲食是充滿活力的生活方式的基礎。</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section_article-Type">
          <div className="article_Type_Img">
            <img id="article_Type3_Img" src="./src/images/Article_Bay/title_Type3.png" alt="" />
          </div>
          <div className="article-Card-Column">
            <div className="article-Row">
              <div className='article-Card'>
                <a href="/Article">
                  <img src="./src/images/Article_Bay/selfcare_1.png" alt="" />
                </a>
                <div className="article-Card-Content">
                  <small>撰文 / 林書涵醫師</small>
                  <h2>擁抱不完美的自己：幸福的第一步</h2>
                  <p>我們經常對自己過於嚴苛，認為只有完美無缺才能被愛。然而，真正的接納來自於看見自己的缺陷，並學會與之共處。接納自己並不意味著停止改變，而是選擇以更溫柔的方式面對自己。當我們學會欣賞那些不完美的部分，也許正是成為更完整的自己的開始。</p>
                </div>
              </div>
              <div className='article-Card'>
                <a href="/Article">
                  <img src="./src/images/Article_Bay/selfcare_2.png" alt="" />
                </a>
                <div className="article-Card-Content">
                  <small>撰文 / 王芷若作家</small>
                  <h2>別再比較了！每個人都有專屬的價值</h2>
                  <p>在這個充滿比較的時代，我們容易陷入與他人競爭的陷阱。社群媒體上的美好瞬間，讓人感覺自己總是差了一點。但真實的人生不該是如此。與其與他人較量，不如回頭看看自己的獨特價值。停止比較，你會發現內心的重量逐漸減輕，並能更加自在地活出真實的樣子。</p>
                </div>
              </div>
            </div>
            <div className="article-Row">
              <div className='article-Card'>
                <a href="/Article">
                  <img src="./src/images/Article_Bay/selfcare_3.png" alt="" />
                </a>
                <div className="article-Card-Content">
                  <small>撰文 / 陳安琪教授</small>
                  <h2>愛自己，從欣賞每天的小成就開始</h2>
                  <p>每個人都有屬於自己的步伐，不需要與別人同步。即便是微小的進步，也值得被肯定。當你回頭看，會發現那些細微的努力，最終累積成改變的力量。學會欣賞自己的每一步，不僅能讓你更有動力，也能幫助你在追求目標時更感幸福與滿足。</p>
                </div>
              </div>
              <div className='article-Card'>
                <a href="/Article">
                  <img src="./src/images/Article_Bay/selfcare_4.png" alt="" />
                </a>
                <div className="article-Card-Content">
                  <small>撰文 / 林郁虹醫師</small>
                  <h2>接納情緒，與自己的內心和平共處</h2>
                  <p>有時候，我們會因為自己的情緒感到羞愧或焦慮，認為負面情緒是不應該存在的。但事實上，每一種情緒都有其意義。當你學會接受自己的感受，並給予它們一個出口，壓力也會隨之減輕。記住，接納情緒並不代表失去控制，而是選擇與它們和平共處。</p>
                </div>
              </div>
            </div>
            <div className="article-Row">
              <div className='article-Card'>
                <a href="/Article">
                  <img src="./src/images/Article_Bay/selfcare_5.png" alt="" />
                </a>
                <div className="article-Card-Content">
                  <small>撰文 / 林郁虹醫師</small>
                  <h2>學會原諒自己，是成長的關鍵</h2>
                  <p>過去的錯誤常常成為前進的阻礙，因為我們無法原諒自己。然而，真正的成長來自於釋放過去，並學習從中吸取教訓。當你選擇原諒自己，你不僅是在解放內心的重擔，也是在為未來創造更多的可能性。</p>
                </div>
              </div>
              <div className='article-Card'>
                <a href="/Article">
                  <img src="./src/images/Article_Bay/selfcare_6.png" alt="" />
                </a>
                <div className="article-Card-Content">
                  <small>撰文 / 趙鈺婷醫師</small>
                  <h2>真實的美來自於接納自己一切的不完美</h2>
                  <p>接納自己不是一件容易的事，尤其當我們習慣以外界的標準來評價自己。但當你學會專注於內心，找到屬於自己的力量，你會發現世界也隨之改變。這種力量不僅能幫助你面對挑戰，也能讓你活出不一樣的自己。</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}