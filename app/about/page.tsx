import Bio from "../../components/sections/about/bio"
import BioAside from "../../components/sections/about/bioAside"
import Citation from "../../components/sections/about/citation"
import Music from "../../components/sections/about/music"
import Sport from "../../components/sections/about/sport"
import Travel from "../../components/sections/about/travel"

const About = () => {
	return (
		<main className='about'>
			<h1>À propos</h1>
			<section>
				<article>
					<h2>
						Je suis Victor Deleau,
						<br />
						je vis à Rouen et je suis développeur fullstack
					</h2>
					<Bio />
				</article>
				<BioAside />
				<Citation />
				<h2>Mes hobbies</h2>
				<Music />
				<Travel />
				<Sport />
			</section>
		</main>
	)
}

export default About
