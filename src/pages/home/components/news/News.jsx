import "./news.scss";

export default function News() {
	return (
		<div
			className="news"
			// initial={{ opacity: 0 }}
			// animate={{ opacity: 1 }}
			// transition={{ duration: 1, delay: 0.5 }}
		>
			<div className="wrapper">
				<div
					className="welcome"
					// initial={{ y: "100vw" }}
					// animate={{ y: 0 }}
					// transition={{
					// 	type: "spring",
					// 	duration: 2,
					// 	delay: 1,
					// }}
				>
					<div className="top">
						<h1>NEWS</h1>
					</div>
					<div className="center">
						<h2>
							Updated news here. Might be able to add a
							carousel function right in this text box
							and people can search through old news
						</h2>
						<h3>news news and more news :). </h3>
					</div>
				</div>
			</div>
		</div>
	);
}
