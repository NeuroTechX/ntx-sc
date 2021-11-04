import GtLanding from "./components/GtLanding/GtLanding";
import WhyJoinBar from "./components/whyJoin/WhyJoinBar";
import WhyJoinInfo from "./components/whyJoin/WhyJoinInfo";

function GetStarted() {
	return (
		<div className="home">
			<GtLanding />
			<WhyJoinBar />
			<WhyJoinInfo />
		</div>
	);
}

export default GetStarted;
