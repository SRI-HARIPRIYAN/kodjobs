import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard.jsx";

const isAuthenticated = () => {
	return localStorage.getItem("auth");
};

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={isAuthenticated() ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
				/>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
