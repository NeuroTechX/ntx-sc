import Navbar from "./components/navbar/Navbar";
import { useState } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Clubs from "./pages/clubs/Clubs";
import PartnersPage from "./pages/partners page/PartnersPage";
import GetStarted from "./pages/get started page/GetStarted";
import CompetitionInfo from "./pages/competitionInfo/CompetitionInfo";

function App() {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className="app">
			<>
				<Router>
					<Navbar
						menuOpen={menuOpen}
						setMenuOpen={setMenuOpen}
					/>
					<Sidebar
						menuOpen={menuOpen}
						setMenuOpen={setMenuOpen}
					/>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/clubs">
							<Clubs />
						</Route>
						<Route path="/partners">
							<PartnersPage />
						</Route>
						<Route path="/start">
							<GetStarted />
						</Route>
						<Route path="/competition">
							<CompetitionInfo />
						</Route>
					</Switch>
					<Footer />
				</Router>
			</>
		</div>
	);
}

export default App;
