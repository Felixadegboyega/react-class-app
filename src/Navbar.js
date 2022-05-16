import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(params) {
	return(
		<>
			<nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
				<Link className="navbar-brand text-white" to="/">ROUTER CLASS</Link>
				<button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div id="my-nav" className="collapse navbar-collapse">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/">Home</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/dashboard">Dashboard</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/effect">Effect</Link>
						</li>
						{/* <li className="nav-item">
							<Link className="nav-link" to="/About">About Us</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/users">Form</Link>
						</li> */}
					</ul>
				</div>
			</nav>
		</>
	)
};
