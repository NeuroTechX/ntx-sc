import "./book.scss";

const Book = () => {
	return (
		<div className="book">
			<div className="bookContainer">
				<div className="topText">
					<h2>NTX’S BOOK – FINALLY OUT!</h2>
				</div>
				<div className="imgContainer">
					<a
						href="https://www.amazon.com/Neurotech-Primer-Beginners-Everything-Neurotechnology/dp/B09CKP1D66/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="https://neurotechx.com/wp-content/uploads/2021/12/NTX-Book-Primer-683x1024.jpeg"
							alt=""
						/>
					</a>
				</div>
				<div className="amazonLink">
					<a
						href="https://www.amazon.com/Neurotech-Primer-Beginners-Everything-Neurotechnology/dp/B09CKP1D66/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="https://neurotechx.com/wp-content/uploads/2021/12/AvailAmazon-300x157.png"
							alt=""
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Book;
