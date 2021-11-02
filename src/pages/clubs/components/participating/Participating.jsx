import "./participating.scss";

const Participating = () => {
	return (
		<div className="participatingInfo">
			<div className="container">
				<div className="cards">
					<div className="card">
						<div className="infoBox">
							<div className="textBox">
								<h1>SynapsETS</h1>
								<h2> École de Technologie Supérieure</h2>
							</div>
						</div>
						<div className="imgContainer">
							<img
								src="https://neurotechx.github.io/studentclubs/images/SC-Logos/SynapsETS.png"
								alt=""
							/>
						</div>
					</div>
					<div className="card">
						<div className="infoBox">
							<div className="textBox">
								<h1>NeuroTechUofT</h1>
								<h2>University of Toronto</h2>
							</div>
						</div>
						<div className="imgContainer">
							<img
								src="https://neurotechx.github.io/studentclubs/images/SC-Logos/PolyCortex.png"
								alt=""
							/>
						</div>
					</div>
					<div className="card">
						<div className="infoBox">
							<div className="textBox">
								<h1>Polycortex</h1>
								<h2>Polytechnique de Montréal</h2>
							</div>
						</div>
						<div className="imgContainer">
							<img
								src="https://neurotechx.github.io/studentclubs/images/SC-Logos/NeurotechUofT.png"
								alt=""
							/>
						</div>
					</div>
					<div className="card">
						<div className="infoBox">
							<div className="textBox">
								<h1>McGill NeuroTech</h1>
								<h2>McGill University </h2>
							</div>
						</div>
						<div className="imgContainer">
							<img
								src="https://neurotechx.github.io/studentclubs/images/SC-Logos/McGillNeuroTech.png"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Participating;
