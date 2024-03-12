"use client";

import { useRef, useState } from "react";
import Burger from "./burger";

export default function NavBar() {
	const [showNavBar, setShowNavBar] = useState(false);
	const menu = useRef();

	return (
		<>
			<div
				className={
					"fixed z-[10000] w-screen h-screen move bg-[#e3cdb5] " +
					(showNavBar ? "translate-y-0 " : "-translate-y-full ")
				}
				ref={menu}
			>
				Navbar
			</div>
			<Burger setShowNavBar={setShowNavBar} showNavBar={showNavBar} />
		</>
	);
}
