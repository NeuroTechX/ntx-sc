import CLanding from "./components/clanding/CLanding";
import ParticipatingBar from "./components/all/ParticipatingBar";
import Participating from "./components/all/Participating";
import New from "./components/new/New";
import NewBar from "./components/new/NewBar";
import AlumniBar from "./components/alumni/AlumniBar";
import Alumni from "./components/alumni/Alumni";

function Home() {
	return (
		<div className="home">
			<CLanding />
			<ParticipatingBar />
			<Participating />
			<NewBar />
			<New />
			<AlumniBar />
			<Alumni />
		</div>
	);
}

export default Home;
