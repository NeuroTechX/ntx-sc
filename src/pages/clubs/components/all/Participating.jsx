import "./participating.scss";
import { studentClubs } from "../data";

const Participating = () => {
	return (
		<div className="participatingInfo">
			<div className="container">
				<div className="cards">
					{studentClubs.map((data, id) => (
						<div className="card">
							<a
								href={data.link}
								target="_blank"
								rel="noopener noreferrer"
								key={id}
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

export default Participating;
