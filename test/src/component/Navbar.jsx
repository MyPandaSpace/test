import { useState } from "react";
import Modal_Login from "./Modal_Login";
import Modal_SignUp from "./Modal_Signup";
import "../css/Navbar.css";
import HamburgerMenu from './HamburgerMenu';

export default function Navbar() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const [isLoginMode, setIsLoginMode] = useState(true); // 控制顯示登入或註冊視窗

	const handleOpenModal = () => setIsModalOpen(true);

	const handleCloseModal = () => setIsModalOpen(false);

	// 切換到註冊頁面
	const switchToSignUp = () => setIsLoginMode(false);

	// 切換到登入頁面
	const switchToLogin = () => setIsLoginMode(true);

	const [isMenuOpen, setIsMenuOpen] = useState(false); // 控制彈窗顯示與否

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen); // 切換顯示狀態
	};

	return (
		<>
			<header id='navbar'>
				<a href="/"><img id="logo" src="./src/images/index/logo.svg" alt="logo" /></a>
				<div id='icon'>
					<div onClick={handleOpenModal} style={{ cursor: "pointer" }}><img id="icon-Member" src="./src/images/index/icon-Member.svg" alt="Member" /></div>
					<div onClick={toggleMenu} style={{ cursor: "pointer" }}><img id="icon-Hamburger" src="./src/images/index/icon-Hamburger.svg" alt="Hamburger" /></div>
				</div>

				{/* 根據 isLoginMode 顯示不同的彈窗 */}
				{isModalOpen && (
					isLoginMode ? (
						<Modal_Login show={isModalOpen} onClose={handleCloseModal} onSwitchToSignUp={switchToSignUp} />
					) : (
						<Modal_SignUp show={isModalOpen} onClose={handleCloseModal} onSwitchToLogin={switchToLogin} />
					)
				)}
				{/* 顯示選單彈窗 */}
				<HamburgerMenu show={isMenuOpen} onClose={toggleMenu} />
			</header>
		</>
	)
}