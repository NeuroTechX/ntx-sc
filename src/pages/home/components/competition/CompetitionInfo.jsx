import "./competitionInfo.scss";
import Poster from "./assets/NTXSC-Main.png";
import { Link } from "react-router-dom";

const Competition = () => {
	return (
		<div className="competition-i">
			<div className="competition-wrapper">
				<Link to="/competition" className="column">
					<img src={Poster} alt="" />
					{/* <div className="c-top">
						<h1>COMPETITION 2021-2022</h1>
						<h2>
							THIS IS THE DATE FOR THE COMPETITION
						</h2>
					</div>
					<div className="c-bottom">
						<img
							src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1784&q=80"
							alt=""
						/>
					</div> */}
				</Link>
			</div>
		</div>
	);
};

export default Competition;
