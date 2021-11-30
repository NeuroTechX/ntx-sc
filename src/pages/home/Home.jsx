import About from "./components/about/About";
import Landing from "./components/landing/Landing";
import CompetitionVideo from "./components/competition/CompetitionVideo";
import CompetitionInfo from "./components/competition/CompetitionInfo";
import WhyJoinBar from "./components/whyJoin/WhyJoinBar";
import WhyJoinInfo from "./components/whyJoin/WhyJoinInfo";
import HowJoinBar from "./components/JoinInfo/HowJoinBar";
import JoinInfo from "./components/JoinInfo/JoinInfo";
// import News from "./components/news/News";
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
			<HowJoinBar />
			<JoinInfo />
			{/* <News /> */}
			<Partners />
			<Dashboard />
		</div>
	);
}

export default Home;
