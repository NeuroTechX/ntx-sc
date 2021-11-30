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
					<Link to="/NeuroTechXStudentClubs/">
						<img
							src={logo}
							alt="Logo"
							className="icon"
						/>
					</Link>
					<h1>
						The NeurotechX student club initiative
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
