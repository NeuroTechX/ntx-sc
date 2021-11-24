import "./comingSoon.scss";
import { Link } from "react-router-dom";

export default function ComingSoon() {
	return (
		<div
			className="comingSoon"
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
					id="home"
				>
					<div className="top">
						<h1>THIS PAGE</h1>
					</div>
					<div className="center">
						<h2>COMING SOON</h2>
						<Link
							to="/"
							style={{
								textDecoration: "none",
								color: "inherit",
							}}
							className="btn-container"
						>
							<button className="btn">HOME</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
