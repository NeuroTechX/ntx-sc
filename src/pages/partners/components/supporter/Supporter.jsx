import "./Supporter.scss";
import SupporterBar from "./SupporterBar";
import { supporterData } from "./supporterData";

const Supporter = () => {
	return (
		<>
			<SupporterBar />
			<div className="supporter">
				<div className="container">
					<div className="center">
						{supporterData.map((data, id) => (
							<a
								href={data.link}
								target="_blank"
								rel="noopener noreferrer"
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

export default Supporter;
