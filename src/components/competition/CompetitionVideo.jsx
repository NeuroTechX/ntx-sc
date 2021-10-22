import "./competition.scss";
import Caligraphy from "../img/light blue 1.png";
import Background from "../img/neurotechx1-bckgnd.png";

const Competition = () => {
	return (
		<div
			className="competition"
			style={{
				backgroundImage: `url(${Background})`,
			}}
		>
			<div className="competition-wrapper">
				<div className="archway">
					<div className="a-top">
						<img src={Caligraphy} alt="" />
					</div>
					<div className="a-bottom"></div>
				</div>
			</div>
		</div>
	);
};

export default Competition;
