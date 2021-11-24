import "./cLanding.scss";
import { motion } from "framer-motion";

export default function Landing() {
	return (
		<motion.div
			className="cLanding"
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
					<div className="center">
						<h2>NEUROTECHX</h2>
						<h3>STUDENT CLUBS</h3>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
}
