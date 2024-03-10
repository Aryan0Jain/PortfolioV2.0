import Links from "@/components/home/links";
import { HOMEPAGE_CONTENT } from "@/utils";

export default function Home() {
	return (
		<div className="bg-[#FFEDD8] min-h-screen flex gap-20 justify-center items-center">
			<div className="flex flex-col gap-4 text-9xl font-bold w-[500px]">
				{HOMEPAGE_CONTENT.map((item, i) => {
					return <Links key={i} index={i} item={item} />;
				})}
			</div>
			<div>Some Image Here</div>
		</div>
	);
}
