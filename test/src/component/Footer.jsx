import "../css/Footer.css";

export default function Footer() {
    return (
        <>
            <footer id='footer' >
                <div>
                    <img src="./src/images/index/footer_wan.png" alt="Footer" />
                    <div id='footer-a'>
                        <a href="/">首頁</a>
                        <a href="/Event">探索體驗村</a>
                        <a href="/Article_Bay">心途之灣</a>
                        <a href="/Membership_myPage">會員中心</a>
                        <a href="/About">關於我們</a>
                        <a href="/FaqPage">常見問題</a>
                    </div>
                    <small id='copyright'>© 2024 灣 Wan. All rights reserved.</small>
                </div>
            </footer>
        </>
    )
}