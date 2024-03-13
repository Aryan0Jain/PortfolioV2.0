"use client";

import { useEffect, useRef, useState } from "react";
import Burger from "./burger";
import BackButton from "./backbtn";
import { NAVBAR_TABS } from "@/utils";
import Link from "next/link";

export default function NavBar() {
	const [showNavBar, setShowNavBar] = useState(false);
	const menu = useRef();
	function handleLinkMouseEnter(n) {
		document
			.querySelectorAll(`#link-${n} .bg-slider`)
			.forEach((slider, i) => {
				if (i === 0) slider.classList.remove("-translate-x-full");
				else slider.classList.remove("translate-x-full");
			});
	}
	function handleLinkMouseLeave(n) {
		document
			.querySelectorAll(`#link-${n} .bg-slider`)
			.forEach((slider, i) => {
				if (i === 0) slider.classList.add("-translate-x-full");
				else slider.classList.add("translate-x-full");
			});
	}
	useEffect(() => {
		let timer;
		if (showNavBar) {
			timer = setTimeout(() => {
				document.querySelectorAll(".nav-links").forEach((link, i) => {
					link.classList.remove("translate-y-full");
				});
			}, 400);
		} else {
			timer = setTimeout(() => {
				document.querySelectorAll(".nav-links").forEach((link, i) => {
					link.classList.add("translate-y-full");
				});
			}, 0);
		}
		return () => clearTimeout(timer);
	}, [showNavBar]);
	return (
		<>
			<div
				className={
					"fixed z-[10000] w-screen h-screen flex flex-col justify-between py-36 items-center move bg-[#e3cdb5] " +
					(showNavBar ? "translate-y-0 " : "-translate-y-full ")
				}
				ref={menu}
			>
				{NAVBAR_TABS.map((tab, i) => {
					return (
						<div
							key={i}
							className="overflow-hidden w-5/12 min-w-fit"
						>
							<div
								className="nav-links translate-y-full transition-all"
								id={`link-${i + 1}`}
								style={{ transitionDelay: `${i * 150}ms` }}
							>
								<Link
									href={tab.url}
									className="text-4xl font-semibold"
									onMouseEnter={() =>
										handleLinkMouseEnter(i + 1)
									}
									onMouseLeave={() =>
										handleLinkMouseLeave(i + 1)
									}
									onClick={() => setShowNavBar(false)}
								>
									<div className="relative overflow-hidden">
										<div className="absolute top-0 bg-orange-400 w-full h-5/6 transition-all duration-200 -translate-x-full bg-slider"></div>
										<div className="absolute bottom-0 bg-orange-400 w-full h-5/6 transition-all duration-200 translate-x-full bg-slider"></div>
										<div className="relative py-5 text-center px-2">
											{tab.title}
										</div>
									</div>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
			<Burger setShowNavBar={setShowNavBar} showNavBar={showNavBar} />
			<BackButton />
		</>
	);
}
