import YoutubeEmbed from "../YoutubeEmbed";
import "./competitionVideo.scss";
import Caligraphy from "../img/light blue.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const Competition = () => {
	const { ref, inView } = useInView({
		threshold: 0.3,
	});
	const animationL = useAnimation();
	const animationR = useAnimation();

	useEffect(() => {
		if (inView) {
			animationL.start({
				x: 0,
				opacity: 1,
				transition: {
					duration: 0.5,
				},
			});
		}
		// if (!inView) {
		// 	animationL.start({ x: "-50vw", opacity: 0 });
		// }
	}, [inView, animationL]);

	useEffect(() => {
		if (inView) {
			animationR.start({
				x: 0,
				opacity: 1,

				transition: {
					duration: 1,
				},
			});
		}
		// if (!inView) {
		// 	animationR.start({ x: "100vw", opacity: 0 });
		// }
	}, [inView, animationR]);

	return (
		<div className="competition">
			<div className="competition-wrapper" ref={ref}>
				<motion.div
					className="archway"
					initial={{ opacity: 0 }}
					animate={animationR}
				>
					<div className="a-top">
						<img src={Caligraphy} alt="" />
					</div>
					<div className="a-bottom">
						<YoutubeEmbed embedId="pX7jzKJHXcQ" />
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Competition;
