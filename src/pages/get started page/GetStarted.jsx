import GtLanding from "./components/GsLanding/GsLanding";
import Gs1 from "./components/gs1/Gs1";
import Gs2 from "./components/gs2/Gs2";
import Implications from "./components/implications/Implications";
import Activities from "./components/activities/Activities";
import Fields from "./components/fields/domains/Fields";
import Resources from "./components/resources/Resources";
import Devices from "./components/devices/Devices";
import DevicesBar from "./components/devices/DevicesBar";
import CalltoAction from "./components/cta/CalltoAction";

function GetStarted() {
	return (
		<div className="home">
			<GtLanding />
			<Gs2 />
			<Gs1 />
			<DevicesBar />
			<Devices />
			<Implications />
			<Activities />
			<Fields />
			<CalltoAction />
			<Resources />
		</div>
	);
}

export default GetStarted;
