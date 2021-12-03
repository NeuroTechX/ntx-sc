import "./footer.scss";
import logo from "./icons/Logo.png";
import { Link } from "react-router-dom";

import {
	Twitter,
	Facebook,
	LinkedIn,
	GitHub,
} from "@mui/icons-material";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footerContainer">
				<div className="left">
					<Link to="/n">
						<img
							src={logo}
							alt="Logo"
							className="icon"
						/>
					</Link>
					<h1>
						The{" "}
						<a
							href="https://neurotechx.com/"
							target="_blank"
							rel="noopener noreferrer"
							style={{
								cursor: "pointer",
								textDecoration: "none",
								color: "#31afbe",
							}}
						>
							NeuroTechX{" "}
						</a>
						student club initiative
					</h1>
				</div>
				<div className="right">
					<a
						href="https://twitter.com/neurotechx"
						target="blank"
					>
						<Twitter className="icon" />
					</a>
					<a
						href="https://www.facebook.com/neurotechx"
						target="blank"
					>
						<Facebook className="icon" />
					</a>
					<a
						href="https://www.linkedin.com/company/neurotechx/"
						target="blank"
					>
						<LinkedIn className="icon" />
					</a>
					<a
						href="https://github.com/NeuroTechX/"
						target="blank"
					>
						<GitHub className="icon" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
