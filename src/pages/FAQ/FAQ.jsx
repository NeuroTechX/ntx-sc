import "./faq.scss";
import { Add } from "@mui/icons-material";

const FAQ = () => {
	return (
		<div className="faq">
			<div className="container">
				<div className="questionBox">
					<h2>
						Do we have to call our student club
						NeuroTech[something] like most of NeuroTechX
						initiatives and chapters?
					</h2>
					<div className="seeMore">
						<Add />
					</div>
				</div>
				<h3 className="answer">
					No. We actually discourage you to name your
					student club with “NeuroTech” in it, as
					cities Chapters are named NeuroTech[City]. Be
					original!
				</h3>
				<div className="questionBox">
					<h2>
						Do we have to call our student club
						NeuroTech[something] like most of NeuroTechX
						initiatives and chapters?
					</h2>
					<div className="seeMore">
						<span className="line1"></span>
						<span className="line2"></span>
					</div>
				</div>
				<h3 className="answer">
					No. We actually discourage you to name your
					student club with “NeuroTech” in it, as
					cities Chapters are named NeuroTech[City]. Be
					original!
				</h3>
			</div>
		</div>
	);
};

export default FAQ;
