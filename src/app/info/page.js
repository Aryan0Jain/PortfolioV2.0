import About from "@/components/info/about/about";
import Contact from "@/components/info/contact/contact";
import NavBar from "@/components/info/navbar";
import Projects from "@/components/info/projects/projects";

export default function Info() {
	return (
		<div className="min-h-screen">
			<NavBar />
			<div id="about" className="bg-[#FFEDD8] overflow-hidden">
				<About />
			</div>
			<div id="projects" className="bg-[#EABE6C] overflow-hidden">
				<Projects />
			</div>
			<div id="contact" className="bg-[#FFEDD8] overflow-hidden">
				<Contact />
			</div>
		</div>
	);
}
