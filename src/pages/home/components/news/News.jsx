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
						<h1>News</h1>
					</div>
					<div className="center">
						<h2>
							Lorem ipsum dolor sit amet consectetur
							adipisicing elit.
						</h2>
						<h3>
							Lorem ipsum dolor sit amet consectetur,
							adipisicing elit. Asperiores pariatur earum
							temporibus reprehenderit aspernatur tempora
							est, recusandae iure quo sunt fugit
							excepturi, veritatis itaque, nostrum quis
							maxime voluptas porro rem. Lorem ipsum
							dolor sit amet consectetur, adipisicing
							elit. Asperiores pariatur earum temporibus
							reprehenderit aspernatur tempora est,
							recusandae iure quo sunt fugit excepturi,
							veritatis itaque, nostrum quis maxime
							voluptas porro rem. Lorem ipsum dolor sit
							amet consectetur, adipisicing elit.
							Asperiores pariatur earum temporibus
							reprehenderit aspernatur tempora est,
							recusandae iure quo sunt fugit excepturi,
							veritatis itaque, nostrum quis maxime
							voluptas porro rem. Lorem ipsum dolor sit
							amet consectetur, adipisicing elit.
							Asperiores pariatur earum temporibus
							reprehenderit aspernatur tempora est,
							recusandae iure quo sunt fugit excepturi,
							veritatis itaque, nostrum quis maxime
							voluptas porro rem.
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
}
