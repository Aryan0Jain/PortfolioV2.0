import ixigo_1 from "../public/screenshots/ixigo/screenshot-1-ixigo.png";
import ixigo_2 from "../public/screenshots/ixigo/screenshot-2-ixigo.png";
import ixigo_3 from "../public/screenshots/ixigo/screenshot-3-ixigo.png";
import ixigo_4 from "../public/screenshots/ixigo/screenshot-4-ixigo.png";
import ixigo_5 from "../public/screenshots/ixigo/screenshot-5-ixigo.png";
import ixigo_6 from "../public/screenshots/ixigo/screenshot-6-ixigo.png";
import ixigo_7 from "../public/screenshots/ixigo/screenshot-7-ixigo.png";
import ixigo_8 from "../public/screenshots/ixigo/screenshot-8-ixigo.png";
import quora_1 from "../public/screenshots/quora/screenshot-1-quora.png";
import quora_2 from "../public/screenshots/quora/screenshot-2-quora.png";
import quora_3 from "../public/screenshots/quora/screenshot-3-quora.png";
import quora_4 from "../public/screenshots/quora/screenshot-4-quora.png";
import quora_5 from "../public/screenshots/quora/screenshot-5-quora.png";
import quora_6 from "../public/screenshots/quora/screenshot-6-quora.png";
import quora_7 from "../public/screenshots/quora/screenshot-7-quora.png";
import quora_8 from "../public/screenshots/quora/screenshot-8-quora.png";

export const HOMEPAGE_CONTENT = [
	{
		main: "Hello",
		hidden: "About",
		link: "/info#about",
	},
	{
		main: "I am",
		hidden: "Projects",
		link: "/info#projects",
	},
	{
		main: "Aryan",
		hidden: "Contact",
		link: "/info#contact",
	},
];

export const PROJECTS_LIST = [
	{
		title: "Ixigo Clone",
		github: "https://github.com/Aryan0Jain/Ixigo-Clone---React-Project-1---hb4b95z8t9k9",
		hosted: "https://ixigo-clone-by-aryan.netlify.app/",
		screenShots: [
			ixigo_1,
			ixigo_2,
			ixigo_3,
			ixigo_4,
			ixigo_5,
			ixigo_6,
			ixigo_7,
			ixigo_8,
		],
		skills: [
			"HTML",
			"CSS",
			"JavaScript",
			"ReactJS",
			"ReactRouter",
			"MaterialUI",
		],
		url: "ixigoClone",
	},
	{
		title: "Quora Clone",
		github: "https://github.com/Aryan0Jain/Quora-React-Clone---React-Project-2---m7hxpv0yz2xs",
		hosted: "https://quora-clone-aryan.netlify.app/",
		screenShots: [
			quora_1,
			quora_2,
			quora_3,
			quora_4,
			quora_5,
			quora_6,
			quora_7,
			quora_8,
		],
		skills: [
			"HTML",
			"CSS",
			"JavaScript",
			"ReactJS",
			"NextJS",
			"TailwindCSS",
		],
		url: "quoraClone",
	},
];
