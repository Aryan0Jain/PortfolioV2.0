import React from "react";

export default function Burger({ showNavBar, setShowNavBar }) {
	return (
		<div
			className="fixed right-[6%] top-10 w-10 flex flex-col gap-2 cursor-pointer z-[11000] hover:scale-y-125 transition-all"
			onClick={() => setShowNavBar((prev) => !prev)}
		>
			<div
				className={
					"transition-all w-full h-[2px] bg-black " +
					(showNavBar
						? "rotate-45 translate-y-[10px]"
						: "rotate-0 translate-y-0")
				}
			></div>
			<div
				className={
					"transition-all w-full h-[2px] bg-black " +
					(showNavBar ? "opacity-0" : "opacity-100")
				}
			></div>
			<div
				className={
					"transition-all w-full h-[2px] bg-black " +
					(showNavBar
						? "-rotate-45 -translate-y-[10px]"
						: "rotate-0 translate-y-0")
				}
			></div>
		</div>
	);
}
