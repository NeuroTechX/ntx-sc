import "./landing.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Landing() {
	return (
		<motion.div
			className="landing"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, delay: 0.5 }}
		>
			<div className="wrapper">
				<motion.div
					className="welcome"
					initial={{ y: "100vw" }}
					animate={{ y: 0 }}
					transition={{
						type: "spring",
						duration: 2,
						delay: 0.3,
					}}
					id="home"
				>
					<div className="top">
						<h1>WELCOME TO</h1>
					</div>
					<div className="center">
						<h2>NTX</h2>
						<h3>STUDENT CLUBS</h3>
					</div>
					<div className="bottom">
						<div className="btn-container">
							<a
								href="#about"
								style={{
									textDecoration: "none",
									color: "inherit",
								}}
							>
								<button className="btn">ABOUT</button>
							</a>
							<Link
								to="/competition"
								style={{
									textDecoration: "none",
									color: "inherit",
								}}
							>
								<button className="btn">
									COMPETITION
								</button>
							</Link>

							<Link
								to="/start"
								style={{
									textDecoration: "none",
									color: "inherit",
								}}
							>
								<button className="btn">
									GET STARTED
								</button>
							</Link>
						</div>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
}
