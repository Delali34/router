import React from "react";
import { Link } from "react-router-dom";

function Contacts() {
	return (
		<div>
			<div>
				<h1>this is my Contact page</h1>
				<p>lorem ipsum dolor sit amet, consectetur adip lorem lorem</p>
				<Link to="/contactdetails:name">ContactDetails</Link>
			</div>
		</div>
	);
}

export default Contacts;