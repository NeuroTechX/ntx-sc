import GtLanding from "./components/GsLanding/GsLanding";
import Gs1 from "./components/gs1/Gs1";
import Gs2 from "./components/gs2/Gs2";
import Implications from "./implications/Implications";

function GetStarted() {
	return (
		<div className="home">
			<GtLanding />
			<Gs2 />
			<Gs1 />
			<Implications />
		</div>
	);
}

export default GetStarted;
