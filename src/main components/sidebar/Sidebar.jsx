import "./sidebar.scss";
import logo from "./icons/Logo.png";
import { Link } from "react-router-dom";

export default function Sidebar({
	menuOpen,
	setMenuOpen,
}) {
	return (
		<div
			className={"sidebar " + (menuOpen && "active")}
		>
			<Link
				to="/neurotechxstudentclubs"
				style={{
					textDecoration: "none",
					color: "inherit",
				}}
				onClick={() => setMenuOpen(false)}
			>
				<div className="sidebar-top">
					<span className="brand">
						<img
							src={logo}
							alt="Logo"
							className="icon"
						/>
						Student Clubs
					</span>
				</div>
			</Link>
			<div className="sidebar-center">
				<ul className="list">
					<li className="list-item">
						<Link
							to="/neurotechxstudentclubs"
							style={{
								textDecoration: "none",
								color: "inherit",
							}}
						>
							<span
								className="list-item-text link"
								onClick={() => setMenuOpen(false)}
							>
								Home
							</span>
						</Link>
						<Link
							to="/start"
							style={{
								textDecoration: "none",
								color: "inherit",
							}}
						>
							<span
								className="list-item-text link"
								onClick={() => setMenuOpen(false)}
							>
								Get Started
							</span>
						</Link>
						<Link
							to="/clubs"
							style={{
								textDecoration: "none",
								color: "inherit",
							}}
						>
							<span
								className="list-item-text link"
								onClick={() => setMenuOpen(false)}
							>
								Clubs
							</span>
						</Link>
						<Link
							to="/competition"
							style={{
								textDecoration: "none",
								color: "inherit",
							}}
						>
							<span
								className="list-item-text"
								onClick={() => setMenuOpen(false)}
							>
								Competition
							</span>
						</Link>

						<Link
							to="/partners"
							style={{
								textDecoration: "none",
								color: "inherit",
							}}
						>
							<span
								className="list-item-text"
								onClick={() => setMenuOpen(false)}
							>
								Partners
							</span>
						</Link>
						<Link
							to="/faq"
							style={{
								textDecoration: "none",
								color: "inherit",
							}}
						>
							<span
								className="list-item-text link"
								onClick={() => setMenuOpen(false)}
							>
								FAQ
							</span>
						</Link>
					</li>
				</ul>
			</div>
			<div className="sidebar-bottom"></div>
		</div>
	);
}
