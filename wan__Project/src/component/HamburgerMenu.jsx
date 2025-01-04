import React from "react";
import "../css/HamburgerMenu.css"; // 請將樣式文件包含進來

const HamburgerMenu = ({ show, onClose }) => {
	if (!show) return null; // 如果不顯示，返回 null

	return (
		<div className="HamburgerMenu-modal" onClick={onClose}>
			<div onClick={(e) => e.stopPropagation()}>
				<div className="HamburgerMenu-header">
					<div className="modal-close" onClick={onClose}>
						<img src="./src/images/modal_Login/close.png" alt="close" />
					</div>
				</div>
				<div className="HamburgerMenu-content">
					<ul>
						<li><a href="/About"><img src="./src/component/images/HamburgerMenu/About.png" alt="" /></a></li>
						<li><a href="/Event"><img src="./src/component/images/HamburgerMenu/Event.png" alt="" /></a></li>
						<li><a href="/Article_Bay"><img src="./src/component/images/HamburgerMenu/Article_Bay.png" alt="" /></a></li>
						<li><a href="/FaqPage"><img src="./src/component/images/HamburgerMenu/FaqPage.png" alt="" /></a></li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default HamburgerMenu;
