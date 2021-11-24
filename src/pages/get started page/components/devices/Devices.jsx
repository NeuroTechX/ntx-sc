import "./Devices.scss";

const Devices = () => {
	return (
		<div className="devices">
			<div className="container">
				<div className="infoContainer">
					<a
						href="https://www.unicorn-bi.com/brain-interface-technology/"
						target="_blank"
						rel="noopener noreferrer"
						className="infoBox"
					>
						<h1>Unicorn Brain Interface</h1>
					</a>

					<a
						href="https://www.emotiv.com/epoc/"
						target="_blank"
						rel="noopener noreferrer"
						className="infoBox"
					>
						<h1>EMOTIV EPOC+</h1>
					</a>
					<a
						href="https://shop.openbci.com/collections/frontpage/products/ganglion-board?variant=13461804483"
						target="_blank"
						rel="noopener noreferrer"
						className="infoBox"
					>
						<h1>Ganglion Board (4-channels)</h1>
					</a>
				</div>
				<div className="cards">
					<div className="card">
						<img
							src="https://www.unicorn-bi.com/wp-content/uploads/2020/02/unicorn-hybrid-black-electrode-connectors-03.jpg"
							target="_blank"
							rel="noopener noreferrer"
							alt=""
						/>
					</div>

					<div className="card">
						<img
							src="https://cdn-bhgin.nitrocdn.com/fYiCbyekuWxdwsIavStGyhFBtSFZmwkM/assets/static/optimized/rev-7a97d2f/uploads/2018/05/epoc-three-quarters-view.png"
							alt=""
							target="_blank"
							rel="noopener noreferrer"
						/>
					</div>

					<div className="card">
						<img
							src="https://cdn.shopify.com/s/files/1/0613/9353/products/DSC02775_1024x1024.jpg?v=1614761290"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Devices;
