import "./cta.scss";

export default function CalltoAction() {
	return (
		<div className="cta">
			<div className="backgroundColumn"></div>
			<div className="bottom">
				<div className="left">
					<img
						src="https://images.pexels.com/photos/355925/pexels-photo-355925.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						alt=""
					/>
				</div>
				<div className="right">
					<div className="textBox">
						<div className="text">
							<h1>Ready to start a club!?</h1>
							<p>Let’s do it!</p>
							<p>
								Email us:
								<br /> studentclubs [at] neurotechx.com
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
