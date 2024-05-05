import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import LoadingIndicator from "./LoadingIndicator";

const Form = ({ route, method }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const name = method === "login" ? "Login" : "Register";

	const handleSubmit = async (e) => {
		setLoading(true);
		e.preventDefault();

		try {
			const res = await api.post(route, { username, password });
			if (method === "login") {
				localStorage.setItem(ACCESS_TOKEN, res.data.access);
				localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
				navigate("/");
			} else {
				navigate("/login");
			}
		} catch (error) {
			alert(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col items-center justify-center my-12 mx-auto p-5 rounded-lg shadow-md max-w-xl"
		>
			<h1 className="text-3xl font-bold text-center">{name}</h1>
			<input
				className="w-3/4 p-2 my-3 border border-solid border-gray-300 rounded box-border"
				type="text"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				placeholder="Username"
			/>
			<input
				className="w-3/4 p-2 my-3 border border-solid border-gray-300 rounded box-border"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder="Password"
			/>
			{loading && <LoadingIndicator />}
			<button
				className="w-3/5 p-2 my-5 bg-blue-600 text-white border-0 rounded cursor-pointer transition-colors duration-200 ease-in-out hover:bg-blue-800"
				type="submit"
			>
				{name}
			</button>
		</form>
	);
};

export default Form;
