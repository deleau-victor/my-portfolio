import Link from "next/link"
import React, { FC } from "react"
import Button from "../UI/button"

type navbarProps = {}

const Navbar: FC<navbarProps> = () => {
	return (
		<nav>
			<Link href='/'>Accueil</Link>
			<Link href='/about'>A&nbsp;propos</Link>
			<Link href='/skills'>Compétences</Link>
			<Link href='/projects'>Projets</Link>
			<Link href='/career'>Parcours</Link>
		</nav>
	)
}

export default Navbar
