import "./alumni.scss";
import { alumniClubs } from "../data";

const New = () => {
	return (
		<div className="newClub">
			<div className="container">
				<div className="cards">
					{alumniClubs.map((data) => (
						<div className="card">
							<a
								href={data.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="infoBox">
									<div className="textBox">
										<h1>{data.name}</h1>
										<h2>{data.school}</h2>
									</div>
								</div>
							</a>

							<div className="imgContainer">
								<img src={data.logo} alt="" />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default New;
