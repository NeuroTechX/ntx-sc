import "./ciLanding.scss";

export default function Landing() {
	return (
		<div
			className="ciLanding"
			// initial={{ opacity: 0 }}
			// animate={{ opacity: 1 }}
			// transition={{ duration: 1, delay: 0.5 }}
		>
			<div className="wrapper">
				<div
					className="welcome"
					// initial={{ y: "100vw" }}
					// animate={{ y: 0 }}
					// transition={{
					// 	type: "spring",
					// 	duration: 2,
					// 	delay: 1,
					// }}
				>
					<div className="banner">
						<h2>NEUROTECHX STUDENT CLUBS</h2>
						<h3>COMPETITION 2021</h3>
					</div>
					<div className="bottom">
						<div className="btn-container">
							<button className="btn">
								ONLINE COMPETITION
							</button>
							<button className="btn">
								PREVIOUS EDITIONS
							</button>
							<button className="btn">
								OVERALL LEADERBOARD
							</button>
							<button className="btn">
								TOP 5 FAVOURITE PROJECTS
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
