import React, {
	useRef,
	useEffect,
	useCallback,
} from "react";
import { Close } from "@material-ui/icons";
import "./modal.scss";
import Poster from "../assets/NTXSC-Main.png";

const Modal = ({ compModal, setCompModal }) => {
	const modalRef = useRef();

	const closeModal = (e) => {
		if (modalRef.current === e.target) {
			setCompModal(false);
		}
	};

	const keyPress = useCallback(
		(e) => {
			if (e.key === "Escape" && compModal) {
				setCompModal(false);
			}
		},
		[setCompModal, compModal]
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
			{compModal ? (
				<div className="compModal">
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
								<p>
									2021-2022 Competition Details high-level,
									more coming soon!
								</p>
								{/* <button></button> */}
								<div
									className="closeModalButton"
									onClick={() =>
										setCompModal((prev) => !prev)
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

export default Modal;
