import site from "../images/works/site.png";
import whatcanicook from "../images/works/cookingweb.png";
import kmaweb from "../images/works/kmaweb.png";
import asjijp from "../images/works/asjijp.png";
import medalertai from "../images/works/medalertai.png";

import sowtest from "../images/works/sow-test.gif";
import autosowingrobot from "../images/works/sowrobot.jpg";
import autosowingrobotplant from "../images/works/seed-plant.jpg";

import sumotest from "../images/works/sumo-test.gif";
import sumo1chassis from "../images/works/sumo1chassis.png";
import sumo1parts from "../images/works/sumo1parts.jpg";
import xmotion from "../images/works/xmotion.jpg";
import sumo2parts from "../images/works/sumo2parts.jpg";

const web = [
	{
		title: "Personal website",
		image: site,
		description: "My portfolio website",
		stack: "ReactJs, Tailwind CSS, Vite, EmailJs, Netlify",
		duration: 0.13,
		link: "https://angelobalagtas.netlify.app/",
	},
	{
		title: "What Can I Cook?",
		image: whatcanicook,
		description: "A recipe guide website",
		stack: "NextJs, Tailwind CSS, ExpressJs, Vercel",
		duration: 0.12,
		link: "https://whatcanicookonline.vercel.app/",
	},
	{
		title: "Alliance Software Inc. JP",
		image: asjijp,
		description: "ASI company website",
		stack: "ReactJs, NodeJs, Google Maps API",
		duration: 0.1,
		link: "https://www.asji.jp/",
	},
	{
		title: "MedAlert AI",
		image: medalertai,
		description: "School final project - a prescription tracker application",
		stack: "Swift, React Native, Django, SQLite, TesseractJs",
		duration: 0.1,
		link: "",
	},
	{
		title: "KMA website",
		image: kmaweb,
		description: "Site created for the Ken Martial Arts visual database",
		stack: "ReactJs, ExpressJs, NodeJs, PostgreSQL, Vercel",
		duration: 0.1,
		link: "https://kmasite.vercel.app/",
	},
];

const embedded = [
	{
		title: "Auto Sowing Robot",
		image: [sowtest, autosowingrobot, autosowingrobotplant],
		description: "Autonomous sowing robot",
		stack: "PIC16F877A, C, Proteus, xc8",
		duration: 0.13,
	},
	{
		title: "SumoBot",
		image: [sumotest, sumo1chassis, sumo1parts, xmotion, sumo2parts],
		description: "Autonomous sumo wrestling robot",
		stack: "ESP32, XMotion V3, C",
		duration: 0.12,
	},
];

export default { web, embedded };
