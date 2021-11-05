import GtLanding from "./components/GsLanding/GsLanding";
import Gs1 from "./components/gs1/Gs1";
import Gs2 from "./components/gs2/Gs2";
import Implications from "./implications/Implications";
import Activities from "./components/activities/Activities";
import Fields from "./components/fields/domains/Fields";

function GetStarted() {
	return (
		<div className="home">
			<GtLanding />
			<Gs2 />
			<Gs1 />
			<Implications />
			<Activities />
			<Fields />
		</div>
	);
}

export default GetStarted;
