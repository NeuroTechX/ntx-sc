import "./competitionVideo.scss";
import Caligraphy from "../img/light blue.png";

const Competition = () => {
	return (
		<div className="competition">
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
