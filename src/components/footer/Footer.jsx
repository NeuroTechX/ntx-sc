import "./footer.scss";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footerContainer">
				<div className="left">
					<div className="textbox">
						<h1>ABOUT THIS SITE</h1>
						<p>
							NeuroTechX brings hackers, enthusiasts,
							researchers and experts together to drive
							innovation and foster collaboration at
							local and international scales. Our core
							mission is to build a strong global
							neurotech community by providing key
							resources, learning opportunities, and by
							being leaders in local and worldwide
							technological initiatives. Subscribe to our
							newsletter! We believe neurotechnology is
							key to better understanding and to
							improving who we are. Join us to take part
							in the conversation and help shape the
							future of neurotechnology!
							<br />
							<button> More ›</button>
						</p>
					</div>
				</div>
				<div className="right">
					<h1>LINKS</h1>
					<ul>
						<li>NeuroTechX</li>
						<li>Slack</li>
						<li>Slack</li>
						<li>Github</li>
						<li>README</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
