import React from "react";
import PropTypes from "prop-types";
import "./ytembedstyles.css";

const YoutubeEmbed = () => (
	<div className="video-responsive">
		<iframe
			width="1280"
			height="720"
			src="https://www.youtube.com/embed/pX7jzKJHXcQ"
			title="YouTube video player"
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
		></iframe>
	</div>
);

YoutubeEmbed.propTypes = {
	embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
