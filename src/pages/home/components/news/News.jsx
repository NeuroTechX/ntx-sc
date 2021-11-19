import "./news.scss";
import Arrow from "../../assets/arrow.png";
import { NewsData } from "./newsData";
import { useState } from "react";

export default function News() {
	const [currentSlide, setCurrentSlide] =
		useState(0);
	const handleClick = (way) => {
		way === "left"
			? setCurrentSlide(
					currentSlide > 0 ? currentSlide - 1 : 2
			  )
			: setCurrentSlide(
					currentSlide < NewsData.length - 1
						? currentSlide + 1
						: 0
			  );
	};
	return (
		<div className="news">
			<div
				className="slider"
				style={{
					transform: `translateX(-${
						currentSlide * 100
					}vw)`,
				}}
			>
				{NewsData.map((data) => (
					<div className="container">
						<div className="item">
							<div className="left">
								<div className="leftContainer">
									<div className="newsContainer">
										<h1>{data.title}</h1>
									</div>
									<h2>{data.subTitle}</h2>
									<p>{data.body}</p>
									<span>Read More</span>
								</div>
							</div>
							<div className="right">
								<img src={data.img} alt="" />
							</div>
						</div>
					</div>
				))}
			</div>
			<img
				src={Arrow}
				className="arrow left"
				alt=""
				onClick={() => handleClick("left")}
			/>
			<img
				src={Arrow}
				className="arrow right"
				alt=""
				onClick={() => handleClick("right")}
			/>
		</div>
	);
}
