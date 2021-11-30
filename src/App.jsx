import Navbar from "./main components/navbar/Navbar";
import OutsideClickHandler from "react-outside-click-handler";
import Sidebar from "./main components/sidebar/Sidebar";
import Footer from "./main components/footer/Footer";
import { useState } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Clubs from "./pages/clubs/Clubs";
import PartnersPage from "./pages/partners/PartnersPage";
import GetStarted from "./pages/get started page/GetStarted";
import CompetitionPage from "./pages/competitionInfo/CompetitionPage";
import FAQLanding from "./pages/FAQ/FAQLanding";
import PageNavigationListener from "./utilities/PageNavigationListener";
import ComingSoon from "./pages/comingSoon/ComingSoon";

function App() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className="app">
			<>
				<Router>
					<OutsideClickHandler
						onOutsideClick={() => setMenuOpen(false)}
					>
						<PageNavigationListener />
						<Navbar
							menuOpen={menuOpen}
							setMenuOpen={setMenuOpen}
						/>
						<Sidebar
							menuOpen={menuOpen}
							setMenuOpen={setMenuOpen}
						/>
					</OutsideClickHandler>
					<Switch>
						<Route path="/neurotechxstudentclubs">
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
							<CompetitionPage />
						</Route>
						<Route path="/faq">
							<FAQLanding />
						</Route>
						<Route path="/soon">
							<ComingSoon />
						</Route>
					</Switch>
					<Footer />
				</Router>
			</>
		</div>
	);
}

export default App;
