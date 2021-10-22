import "./WhyJoinInfo.scss";

const WhyJoinInfo = () => {
	return (
		<div className="wji">
			<div className="wji-wrapper">
				<div className="wji-left">
					<h1 className="wji-title">
						WHAT WE’RE ALL ABOUT
					</h1>
					<p className="wji-text">
						Neurotechnology has never been this
						accessible before. We want to catalyze the
						interest and involvement of skilled students
						by providing them with a precise goal to
						work towards and the resources to get there.
					</p>
					<p className="wji-text">
						The NeuroTechX Student Club Competition
						promotes interdisciplinary collaboration,
						preparing the participants for careers and
						excellence in science, technology,
						engineering and mathematics (STEM) through
						self-learning, knowledge sharing, and
						practical experimentation.
					</p>
					<p className="wji-text">
						We believe neurotechnology is key to better
						understanding and to improving who we are.
						We aim to inspire a whole new generation of
						neuroengineers, who will be equipped to
						drive the field forward.
					</p>
					<div className="wji-button-container">
						<button className="wji-button">
							WATCH OUR VIDEO TO LEARN MORE!
						</button>
					</div>
				</div>
				<div className="wji-right">
					<img
						src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1784&q=80"
						alt=""
						className="wji-img"
					/>
				</div>
			</div>
		</div>
	);
};

export default WhyJoinInfo;
