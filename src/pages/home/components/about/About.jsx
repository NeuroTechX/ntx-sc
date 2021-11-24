import "./about.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const About = () => {
	const { ref, inView } = useInView();
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
					duration: 0.5,
				},
			});
		}
		// if (!inView) {
		// 	animationR.start({ x: "100vw", opacity: 0 });
		// }
	}, [inView, animationR]);

	return (
		<div className="about" id="about">
			<div className="about-wrapper" ref={ref}>
				<motion.div
					className="about-left"
					initial={{ opacity: 0, x: "-100vw" }}
					animate={animationL}
				>
					<h1 className="about-title">
						WHAT WE’RE ALL ABOUT
					</h1>
					<p className="about-text">
						Neurotechnology has never been this
						accessible before. We want to catalyze the
						interest and involvement of skilled students
						by providing them with a precise goal to
						work towards and the resources to get there.
					</p>
					<p className="about-text">
						The NeuroTechX Student Club Competition
						promotes interdisciplinary collaboration,
						preparing the participants for careers and
						excellence in science, technology,
						engineering and mathematics (STEM) through
						self-learning, knowledge sharing, and
						practical experimentation.
					</p>
					<p className="about-text">
						We believe neurotechnology is key to better
						understanding and to improving who we are.
						We aim to inspire a whole new generation of
						neuroengineers, who will be equipped to
						drive the field forward.
					</p>
					{/* <div className="about-button-container">
						<button className="about-button">
							WATCH OUR VIDEO TO LEARN MORE!
						</button>
					</div> */}
				</motion.div>
				<motion.div
					className="about-right"
					initial={{ opacity: 0, x: "100vw" }}
					animate={animationR}
				>
					<img
						src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						alt=""
						className="about-img"
					/>
				</motion.div>
			</div>
		</div>
	);
};

export default About;
