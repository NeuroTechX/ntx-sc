import { Link } from "react-router-dom";
import "./JoinInfo.scss";

const JoinInfo = () => {
	return (
		<div className="joinInfo">
			<div className="container">
				<div className="infoContainer">
					<Link to="/clubs" className="infoBox">
						<h1>
							I AM A STUDENT INTERESTED IN STARTING A
							CLUB
						</h1>
					</Link>
					<Link to="/partners" className="infoBox">
						<h1>
							I AM A COMPANY INTERESTED IN PARTNERING
						</h1>
					</Link>
					<Link to="/soon" className="infoBox">
						<h1>
							I AM A STUDENT WITH AN NTX AFFILIATED CLUB
							LOOKING FOR RESOURCES
						</h1>
					</Link>
					<Link to="/soon" className="infoBox">
						<h1>
							I’M CURIOUS ABOUT THE PROJECTS STUDENTS ARE
							WORKING ON
						</h1>
					</Link>
				</div>
				<div className="cards">
					<div className="card">
						<img
							src="https://images.unsplash.com/photo-1550071593-fd1bdaf1f93c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
							alt=""
						/>
					</div>
					<div className="card">
						<img
							src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80"
							alt=""
						/>
					</div>
					<div className="card">
						<img
							src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
							alt=""
						/>
					</div>
					<div className="card">
						<img
							src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80 "
							alt=""
						/>
					</div>
				</div>
				<button></button>
			</div>
		</div>
	);
};

export default JoinInfo;
