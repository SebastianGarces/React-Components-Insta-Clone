import React, { useState } from "react";

const CommentInput = ({ newComments, setNewComments }) => {
	console.log("new comments", newComments);

	const [newComment, setNewComment] = useState("");

	console.log(newComment);

	return (
		<form
			className="comment-form"
			onSubmit={e => {
				e.preventDefault();
				setNewComments([
					...newComments,
					{ username: "Sebastian", text: newComment }
				]);
			}}
		>
			<input
				type="text"
				value={newComment}
				placeholder="Add comment... "
				onChange={e => setNewComment(e.target.value)}
			/>
		</form>
	);
};

export default CommentInput;
