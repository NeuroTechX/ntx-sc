import "./gsLanding.scss";
import { motion } from "framer-motion";

export default function GsLanding() {
	return (
		<motion.div
			className="gsLanding"
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
						<h2>GET STARTED</h2>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
}
