import "./WhyJoinInfo.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const WhyJoinInfo = () => {
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
		<div className="wji">
			<div className="wji-wrapper">
				<div className="wji-left" ref={ref}>
					<motion.p
						className="wji-text"
						initial={{ opacity: 0, x: "-100vw" }}
						animate={animationL}
					>
						<ul>
							<li> Access to resources. </li>
							<li>Access to competitions.</li>
							<li> Access to our partners. </li>
							<li>
								Access to internship & job opportunities.
							</li>
							<li>
								Access to research labs. (for graduate
								programs & RA)
							</li>
							<li>
								Be part of the International
								Neurotechnology Network.
							</li>
							<li> Be part of this amazing journey!</li>
							<li>Help us shape the future. </li>
							<li>Get visibility.</li>
							<li>Both for you and your school. </li>
							<li>Discounts with</li>
							<li>
								our partners (hardware, events, etc.)
							</li>
						</ul>
					</motion.p>

					<div className="wji-button-container">
						<button className="wji-button">
							WATCH OUR VIDEO TO LEARN MORE!
						</button>
					</div>
				</div>
				<div className="wji-right" ref={ref}>
					<motion.img
						src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1784&q=80"
						alt=""
						className="wji-img"
						initial={{ opacity: 0, x: "100vw" }}
						animate={animationR}
					/>
				</div>
			</div>
		</div>
	);
};

export default WhyJoinInfo;
