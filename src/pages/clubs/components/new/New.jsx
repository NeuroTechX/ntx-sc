import "./new.scss";
import { newClubs } from "../data";

const New = () => {
	return (
		<div className="newClub">
			<div className="container">
				<div className="cards">
					{newClubs.map((data) => (
						<div className="card">
							<a href={data.link} target="_blank">
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
