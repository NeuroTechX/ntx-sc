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
			∫
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
			<div className="sidebar-center">
				<ul className="list">
					<li className="list-item">
						<Link
							to="/"
							style={{
								textDecoration: "none",
								color: "inherit",
							}}
						>
							<span className="list-item-text link">
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
							<span className="list-item-text link">
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
							<span className="list-item-text link">
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
							<span className="list-item-text">
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
							<span className="list-item-text">
								Partners
							</span>
						</Link>
					</li>
				</ul>
			</div>
			<div className="sidebar-bottom"></div>
		</div>
	);
}
