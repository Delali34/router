import React from "react";
import { Link } from "react-router-dom";

function Services() {
	return (
		<div>
			<div>
				<h1>this is my Services </h1>
				<p>lorem ipsum dolor sit amet, consectetur adip lorem lorem</p>
                <Link to="/ServicesDetails:id">Services Details</Link>
			</div>
		</div>
	);
}

export default Services;