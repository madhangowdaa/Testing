// App.js

import React, { useState } from 'react';
import './App.css';

function App() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true); // Show loading indicator

		try {
			// Simulate API request with a delay (replace with actual API request)
			await new Promise((resolve) => setTimeout(resolve, 1000));

			// Check if credentials are valid (replace with actual authentication logic)
			if (email === 'dummy.dummy@dummy.com' && password === '12345678') {
				// Redirect to the dashboard or the desired page after successful login
				// For now, we'll show a success message
				alert('Login successful!');
			} else {
				alert('Invalid Password or username');
				// setError('Invalid email or password.');
			}
		} catch (error) {
			setError('Login failed. Please try again later.');
		} finally {
			setLoading(false); // Hide loading indicator
		}
	};

	return (
		<div className="App">
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
					<div className="form-group">
						<label>
							<input type="checkbox" /> Remember Me
						</label>
					</div>
					<button type="submit" disabled={loading}>
						{loading ? 'Logging in...' : 'Login'}
					</button>
					{error && <p className="error">{error}</p>}
				</form>
				<div className="password-reset">
					<a href="/forgot-password">Forgot Password?</a>
				</div>
				<div className="registration-link">
					<p>
						Don't have an account? <a href="/register">Register</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default App;
