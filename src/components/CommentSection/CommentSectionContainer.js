// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = ({ comments }) => {
	// Add state for the comments
	const [newComments, setNewComments] = useState(comments);
	console.log("initial comments", newComments);

	return (
		<div>
			{/* map through the comments data and return the Comment component */}
			{newComments.map((comment, index) => (
				<Comment
					username={comment.username}
					text={comment.text}
					key={index}
				/>
			))}
			<CommentInput
				newComments={newComments}
				setNewComments={setNewComments}
			/>
		</div>
	);
};

export default CommentSection;
