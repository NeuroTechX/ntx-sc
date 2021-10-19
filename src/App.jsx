import About from "./components/about/About";
import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";

function App() {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className="app">
			<Navbar
				menuOpen={menuOpen}
				setMenuOpen={setMenuOpen}
			/>
			{/* <Sidebar
				menuOpen={menuOpen}
				setMenuOpen={setMenuOpen}
			/> */}
			<Landing />
			<About />
		</div>
	);
}

export default App;
