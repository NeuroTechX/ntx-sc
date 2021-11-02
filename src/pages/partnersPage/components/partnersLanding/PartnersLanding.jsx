import "./partnersLanding.scss";

export default function Landing() {
	return (
		<div
			className="landing"
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
					<div className="top">
						<h1>PARTNERS</h1>
					</div>
					<div className="center">
						<h2>
							THANK YOU TO OUR AWESOME PARTNERS
							SUPPORTING NEUROTECH INNOVATION
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
}
