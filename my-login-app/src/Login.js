// Login.js

import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the external CSS file

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleLogin = async (e) => {
		e.preventDefault(); // Prevent the default form submission

		try {
			const response = await axios.post(
				'http://afc7a104784594208b12c3474fa3c924-1060237241.us-east-2.elb.amazonaws.com:9002/login',
				{
					email,
					password,
				}
			);

			console.log('API Response:', response);

			// Check if the response contains a JWT token
			if (response.data.token) {
				// Store the token securely (e.g., in localStorage)
				localStorage.setItem('jwtToken', response.data.token);

				// Redirect to the dashboard or another protected page
				window.location.href = '/dashboard';
			} else {
				setError('Login failed. Invalid response.');
			}
		} catch (error) {
			console.error('Login failed:', error);
			setError('Login failed: ' + error.message);
		}
	};

	return (
		<div className="login-container">
			<h1>Login</h1>
			<form onSubmit={handleLogin}>
				<div className="form-group">
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={handleEmailChange}
						required
						placeholder="Enter your email"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={handlePasswordChange}
						required
						placeholder="Enter your password"
					/>
				</div>
				<button type="submit">Login</button>
			</form>
			{error && <p className="error">{error}</p>}
		</div>
	);
}

export default Login;
