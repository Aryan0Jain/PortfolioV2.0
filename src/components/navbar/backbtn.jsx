"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function BackButton() {
	const navigate = useRouter();
	function handleClick() {
		navigate.back();
	}
	return (
		<div
			onClick={handleClick}
			className="fixed right-[6%] top-24 w-10 flex flex-col gap-2 cursor-pointer z-[11000] scale-[.80] hover:scale-y-125 transition-all"
		>
			<div className="bg-black w-full h-[2px] -rotate-[30deg] my-[5px]"></div>
			<div className="bg-black w-full h-[2px] rotate-[30deg] my-[5px]"></div>
		</div>
	);
}
