import "./main.scss";
import PartnersBar from "./PartnersBar";
import Logo from "../../assets/NTX-Logo-Black.png";
import InfluencerBar from "./InfluencersBar";

const About = () => {
	return (
		<>
			<PartnersBar />

			<div className="main">
				<div className="main-wrapper">
					<div className="neuro">
						<div className="imgContainer">
							<img src={Logo} alt="" />
						</div>
					</div>
					<div className="branch">
						<div className="imgContainer">
							<img
								src="https://d3n8a8pro7vhmx.cloudfront.net/branchout/sites/1/meta_images/original/branchout-logo.png?1422309089"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
			<InfluencerBar />
		</>
	);
};

export default About;
