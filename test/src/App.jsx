import { HashRouter, Route, Routes } from "react-router-dom";
import Index from "./index";
import Event from "./Event";
import Article_Bay from "./Article_Bay";
import Membership_myPage from "./Membership_myPage";
import About from "./About";
import FaqPage from "./FaqPage";

export default function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/Event" element={<Event />} />
				<Route path="/Article_Bay" element={<Article_Bay />} />
				<Route path="/Membership_myPage" element={<Membership_myPage />} />
				<Route path="/About" element={<About />} />
				<Route path="/FaqPage" element={<FaqPage />} />
			</Routes>
		</HashRouter>
	)
}