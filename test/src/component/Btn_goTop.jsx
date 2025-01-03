import { useEffect, useState } from 'react';
import '../css/Btn_goTop.css'

export default function Btn_goTop() {
  const [isVisible, setIsVisible] = useState(false);

  // 監聽滾動事件
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true); // 顯示按鈕
      } else {
        setIsVisible(false); // 隱藏按鈕
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 清理滾動事件
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 回到頂部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 平滑滾動效果
    });
  };

  return (
    <div>
      {isVisible && (
        <div id="top-btn" onClick={scrollToTop}>
          <img src="./src/images/btn/goTop.svg" alt="goTop" />
        </div>
      )}
    </div>
  );
}