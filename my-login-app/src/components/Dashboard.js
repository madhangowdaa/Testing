// Dashboard.js

import React, { useState } from 'react';
import './Dashboard.css'; // Add CSS file for styling

function Dashboard() {
	const [username, setUsername] = useState('');
	const [selectedOption, setSelectedOption] = useState('');
	const [searchQuery, setSearchQuery] = useState('');

	const handleOptionChange = (e) => {
		setSelectedOption(e.target.value);
		// Add your filter logic here
	};

	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value);
		// Add your search logic here
	};

	// Assuming you have a user object with username after login
	const user = { username: 'John Doe' };

	return (
		<div className="dashboard-container">
			<nav className="navbar">
				<div className="profile-icon">Welcome, {user.username}</div>
			</nav>
			<h1>Dashboard</h1>
			<div className="filter-bar">
				<select value={selectedOption} onChange={handleOptionChange}>
					<option value="">All</option>
					<option value="option1">Option 1</option>
					<option value="option2">Option 2</option>
				</select>
				<input
					type="text"
					placeholder="Search..."
					value={searchQuery}
					onChange={handleSearchChange}
				/>
			</div>
			{/* Add content and data table here */}
		</div>
	);
}

export default Dashboard;
