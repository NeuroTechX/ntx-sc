import GtLanding from "./components/GsLanding/GsLanding";
import Gs1 from "./components/gs1/Gs1";
import Gs2 from "./components/gs2/Gs2";

function GetStarted() {
	return (
		<div className="home">
			<GtLanding />
			<Gs2 />
			<Gs1 />
		</div>
	);
}

export default GetStarted;
