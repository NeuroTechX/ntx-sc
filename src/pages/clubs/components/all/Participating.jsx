import "./participating.scss";
import { studentClubs } from "../data";
import { useState } from "react";

const Participating = () => {
	const [searchTerm, setSearchTerm] = useState("");
	return (
		<div className="participatingInfo">
			<div className="container">
				<input
					type="text"
					placeholder="Search by name, school, or country..."
					className="search"
					onChange={(event) => {
						setSearchTerm(event.target.value);
					}}
				/>
				<div className="cards">
					{studentClubs
						// eslint-disable-next-line
						.filter((val) => {
							if (searchTerm === "") {
								return val;
							} else if (
								val.name
									.toLowerCase()
									.includes(searchTerm.toLowerCase())
							) {
								return val;
							} else if (
								val.school
									.toLowerCase()
									.includes(searchTerm.toLowerCase())
							) {
								return val;
							} else if (
								val.country
									.toLowerCase()
									.includes(searchTerm.toLowerCase())
							) {
								return val;
							}
						})
						.map((data, id) => (
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
