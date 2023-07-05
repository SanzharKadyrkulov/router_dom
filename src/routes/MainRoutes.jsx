import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import NotFoundPage from "../pages/NotFoundPage";
import MainLayout from "../layouts/MainLayout";
import AboutLayout from "../layouts/AboutLayout";

const MainRoutes = () => {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route path="/" element={<HomePage />} />
			</Route>

			<Route element={<AboutLayout />}>
				<Route path="/about" element={<AboutUsPage />} />
			</Route>

			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
};

export default MainRoutes;
