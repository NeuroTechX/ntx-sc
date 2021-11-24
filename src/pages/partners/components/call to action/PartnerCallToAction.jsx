import "./partnerCTA.scss";

export default function PartnerCallToAction() {
	return (
		<div className="cta">
			<div className="bottom">
				<div className="left">
					<img
						src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
						alt=""
					/>
				</div>
				<div className="right">
					<div className="textBox">
						<div className="text">
							<h1>Support this initiative.</h1>
							<p>Email us:</p>
							<p>studentclubs@neurotechx.com</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
