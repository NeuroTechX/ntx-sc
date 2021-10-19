import "./sidebar.scss";
import logo from "./icons/Logo.png";

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
						<span className="list-item-text">Home</span>
						<span className="list-item-text">
							Get Started
						</span>
						<span className="list-item-text">
							Clubs
						</span>
						<span className="list-item-text">
							Competition
						</span>
						<span className="list-item-text">
							Events
						</span>
						<span className="list-item-text">
							Partners
						</span>
						<span className="list-item-text">
							Resources
						</span>
						<span className="list-item-text">FAQ</span>
						<span className="list-item-text">
							About
						</span>
					</li>
				</ul>
			</div>
			<div className="sidebar-bottom"></div>
		</div>
	);
}
