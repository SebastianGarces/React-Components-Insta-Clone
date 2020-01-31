// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = ({ comments }) => {
	// Add state for the comments
	// console.log("comments", comments);
	// console.log("postId", postId);
	const [comment, setComment] = useState("");

	return (
		<div>
			{/* map through the comments data and return the Comment component */}
			{comments.map(comment => (
				<Comment username={comment.username} text={comment.text} />
			))}
			<CommentInput />
		</div>
	);
};

export default CommentSection;
