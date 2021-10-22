import About from "./components/about/About";
import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Competition from "./components/competition/Competition";
import WhyJoin from "./components/WhyJoin/WhyJoin";

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
			<WhyJoin />
			{/* <Competition /> */}
		</div>
	);
}

export default App;
