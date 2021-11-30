import "./ciMain.scss";

const ciMain = () => {
	return (
		<div className="ciMain">
			<div className="backgroundColumn"></div>

			<div className="top">
				<div className="left">
					<div className="textBox">
						<div className="text">
							<h1>2021-2022 Student Competition</h1>
							<h2>
								Each year NTX organizes its famous NTX
								Student Club Competition where 20+ student
								clubs submit their project(s). Over the
								past few years we’ve been impressed with
								the increasing quality of projects and
								this year we’re challenging ourselves, as
								an organization, to put forward the best
								competition to date. The theme of the
								competition, this year, is Visual BCI for
								Communication. There will be two (2)
								parts; the Offline Part and the Online
								Part
							</h2>
						</div>
					</div>
				</div>
				<div className="right">
					<img
						src="https://images.pexels.com/photos/724994/pexels-photo-724994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						alt=""
					/>
				</div>
			</div>
			<div className="bottom">
				<div className="container">
					<div className="textBox">
						<h1>Offline Part</h1>
						<h2>
							The offline part consists of a similar
							format than previous years were the clubs
							will submit their project in a video format
							with their code and relevant files.
						</h2>
					</div>
				</div>

				<div className="container">
					<div className="textBox">
						<h1>Online Part</h1>
						<h2>
							The online part consists of a live virtual
							event (e.g. Zoom) where the clubs will have
							to use their BCI live over the Internet to
							communicate with the jury.
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ciMain;
