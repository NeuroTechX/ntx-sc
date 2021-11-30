import "./influencers.scss";
import InfluencersBar from "./InfluencerBar";
import { partnerData } from "./PartnerData";

const Influencers = () => {
	return (
		<>
			<InfluencersBar />
			<div className="influencers">
				<div className="container">
					<div className="center">
						{partnerData.map((data, id) => (
							<a
								href={data.link}
								target="_blank"
								rel="noopener noreferrer"
								key={id}
							>
								<div className="centerCard">
									<img src={data.logo} alt="" />
								</div>
							</a>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Influencers;
