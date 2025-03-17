import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import usersData from "../assets/users";

const Signup = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const navigate = useNavigate();

	const handleSignup = (e) => {
		e.preventDefault();

		const userExists = usersData.some((user) => user.username === username);

		if (userExists) {
			alert("Username already exists");
			return;
		}

		const newUser = { username, password, email };
		usersData.push(newUser);
		localStorage.setItem("auth", JSON.stringify({ username, password }));
		alert("Signup successful!");
		navigate("/dashboard");
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-100 to-indigo-200">
			<div className="w-full max-w-md p-8 space-y-6 bg-white shadow-xl rounded-2xl transform transition-all hover:scale-105">
				<h2 className="text-3xl font-extrabold text-center text-indigo-800">Sign Up</h2>
				<form onSubmit={handleSignup} className="space-y-6">
					<input
						type="text"
						placeholder="Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						className="w-full p-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
					/>
					<input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="w-full p-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
					/>
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="w-full p-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
					/>
					<button
						type="submit"
						className="w-full p-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md"
					>
						Sign Up
					</button>
				</form>
				<p className="text-center text-gray-600">
					Already have an account?{" "}
					<Link to="/login" className="text-indigo-500 hover:underline">
						Login
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Signup;
