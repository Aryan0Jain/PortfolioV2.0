import Burger from "@/components/info/burger";
import NavBar from "@/components/info/navbar";

export default function Info() {
	return (
		<div className="min-h-screen">
			<NavBar />
			<div id="about" className="bg-[#FFEDD8] p-10">
				About
			</div>
			<div id="projects" className="bg-[#EABE6C] p-10">
				Projects
			</div>
			<div id="contact" className="bg-[#FFEDD8] p-10">
				Contact
			</div>
		</div>
	);
}
