import "./footer.scss";

import { Twitter } from "@mui/icons-material";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footerContainer">
				<div className="left">
					<div className="textBox"></div>
				</div>
				<div className="right">
					<Twitter />
				</div>
			</div>
		</div>
	);
};

export default Footer;
