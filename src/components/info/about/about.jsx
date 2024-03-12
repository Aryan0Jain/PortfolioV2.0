export default function About() {
	return (
		<div className="flex gap-4 text-left text-[#240A34] relative p-24">
			<div className="absolute top-0 left-0 text-2xl bg-green-200 px-20 pt-14 pb-7 -translate-x-1/3 -translate-y-5 -rotate-45">
				About
			</div>
			<div className="flex flex-col gap-8 max-w-3xl">
				<div className="text-4xl font-medium">
					Hello, my name is{" "}
					<span className="font-bold">Aryan Jain</span>.
				</div>
				<div className="text-xl flex flex-col gap-6">
					<div>
						Hi there, I&apos;m Aryan Jain, a recent graduate from
						IIT Roorkee with a B.Tech degree. I&apos;m super excited
						about diving into the world of IT! I bring along a
						strong foundation in Java and web development
						technologies like HTML, CSS, and JavaScript. Plus,
						I&apos;ve got some cool skills in ReactJs, NextJs,
						Material UI, and TailwindCSS that I can&apos;t wait to
						put into action.
					</div>
					<div>
						What really drives me is the chance to learn and grow
						constantly. I don&apos;t want to be defined by what
						I&apos;ve done in the past, but by what I&apos;m aiming
						to achieve in the future. I love taking on new
						challenges and pushing myself to be better every day.
						Whether it&apos;s through work or personal projects,
						I&apos;m always eager to expand my horizons and tackle
						new things head-on.
					</div>
					<div>
						Outside of the tech world, I&apos;m a bundle of energy!
						I&apos;m easily inspired and always chasing after my
						passions. From exploring different interests to managing
						multiple projects, I thrive on the excitement of it all.
						I&apos;m a fast learner, so I&apos;m confident I can
						adapt to whatever comes my way in this dynamic field.
						Bring on the challenges—I&apos;m ready to take them on!
					</div>
				</div>
			</div>
			<div>Some Image will be placed here</div>
		</div>
	);
}
