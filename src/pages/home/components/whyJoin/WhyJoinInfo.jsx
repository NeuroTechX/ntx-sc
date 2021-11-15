import "./WhyJoinInfo.scss";

const WhyJoinInfo = () => {
	return (
		<div className="wji">
			<div className="wji-wrapper">
				<div className="wji-left">
					<p className="wji-text">
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
