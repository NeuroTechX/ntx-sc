import CILanding from "./components/CILanding";
import CiMain from "./components/ciMain/CiMain";
import CompetitionInfo from "../home/components/competition/CompetitionInfo";
import CiMain2 from "./components/ciMain2/CiMain2";

function CompetitionPage() {
	return (
		<div className="cInfo">
			<CILanding />
			<CompetitionInfo />
			<CiMain />
			<CiMain2 />
		</div>
	);
}

export default CompetitionPage;
