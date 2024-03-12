import { PROJECTS_LIST } from "@/utils";
import Project from "./project";

export default function Projects() {
	return (
		<div className="flex gap-4 text-center text-[#240A34] relative p-24 justify-center">
			<div className="absolute top-0 left-0 text-2xl bg-green-200 px-20 pt-14 pb-7 -translate-x-1/3 -translate-y-5 -rotate-45">
				Projects
			</div>
			<div className="flex gap-14 flex-wrap">
				{PROJECTS_LIST.map((item, i) => {
					return <Project key={i} data={item} />;
				})}
			</div>
		</div>
	);
}
