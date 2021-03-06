import Book from "./Book";
import Branding from "./Branding";
import "./resources.scss";

export default function Resources() {
	return (
		<div className="resources">
			<div className="banner">
				<h1>RESOURCES</h1>
			</div>
			<div className="container">
				<div className="infoContainer">
					<a
						href="https://neurotechedu.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="infoBox"
					>
						<h1>EDU</h1>
					</a>
					<a
						href="https://teespring.com/shop/neurotechx?pid=369&cid=6513"
						target="_blank"
						rel="noopener noreferrer"
						className="infoBox"
					>
						<h1>NTX SWAG</h1>
					</a>
					<a
						href="https://neurotechx-hardware-hub.myshopify.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="infoBox"
					>
						<h1>NTX STORE</h1>
					</a>
				</div>
				<div className="cards">
					<div className="card">
						<img
							src="https://images.unsplash.com/photo-1550071593-fd1bdaf1f93c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
							alt=""
						/>
						<h2>fdsa</h2>
					</div>
					<div className="card">
						<img
							src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80"
							alt=""
						/>
						<h2>fdsa</h2>
					</div>
					<div className="card">
						<img
							src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
							alt=""
						/>
						<h2>fdsa</h2>
					</div>
				</div>
				<button></button>
			</div>
			<Book />
			<Branding />
		</div>
	);
}
