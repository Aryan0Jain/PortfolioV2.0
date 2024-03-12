import NavBar from "@/components/info/navbar";
import React from "react";

export default function Layout({ children }) {
	return (
		<>
			<NavBar />
			{children}
		</>
	);
}
