import React, {
	useRef,
	useEffect,
	useCallback,
} from "react";
import { Close } from "@material-ui/icons";
import "./comingModal.scss";
import Poster from "../assets/NTXSC-Main.png";

const ComingModal = ({
	comingModal,
	setComingModal,
}) => {
	const modalRef = useRef();

	const closeModal = (e) => {
		if (modalRef.current === e.target) {
			setComingModal(false);
		}
	};

	const keyPress = useCallback(
		(e) => {
			if (e.key === "Escape" && comingModal) {
				setComingModal(false);
			}
		},
		[setComingModal, comingModal]
	);

	useEffect(() => {
		document.addEventListener("keydown", keyPress);
		return () =>
			document.removeEventListener(
				"keydown",
				keyPress
			);
	}, [keyPress]);

	return (
		<>
			{comingModal ? (
				<div className="comingModal">
					<div
						className="container"
						ref={modalRef}
						onClick={closeModal}
					>
						<div className="modalWrapper">
							<div className="modalContent">
								<p>Coming Soon!</p>
								{/* <button></button> */}
								<div
									className="closeModalButton"
									onClick={() =>
										setComingModal((prev) => !prev)
									}
								>
									<Close />
								</div>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};

export default ComingModal;
