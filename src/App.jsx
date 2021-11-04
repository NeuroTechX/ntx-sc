import Navbar from "./components/navbar/Navbar";
import { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Clubs from "./pages/clubs/Clubs";
import PartnersPage from "./pages/partnersPage/PartnersPage";

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
			<PartnersPage />
			<Footer />
		</div>
	);
}

export default App;
