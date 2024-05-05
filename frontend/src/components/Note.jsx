import React from "react";

const Note = ({ note, onDelete }) => {
	const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");

	return (
		<div className="px-4 py-3 my-5 border border-gray-300 rounded-md bg-gray-50 border-l-8 border-l-gray-200">
			<p className="text-base text-gray-400">{note.title}</p>
			<p className="text-base text-gray-600 my-px">{note.content}</p>
			<p className=" text-xs text-gray-800">{formattedDate}</p>
			<button
				className="bg-red-600 text-xs text-white border-0 px-4 py-2 my-1 rounded-md cursor-pointer transition-colors duration-200 ease-in-out hover:bg-red-800"
				onClick={() => onDelete(note.id)}
			>
				Delete
			</button>
		</div>
	);
};

export default Note;
