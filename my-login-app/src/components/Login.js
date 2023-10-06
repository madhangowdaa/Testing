// Login.js

import React, { useState } from 'react';
import './Login.css'; // Add CSS file for styling

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Add your login logic here
	};

	return (
		<div className="login-container">
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
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
		</div>
	);
}

export default Login;
