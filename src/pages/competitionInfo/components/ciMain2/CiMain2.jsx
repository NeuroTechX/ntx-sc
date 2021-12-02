import "./ciMain2.scss";
import Sponsors from "../../assets/sponsors.png";

const ciMain2 = () => {
	return (
		<div className="ciMain2">
			<div className="backgroundColumn"></div>

			<div className="top">
				<div className="left">
					<div className="textBox">
						<div className="text">
							<h1>Prize Details</h1>
							<ul>
								<li>
									Offline - SSVEP Challenge - 1st Place:
									Cognixion ONE (sponsored by Cognixion)
								</li>
								<li>
									Offline - ERP Challenge - 1st Place:
									$1000 (sponsored by OpenBCI) Offline -
									Other Challenge: 1st Place: Eten
									(sponsored by Neurable)
								</li>
								<li>
									Online - Grand Winner (1st Place): $2000
									(sponsored by FB - FRL)
								</li>
								<li>
									Online - Runner-up (2nd Place): $500
									(sponsored by TBD)
								</li>
								<li>
									Best Engineering Award: $1000 (sponsored
									by Neuralink)
								</li>
								<li>
									Best Human Factors Award: $500 (sponsored
									by Cognixion)
								</li>
								<li>
									Internships: Cognixion offers an
									internship to a project of their
									choosing.
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="right">
					<img src={Sponsors} alt="" />
				</div>
			</div>
			<div className="bottom">
				<div className="container">
					<div className="textBox">
						<h2>
							More details soon!
							<br />
							In the meantime, have a look at some
							high-level information about the
							<a
								href="https://docs.google.com/document/d/1vvV8xXl9qIk3tamZLFtp6ODZFCGc4foXpERsVglyGiE/edit#"
								target="_blank"
								rel="noopener noreferrer"
								style={{
									cursor: "pointer",
									textDecoration: "none",
									color: "#31afbe",
								}}
							>
								{" "}
								competition:{" "}
							</a>
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ciMain2;
