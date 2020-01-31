import React from "react";

const LikeSection = ({ likes }) => {
	console.log("likes", likes);

	return (
		<div>
			<div className="like-section" key="likes-icons-container">
				<div className="like-section-wrapper">
					<i className="far fa-heart" />
				</div>
				<div className="like-section-wrapper">
					<i className="far fa-comment" />
				</div>
			</div>
			<p className="like-number">{`${likes} `}likes</p>
		</div>
	);
};

export default LikeSection;
