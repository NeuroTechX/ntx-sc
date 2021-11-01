import Landing from "./components/landing/Landing";
import JoinInfoBar from "./components/JoinInfo/JoinInfoBar";
import JoinInfo from "./components/JoinInfo/JoinInfo";

function Home() {
	return (
		<div className="home">
			<Landing />

			<JoinInfoBar />
			<JoinInfo />
		</div>
	);
}

export default Home;
