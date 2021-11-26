import "./dashboard.scss";
import { Link } from "react-router-dom";
import DashboardBar from "./DashboardBar";

const Dashboard = () => {
	return (
		<>
			<DashboardBar />
			<div className="dashboard">
				<div className="container">
					<div className="cards">
						<Link
							to="/partners"
							style={{
								textDecoration: "none",
								color: "inherit",
							}}
							className="card"
						>
							<img
								src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
								alt=""
							/>
							<div className="textBox">
								<div className="text">PARTNERS</div>
							</div>
						</Link>

						<Link
							to="/soon"
							style={{
								textDecoration: "none",
								color: "inherit",
							}}
							className="card"
						>
							<img
								src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
								alt=""
							/>
							<div className="textBox">
								<div className="text">EVENTS</div>
							</div>
						</Link>

						<Link
							to="/faq"
							style={{
								textDecoration: "none",
								color: "inherit",
							}}
							className="card"
						>
							<img
								src="https://images.unsplash.com/photo-1557318041-1ce374d55ebf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
								alt=""
							/>
							<div className="textBox">
								<div className="text">FAQS</div>
							</div>
						</Link>

						<Link
							to="/clubs"
							style={{
								textDecoration: "none",
								color: "inherit",
							}}
							className="card"
						>
							<img
								src="https://images.unsplash.com/photo-1634813052299-35818e3fb131?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
								alt=""
							/>
							<div className="textBox">
								<div className="text">CLUBS</div>
							</div>
						</Link>

						<Link
							to="/start"
							style={{
								textDecoration: "none",
								color: "inherit",
							}}
							className="card"
						>
							<img
								src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
								alt=""
							/>
							<div className="textBox">
								<div className="text">GET STARTED</div>
							</div>
						</Link>

						<Link
							to="/competition"
							style={{
								textDecoration: "none",
								color: "inherit",
							}}
							className="card"
						>
							<img
								src="https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
								alt=""
							/>
							<div className="textBox">
								<div className="text">COMPETITION</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
