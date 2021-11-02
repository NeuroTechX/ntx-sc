import CLanding from "./components/clanding/CLanding";
import ParticipatingBar from "./components/participating/ParticipatingBar";
import Participating from "./components/participating/Participating";

function Home() {
	return (
		<div className="home">
			<CLanding />
			<ParticipatingBar />
			<Participating />
		</div>
	);
}

export default Home;
