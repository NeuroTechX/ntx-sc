import Main from "./components/main partners/Main";
import Landing from "./components/partnersLanding/PartnersLanding";
import Partners from "./components/influencer/Influencers";
import Supporters from "./components/supporter/Supporters";
import PreviousSupporters from "./components/previous supporters/PreviousSupporters";

function Home() {
	return (
		<div className="home">
			<Landing />
			<Main />
			<Partners />
			<Supporters />
			<PreviousSupporters />
		</div>
	);
}

export default Home;
