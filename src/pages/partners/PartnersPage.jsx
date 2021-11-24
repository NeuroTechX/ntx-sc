import Main from "./components/main partners/Main";
import Landing from "./components/partnersLanding/PartnersLanding";
import Partners from "./components/influencer/Influencers";
import PartnerCallToAction from "./components/call to action/PartnerCallToAction";
import Supporter from "./components/supporter/Supporter";
import PreviousSupporter from "./components/previous supporter/PreviousSupporter";

function Home() {
	return (
		<div className="home">
			<Landing />
			<Main />
			<Partners />
			<Supporter />
			<PreviousSupporter />
			<PartnerCallToAction />
		</div>
	);
}

export default Home;
