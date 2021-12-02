import "./PreviousSupporter.scss";
import PreviousSupporterBar from "./PreviousSupporterBar";
import { previousSupporterData } from "./previousSupporterData";

const PreviousSupporter = () => {
	return (
		<>
			<PreviousSupporterBar />
			<div className="previousSupporter">
				<div className="container">
					<div className="center">
						{previousSupporterData.map((data, id) => (
							<a
								style={{
									textDecoration: "none",
									color: "inherit",
								}}
								key={id}
								href={data.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="centerCard">
									<div className="name">{data.name}</div>
								</div>
							</a>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default PreviousSupporter;
