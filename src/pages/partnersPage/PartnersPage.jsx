import About from "./components/main/Main";
import Landing from "./components/partnersLanding/PartnersLanding";
import WhyJoinBar from "./components/whyJoin/WhyJoinBar";
import WhyJoinInfo from "./components/whyJoin/WhyJoinInfo";
import JoinInfoBar from "./components/JoinInfo/JoinInfoBar";
import JoinInfo from "./components/JoinInfo/JoinInfo";
import News from "./components/news/News";
import PartnerBar from "./components/partner/PartnerBar";
import Partners from "./components/partner/Partners";
import FAQ from "./components/FAQ/FAQ";
import Dashboard from "./components/dashboard/Dashboard";

function Home() {
	return (
		<div className="home">
			<Landing />
			<About />
			<WhyJoinBar />
			<WhyJoinInfo />
			<JoinInfoBar />
			<JoinInfo />
			<News />
			<PartnerBar />
			<Partners />
			<FAQ />
			<Dashboard />
		</div>
	);
}

export default Home;
