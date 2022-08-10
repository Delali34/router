import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbars() {
	return (
        
		<Nav defaultActiveKey="/home" as="ul">
			<Nav.Item as="li">
				<Link className='Navbar' to="/">
					Home
				</Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Link className='Navbar' to="/contact">
					Contact
				</Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Link className='Navbar' to="/Services">
					Services
				</Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Link className='Navbar' to="/About">
					About
				</Link>
			</Nav.Item>
		</Nav>
    
	);
}

export default Navbars;