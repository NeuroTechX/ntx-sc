import Main from "./components/main partners/Main";
import Landing from "./components/partnersLanding/PartnersLanding";
import Partners from "./components/influencer/Influencers";
import PartnerCallToAction from "./components/call to action/PartnerCallToAction";
// import Supporters from "./components/previous supporters/";
// import PreviousSupporters from "./components/previous supporters/PreviousSupporters";

function Home() {
	return (
		<div className="home">
			<Landing />
			<Main />
			<Partners />
			{/* <Supporters /> */}
			{/* <PreviousSupporters /> */}
			<PartnerCallToAction />
		</div>
	);
}

export default Home;
