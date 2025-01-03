import React from "react";
import "../css/Modal_Login.css"; // 將您的 CSS 匯入
import { useNavigate } from "react-router-dom";
import { auth, provide } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";

const Modal_Login = ({ show, onClose, onSwitchToSignUp }) => {
  if (!show) return null; // 如果彈窗不顯示，返回 null

  const navigate = useNavigate()
  const login = async () => {
    const result = await signInWithPopup(auth, provide)
    console.log(result)
    navigate("/Membership_myPage")
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>歡迎回來！</h2>
          <button className="modal-close" onClick={onClose}>
            <img src="./src/images/modal_Login/close.png" alt="" />
          </button>
        </div>
        <div className="modal-content">
          <h1 style={{ color: "#1684C8", fontWeight: "bold" }}>登入</h1>
          <p>
            <img src="./images/01.jpg" alt="" style={{ width: "50%" }} />
          </p>
          <form id="modal-Form">
            <input type="text" id="name" name="name" placeholder="請輸入Email帳號" required />
            <input type="text" id="name" name="name" placeholder="請輸入密碼" required />
            <a href="" style={{ textAlign: "right", fontSize: "12px", color: "grey" }}>忘記密碼?</a>
            <a href="/Membership_myPage"><img src="./src/images/modal_Login/btn_Login.png" alt="login" /></a>
          </form>
        </div>
        <div id="modal-Footer">
          <p>還沒有加入我們嗎？</p><button onClick={onSwitchToSignUp} style={{ background: "none", border: "none", color: "#1684C8", cursor: "pointer" }}>點我註冊</button>
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
          <button onClick={login} style={{ background: "none", border: "none", cursor: "pointer" }}><img style={{ width: "80px"}} src="./src/images/modal_Login/Google_Icon.png" alt="" /></button>
        </div>
      </div>
    </div>
  );
};

export default Modal_Login;
