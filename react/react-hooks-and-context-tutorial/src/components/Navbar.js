import React, { useContext } from 'react';

const Navbar = () => {
	return (
		<nav>
			<h2>
				Oak Academy
			</h2>
			<p
				style={{ textAlign: 'center' }} 
			>
			</p>
			<div className='ui three buttons'>
				<button className='ui button'>Overview</button>
				<button className='ui button'>Contact</button>
				<button className='ui button'>Support</button>
			</div>
		</nav>
	);
};

export default Navbar;