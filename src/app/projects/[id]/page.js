import { PROJECTS_LIST } from "@/utils";
import Image from "next/image";
import React from "react";

export default function Project({ params }) {
	const data = PROJECTS_LIST.find((itme) => itme.url === params.id);
	return (
		<div className="w-screen min-h-screen bg-[#FFEDD8] px-32 py-20 flex flex-col gap-8">
			<div className="text-5xl font-bold text-[#891652]">
				{data.title}
			</div>
			<div>short description</div>
			<div className="w-9/12 aspect-[16/8] flex overflow-hidden relative">
				{data.screenShots.map((img, i) => {
					const translate = `translate-x-`;
					return (
						<Image
							key={i}
							src={img}
							alt={`screenshot number ${i + 1} fot ${data.title}`}
							fill
							sizes="100vw"
							quality={100}
							className={"object-cover"}
						/>
					);
				})}
			</div>
			<div>about the project</div>
		</div>
	);
}
