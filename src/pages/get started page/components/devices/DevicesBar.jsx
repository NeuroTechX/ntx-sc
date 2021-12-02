import "../../../../global.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const DeviceBar = () => {
	const { ref, inView } = useInView();
	const animationL = useAnimation();

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
	return (
		<div className="dividerBar" ref={ref}>
			<motion.div
				className="barText"
				initial={{ opacity: 0 }}
				animate={animationL}
			>
				Devices
			</motion.div>
		</div>
	);
};

export default DeviceBar;
