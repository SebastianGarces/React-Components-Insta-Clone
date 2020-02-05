import React from "react";

const LikeSection = ({ postLikes, setPostLikes }) => {
	console.log("likes", postLikes);

	const clickHandler = () => setPostLikes(postLikes + 1);

	return (
		<div>
			<div className="like-section" key="likes-icons-container">
				<div className="like-section-wrapper">
					<i className="far fa-heart" onClick={clickHandler} />
				</div>
				<div className="like-section-wrapper">
					<i className="far fa-comment" />
				</div>
			</div>
			<p className="like-number">{`${postLikes} `}likes</p>
		</div>
	);
};

export default LikeSection;
