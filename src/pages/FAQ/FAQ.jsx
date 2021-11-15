import "./faq.scss";
import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";
import { FAQData } from "./FAQData";

const FAQ = () => {
	const [clicked, setClicked] = useState(false);

	const toggle = (index) => {
		if (clicked === index) {
			return setClicked(null);
		}

		setClicked(index);
	};

	return (
		<div className="faq">
			<div className="container">
				{FAQData.map((item, index) => {
					return (
						<>
							<div
								className="questionBox"
								onClick={() => toggle(index)}
								key={index}
							>
								<h2>{item.question}</h2>
								<div className="seeMore">
									{clicked === index ? (
										<Remove />
									) : (
										<Add />
									)}
								</div>
							</div>
							{clicked === index ? (
								<h3 className="answer ">{item.answer}</h3>
							) : null}
						</>
					);
				})}
			</div>
		</div>
	);
};

export default FAQ;
