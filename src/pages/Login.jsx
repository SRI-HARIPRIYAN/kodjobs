import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import usersData from "../assets/users.js";

const Login = () => {
	const [username, setUsername] = useState("user");
	const [password, setPassword] = useState("user@123");
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();
		const user = usersData.find(
			(user) => user.username === username && user.password === password
		);
		if (user) {
			localStorage.setItem("auth", JSON.stringify(user));
			navigate("/dashboard");
		} else {
			alert("Invalid credentials");
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 animate-fade-in">
			<div className="w-full max-w-sm p-6 space-y-6 bg-white shadow-2xl rounded-xl transform hover:scale-105 transition duration-300">
				<h2 className="text-2xl font-bold text-center text-purple-800">Login</h2>
				<form onSubmit={handleLogin} className="space-y-4">
					<input
						type="text"
						placeholder="Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						className="w-full p-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
					/>
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="w-full p-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
					/>
					<button
						type="submit"
						className="w-full p-2 text-white bg-purple-600 rounded-md hover:bg-purple-700 transition duration-300"
					>
						Login
					</button>
				</form>
				<p className="text-center text-gray-500">
					Don't have an account?{" "}
					<Link to="/signup" className="text-purple-500 hover:underline">
						Sign up
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
