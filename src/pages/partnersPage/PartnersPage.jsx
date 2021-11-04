import Main from "./components/main partners/Main";
import Landing from "./components/partnersLanding/PartnersLanding";
import WhyJoinBar from "./components/whyJoin/WhyJoinBar";
import WhyJoinInfo from "./components/whyJoin/WhyJoinInfo";
import JoinInfoBar from "./components/JoinInfo/JoinInfoBar";
import JoinInfo from "./components/JoinInfo/JoinInfo";
import News from "./components/news/News";
import Partners from "./components/influencer/Influencers";
import FAQ from "./components/FAQ/FAQ";
import Dashboard from "./components/dashboard/Dashboard";
import Supporters from "./components/supporter/Supporters";

function Home() {
	return (
		<div className="home">
			<Landing />
			<Main />
			<Partners />
			<Supporters />
			<WhyJoinBar />
			<WhyJoinInfo />
			<JoinInfoBar />
			<JoinInfo />
			<News />

			<FAQ />
			<Dashboard />
		</div>
	);
}

export default Home;
