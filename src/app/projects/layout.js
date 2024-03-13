import NavBar from "@/components/navbar/navbar";
import React from "react";

export default function Layout({ children }) {
	return (
		<>
			<NavBar />
			{children}
		</>
	);
}
