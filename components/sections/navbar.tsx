"use client"

import Link from "next/link"
import React, { FC, useState } from "react"
import Button from "../UI/button"
import Icon from "../UI/icon"

type navbarProps = {}

const Navbar: FC<navbarProps> = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

	return (
		<>
			<div className={isMenuOpen ? "noDisform" : ""}></div>
			<nav className={isMenuOpen ? "open" : ""}>
				<Link href='/'>Accueil</Link>
				<Link href='/about'>A&nbsp;propos</Link>
				<Link href='/skills'>Compétences</Link>
				<Link href='/projects'>Projets</Link>
				<Link href='/career'>Parcours</Link>
				<Button
					variant='ghost'
					classname={isMenuOpen ? "open" : ""}
					onClick={() => setIsMenuOpen(true)}>
					<Icon src='/images/icons/menu.svg' alt='menu buger' />
				</Button>
				<Button
					variant='ghost'
					classname={!isMenuOpen ? "open" : ""}
					onClick={() => setIsMenuOpen(false)}>
					<Icon src='/images/icons/cross.svg' alt='menu buger' size='sm' />
				</Button>
			</nav>
		</>
	)
}

export default Navbar
