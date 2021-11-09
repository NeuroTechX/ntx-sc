import "./footer.scss";
import logo from "./icons/Logo.png";

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
					<a
						href="https://neurotechx.com/"
						target="blank"
					>
						<img
							src={logo}
							alt="Logo"
							className="icon"
						/>
					</a>
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
