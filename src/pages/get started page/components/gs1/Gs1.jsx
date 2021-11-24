import "./gs1.scss";

export default function Gs1() {
	return (
		<div className="gs1">
			<div className="backgroundColumn"></div>

			<div className="top">
				<div className="left">
					<div className="textBox">
						<div className="text">
							<h1>
								5. Start by reproducing experiments to
								build competences
							</h1>
							<p>Here is a list of resources:</p>

							<ul>
								<li>Curriculum</li>
								<li>NeurotechEDU</li>
								<li>Awesome list of resources</li>
								<li>Badges / Leaderboard</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="right">
					<img
						src="https://images.unsplash.com/photo-1572625259782-94ac200efcdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
						alt=""
					/>
				</div>
			</div>
			<div className="bottom">
				<div className="container">
					<div className="textBox">
						<h1>6. Fabrication space</h1>
						<h2>Many cities have FabLab</h2>
					</div>
				</div>

				<div className="container">
					<div className="textBox">
						<h1>7. Organize your own event(s)</h1>
						<h2>
							Introduction / Demonstration NeuroTech 101
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
}
