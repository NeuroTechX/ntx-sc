import "./clubs.scss";

export default function Clubs() {
	return (
		<div
			className="clubs"
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
					<div className="center">
						<h3>CLUBS</h3>
					</div>
					<div className="bottom">
						<h2>NeuroTechX Affiliated Student Clubs</h2>
					</div>
				</div>
			</div>
		</div>
	);
}
