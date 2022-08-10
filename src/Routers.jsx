import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Navbars from "./components/NavBar";
import Services from "./components/Services";
import ServicesDetails from "./components/ServicesDetails";

function Routers() {
	return (
		<BrowserRouter>
			<Navbars />
      
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contacts />} />
				<Route path="/Services" element={<Services />} />
				<Route path="/about" element={<About />} />
        <Route path="/ServicesDetails:id" element={<ServicesDetails />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Routers;