import About from "./components/about/About";
import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import CompetitionVideo from "./components/competition/CompetitionVideo";
import CompetitionInfo from "./components/competition/CompetitionInfo";
import WhyJoinBar from "./components/whyJoin/WhyJoinBar";
import WhyJoinInfo from "./components/whyJoin/WhyJoinInfo";
import JoinInfoBar from "./components/JoinInfo/JoinInfoBar";
import JoinInfo from "./components/JoinInfo/JoinInfo";

function App() {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className="app">
			<Navbar
				menuOpen={menuOpen}
				setMenuOpen={setMenuOpen}
			/>
			<Sidebar
				menuOpen={menuOpen}
				setMenuOpen={setMenuOpen}
			/>
			<Landing />
			<About />
			<WhyJoinBar />
			<WhyJoinInfo />
			<CompetitionVideo />
			<CompetitionInfo />
			<JoinInfoBar />
			<JoinInfo />
		</div>
	);
}

export default App;
