import "./faq.scss";

const FAQ = () => {
	return (
		<div className="faq">
			<div className="container">
				<h1>FREQUENTLY ASKED QUESTIONS</h1>
				<div className="questionBox">
					<h2>
						Do we have to call our student club
						NeuroTech[something] like most of NeuroTechX
						initiatives and chapters?
					</h2>
					<button>+</button>
				</div>
				<h3 className="answer active">
					No. We actually discourage you to name your
					student club with “NeuroTech” in it, as
					cities Chapters are named NeuroTech[City]. Be
					original!
				</h3>
				<div className="questionBox">
					<h2>
						We have our own project we’d like to work
						on, can we pick our own projects?
					</h2>
					<button>+</button>
					<h3>fdsa</h3>
				</div>
				<div className="questionBox">
					<h2>
						We are not an “official” student club
						recognized by our university, can we still
						be part of NeuroTechX Student Club
						Initiative and Competitions?
					</h2>
					<button>+</button>
					<h3>fdsa</h3>
				</div>
				<div className="questionBox">
					<h2>
						Wow! I want to join, where do I start?
					</h2>
					<button>+</button>
					<h3>fdsa</h3>
				</div>
				<div className="btn-container">
					<button>More FAQs</button>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
