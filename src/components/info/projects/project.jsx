"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

export default function Project({ data }) {
	const mainImage = useRef();
	const hoverImage = useRef();
	const skillsContainer = useRef();
	const moreBtn = useRef();
	const navigate = useRouter();
	const [showSkillsTimeout, setShowSkillsTimeout] = useState();
	const [showMoreTimeout, setShowMoreTimeout] = useState();
	function handleMouseEnter() {
		hoverImage.current.classList.remove("-translate-y-full");
		mainImage.current.classList.add("scale-125");
		setShowSkillsTimeout(
			setTimeout(() => {
				skillsContainer.current.classList.remove("hidden");
				skillsContainer.current.classList.add("flex");
			}, 450)
		);
		setShowMoreTimeout(
			setTimeout(() => {
				moreBtn.current.classList.remove("translate-y-14");
				moreBtn.current.classList.add("move");
			}, 600)
		);
	}
	function handleMouseLeave() {
		hoverImage.current.classList.add("-translate-y-full");
		mainImage.current.classList.remove("scale-125");
		clearTimeout(showSkillsTimeout);
		clearTimeout(showMoreTimeout);
		skillsContainer.current.classList.remove("flex");
		skillsContainer.current.classList.add("hidden");
		moreBtn.current.classList.add("translate-y-14");
		moreBtn.current.classList.remove("move");
	}
	function handleClick() {
		navigate.push(`projects/${data.url}`);
	}
	return (
		<div
			className="cursor-pointer"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={handleClick}
		>
			<div className="text-center bg-slate-300 z-20 relative">
				{data.title}
			</div>
			<div className="aspect-[16/8] h-60 relative overflow-hidden flex items-center">
				<Image
					src={data.screenShots[0]}
					alt={`Main screenshot for ${data.title}`}
					fill={true}
					sizes="50vw"
					placeholder="blur"
					className="object-cover z-0 transition-all"
					ref={mainImage}
				/>
				<Image
					src={data.screenShots[1]}
					alt={`Main screenshot for ${data.title}`}
					fill={true}
					sizes="50vw"
					placeholder="blur"
					className="object-cover z-10 -translate-y-full move brightness-[0.25]"
					ref={hoverImage}
				/>
				<div
					className="z-20 absolute w-full gap-5 flex-wrap justify-center items-center px-14 hidden"
					ref={skillsContainer}
				>
					{data.skills.slice(0, 4).map((skill, i) => {
						const delay = 450 + 100 * i;
						return (
							<div
								key={i}
								className={
									"px-3 py-1 text-lg bg-slate-800 text-slate-200/70 rounded-md uppercase font-medium"
								}
							>
								{skill}
							</div>
						);
					})}
				</div>
				<div
					ref={moreBtn}
					className="absolute left-1/2 bottom-2 -translate-x-1/2 z-30 translate-y-14 px-3 py-1 text-lg bg-slate-800 text-slate-200/70 rounded-md"
				>
					more...
				</div>
			</div>
		</div>
	);
}
