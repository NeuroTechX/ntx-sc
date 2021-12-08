import "./branding.scss";
import BlueLogo from "../../../../logos/NTX-Logo-blue.png";
import BlackLogo from "../../../../logos/NTX-Logo.png";

const Branding = () => {
	return (
		<div className="branding">
			<div className="brandingContainer">
				<div className="topText">
					<h2>
						Please use one of the following for branding
						purposes
					</h2>
					<div className="logoContainer">
						<div className="logo1">
							<a
								href="https://neurotechx.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={BlackLogo} alt="" />
							</a>
						</div>
						<div className="logo2">
							<a
								href="https://neurotechx.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={BlueLogo} alt="" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Branding;
