import React, {
	useRef,
	useEffect,
	useCallback,
} from "react";
import { Close } from "@material-ui/icons";
import "./prev.scss";
import Poster from "../../assets/splash.png";

const PrevModal = ({
	prevModal,
	setPrevModal,
}) => {
	const modalRef = useRef();

	const closeModal = (e) => {
		if (modalRef.current === e.target) {
			setPrevModal(false);
		}
	};

	const keyPress = useCallback(
		(e) => {
			if (e.key === "Escape" && prevModal) {
				setPrevModal(false);
			}
		},
		[setPrevModal, prevModal]
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
			{prevModal ? (
				<div className="prevModal">
					<div
						className="container"
						ref={modalRef}
						onClick={closeModal}
					>
						<div className="modalWrapper">
							<div className="modalImg">
								<img src={Poster} alt="" />
							</div>
							<div className="modalContent">
								<p>Prev modal test</p>
								{/* <button></button> */}
								<div
									className="closeModalButton"
									onClick={() =>
										setPrevModal((prev) => !prev)
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

export default PrevModal;
