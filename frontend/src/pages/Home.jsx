import React, { useEffect, useState } from "react";
import api from "../api.js";
import Note from "../components/Note.jsx";

const Home = () => {
	const [notes, setNotes] = useState([]);
	const [content, setContent] = useState("");
	const [title, setTitle] = useState("");

	useEffect(() => {
		getNotes();
	}, []);

	const getNotes = () => {
		api.get("/api/notes/")
			.then((res) => res.data)
			.then((data) => {
				setNotes(data);
				console.log(data);
			})
			.catch((err) => alert(err));
	};

	const deleteNote = (id) => {
		api.delete(`/api/notes/delete/${id}/`)
			.then((res) => {
				if (res.status === 204) alert("Note deleted");
				else alert("Failed to delete note.");
				getNotes();
			})
			.catch((error) => alert(error));
	};

	const createNote = (e) => {
		e.preventDefault();
		api.post("/api/notes/", { content, title })
			.then((res) => {
				if (res.status === 201) alert("Note Created!");
				else alert("Failed to make Note!");
				getNotes();
				setTitle("");
				setContent("");
			})
			.catch((err) => alert(err));
	};

	return (
		<div>
			<div className="mb-6">
				<h2 className=" text-2xl font-bold text-gray-400 text-center">
					Notes
				</h2>
				{notes.map((note) => (
					<Note note={note} onDelete={deleteNote} key={note.id} />
				))}
			</div>
			<h2 className="text-2xl font-bold text-center mb-4 text-gray-400">
				Create a Note
			</h2>
			<form
				className="bg-white p-5 rounded-lg shadow-md max-w-lg m-auto border-t-2 border-t-gray-50"
				onSubmit={createNote}
			>
				<label className="font-bold mt-2.5" htmlFor="title">
					Title
				</label>
				<br />
				<input
					className="w-full p-2 mt-2 mb-4 border border-gray-300 rounded box-border"
					type="text"
					id="title"
					name="title"
					required
					onChange={(e) => setTitle(e.target.value)}
					value={title}
				/>
				<label className="font-bold mt-2.5" htmlFor="content">
					Content
				</label>
				<br />
				<textarea
					className="w-full p-2 mt-2 mb-4 border border-gray-300 rounded box-border"
					name="content"
					id="content"
					required
					value={content}
					onChange={(e) => setContent(e.target.value)}
					rows="5"
				></textarea>
				<br />
				<div className="flex justify-center">
					<input
						className="text-white bg-blue-600 py-2.5 px-7 rounded cursor-pointer text-base hover:bg-blue-800"
						type="submit"
						value="Submit"
					/>
				</div>
			</form>
		</div>
	);
};

export default Home;
