import Gs1 from "./components/gs1/Gs1";
import GtLanding from "./components/GsLanding/GsLanding";

function GetStarted() {
	return (
		<div className="home">
			<GtLanding />
			<Gs1 />
		</div>
	);
}

export default GetStarted;
