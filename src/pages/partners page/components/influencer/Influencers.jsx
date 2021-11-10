import "./influencers.scss";
import InfluencersBar from "./InfluencerBar";

const Influencers = () => {
	return (
		<>
			<InfluencersBar />
			<div className="influencers">
				<div className="container">
					<div className="center">
						<a
							href="https://shop.openbci.com/collections/frontpage"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="centerCard">
								<img
									src="https://www.lulzbot.com/sites/default/files/openbci-logo.png"
									alt=""
								/>
							</div>
						</a>
						<a
							href="https://neuralink.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="centerCard">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Neuralink_logo.svg/1200px-Neuralink_logo.svg.png"
									alt=""
								/>
							</div>
						</a>
						<a
							href="https://www.cognixion.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="centerCard">
								<img
									src="https://images.squarespace-cdn.com/content/v1/5a0c82936957da9f556f5c30/1546991933340-F39NG3RW6TKBTS6506Y4/CXN_WMARK_FC_DARK_DGTL.png?format=2500w"
									alt=""
								/>
							</div>
						</a>
						<a
							href="https://neurable.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="centerCard">
								<img
									src="https://maat.neurable.com/uploads/-/system/appearance/logo/1/LogoDark_StackCMYK.png"
									alt=""
								/>
							</div>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Influencers;
