import React from "react";
import "../css/Modal_Login.css"; // 將您的 CSS 匯入

const Modal_SignUp = ({ show, onClose, onSwitchToLogin }) => {
  if (!show) return null; // 如果彈窗不顯示，返回 null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>歡迎加入！</h2>
          <button className="modal-close" onClick={onClose}>
            <img src="./src/images/modal_Login/close.png" alt="" />
          </button>
        </div>
        <div className="modal-content">
          <h1 style={{ color: "#1684C8", fontWeight: "bold" }}>註冊</h1>
          <p>
            <img src="./images/01.jpg" alt="" style={{ width: "50%" }} />
          </p>
          <form id="modal-Form">
            <input type="text" id="name" name="name" placeholder="請輸入Email帳號" required />
            <input type="text" id="name" name="name" placeholder="請輸入名稱" required />
            <input type="text" id="name" name="name" placeholder="請輸入密碼" required />
            <input type="text" id="name" name="name" placeholder="再次輸入密碼" required />
            <a href="/Membership_myPage"><img src="./src/images/modal_Login/btn_SignUp.png" alt="login" /></a>
          </form>
        </div>
        <div id="modal-Footer">
          <p>已經加入我們了嗎？</p><button onClick={onSwitchToLogin} style={{ background: "none", border: "none", color: "#1684C8", cursor: "pointer" }}>點我登入</button>
        </div>
      </div>
    </div>
  );
};

export default Modal_SignUp;
