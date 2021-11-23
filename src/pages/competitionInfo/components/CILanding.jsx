import { useState } from "react";
import "./ciLanding.scss";
import CompModal from "./competitionModal/CompModal";
import PrevModal from "./previuosModal/PrevModal";
import ComingModal from "./comingModal/ComingModal";

export default function Landing() {
	const [compModal, setCompModal] =
		useState(false);

	const openModal = () => {
		setCompModal((prev) => !prev);
	};

	const [prevModal, setPrevModal] =
		useState(false);

	const openPrevModal = () => {
		setPrevModal((prev) => !prev);
	};

	const [comingModal, setComingModal] =
		useState(false);

	const openComingModal = () => {
		setComingModal((prev) => !prev);
	};
	return (
		<div
			className="ciLanding"
			// initial={{ opacity: 0 }}
			// animate={{ opacity: 1 }}
			// transition={{ duration: 1, delay: 0.5 }}
		>
			<div className="wrapper">
				<div
					className="welcome"
					// initial={{ y: "100vw" }}
					// animate={{ y: 0 }}
					// transition={{
					// 	type: "spring",
					// 	duration: 2,
					// 	delay: 1,
					// }}
				>
					<div className="banner">
						<h2>NTX STUDENT CLUBS</h2>
						<h3>COMPETITION 2021</h3>
					</div>
					<div className="bottom">
						<div className="btn-container">
							<button
								className="btn"
								onClick={openModal}
							>
								ONLINE COMPETITION
							</button>
							<button
								className="btn"
								onClick={openPrevModal}
							>
								PREVIOUS EDITIONS
							</button>
							<button
								className="btn"
								onClick={openComingModal}
							>
								OVERALL LEADERBOARD
							</button>
							<button
								className="btn"
								onClick={openComingModal}
							>
								TOP 5 FAVOURITE PROJECTS
							</button>
						</div>
					</div>
				</div>
				<CompModal
					compModal={compModal}
					setCompModal={setCompModal}
				/>
				<PrevModal
					prevModal={prevModal}
					setPrevModal={setPrevModal}
				/>
				<ComingModal
					comingModal={comingModal}
					setComingModal={setComingModal}
				/>
			</div>
		</div>
	);
}
