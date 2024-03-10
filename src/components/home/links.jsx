"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Links({ item, index }) {
	const { link, main, hidden } = item;
	const mainText = useRef();
	const hiddenText = useRef();
	function handleMouseEnter() {
		mainText.current.classList.add("-translate-x-[500px]");
		hiddenText.current.classList.remove("translate-x-[500px]");
	}
	function handleMouseLeave() {
		mainText.current.classList.remove("-translate-x-[500px]");
		hiddenText.current.classList.add("translate-x-[500px]");
	}
	useEffect(() => {
		const translateID = setTimeout(() => {
			mainText.current.classList.remove("translate-y-36");
		}, index * 400);
		return () => {
			clearTimeout(translateID);
		};
	}, [index]);
	return (
		<Link href={link}>
			<div
				className="overflow-hidden relative h-32"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<h1
					className="text-[#240A34] translate-y-36 move"
					ref={mainText}
				>
					{main}
				</h1>
				<p
					className="text-[#891652] translate-x-[500px] top-0 absolute move"
					ref={hiddenText}
				>
					{hidden}
				</p>
			</div>
		</Link>
	);
}
