import React from "react";
import PropTypes from "prop-types";
import "./ytembedstyles.css";

const YoutubeEmbed = ({ embedId }) => (
	<div className="video-responsive">
		<iframe
			width="1280"
			height="720"
			src="https://www.youtube.com/embed/pX7jzKJHXcQ"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
	</div>
);

YoutubeEmbed.propTypes = {
	embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
