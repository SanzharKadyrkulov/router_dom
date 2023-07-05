import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const AboutLayout = () => {
	return (
		<div>
			<Navbar color="green" />
			<Outlet />
		</div>
	);
};

export default AboutLayout;
