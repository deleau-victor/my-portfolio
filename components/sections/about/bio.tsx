import React, { FC } from "react"

type BioProps = {}

const Bio: FC<BioProps> = ({}) => {
	return (
		<div className='text-justify'>
			<p>
				Je recherche un contrat d'apprentissage, afin de pouvoir continuer
				la formation de
				<strong>&nbsp;développeur web &amp; web mobile</strong> proposé par
				<strong>&nbsp;WebForce3</strong> en alternance à partir de
				<strong>&nbsp;janvier 2023</strong>.
			</p>
			<p>
				Après avoir fait une première année de classe préparatoire au
				diplôme de comptabilité et de gestion, j'ai décidé de me
				<strong> réorienter</strong> vers un domaine que me convenait
				vraiment : <strong>le numérique. </strong> En m'intéressant aux
				différents secteurs du numérique, mon choix s’est rapidement dirigé
				vers le <strong>développement</strong> qui satisfaisait mon
				appétence pour les
				<strong>&nbsp;raisonnements logiques</strong>.
			</p>
			<p>
				Je profite également de mon temps libre pour me former en
				<strong>&nbsp;autodidacte</strong> afin de développer mes
				compétences sur de nouvelles
				<strong>&nbsp;technologies</strong>.
			</p>
			<p>
				<strong>Persévérant, curieux</strong> et doté d’une
				<strong>
					&nbsp;bonne capacité de compréhension, je m’adapte aisément
				</strong>
				&nbsp;avec les différentes technologies.
				<strong>&nbsp;En autonomie ou en groupe</strong> je serais ravi de
				me confronter aux défis que vous me confierez.
			</p>
		</div>
	)
}

export default Bio
