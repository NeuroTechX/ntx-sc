import About from "./components/about/About";
import Landing from "./components/landing/Landing";
import CompetitionVideo from "./components/competition/CompetitionVideo";
import CompetitionInfo from "./components/competition/CompetitionInfo";
import WhyJoinBar from "./components/whyJoin/WhyJoinBar";
import WhyJoinInfo from "./components/whyJoin/WhyJoinInfo";
import JoinInfoBar from "./components/JoinInfo/JoinInfoBar";
import JoinInfo from "./components/JoinInfo/JoinInfo";
import News from "./components/news/News";
import PartnerBar from "./components/partner/PartnerBar";
import Partners from "./components/partner/Partners";
import Dashboard from "./components/dashboard/Dashboard";

function Home() {
	return (
		<div className="home">
			<Landing />
			<About />
			<WhyJoinBar />
			<WhyJoinInfo />
			<CompetitionVideo />
			<CompetitionInfo />
			<JoinInfoBar />
			<JoinInfo />
			<News />
			<PartnerBar />
			<Partners />
			<Dashboard />
		</div>
	);
}

export default Home;
