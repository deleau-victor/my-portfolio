"use client"

import { useState, MouseEvent, useEffect } from "react"
import SkillSection from "../../components/sections/skillSection"
import skills from "../../skills"

const Skills = () => {
	return (
		<main className='skill'>
			<h1>Mes compétences</h1>
			<section>
				<div>
					<h2>Langages</h2>
					<SkillSection list={skills.Categories[0]} />
				</div>
				<div>
					<h2>Front-End</h2>
					<SkillSection list={skills.Categories[1]} />
				</div>
				<div>
					<h2>Back-End</h2>
					<SkillSection list={skills.Categories[2]} />
				</div>
				<div>
					<h2>Base&nbsp;de&nbsp;données</h2>
					<SkillSection list={skills.Categories[5]} />
				</div>

				<div>
					<h2>UI</h2>
					<SkillSection list={skills.Categories[4]} />
				</div>
				<div>
					<h2>Mobile</h2>
					<SkillSection list={skills.Categories[3]} />
				</div>
			</section>
		</main>
	)
}

export default Skills
