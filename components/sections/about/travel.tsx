import React, { FC } from "react"
import Image from "next/image"

type TravelProps = {}

const Travel: FC<TravelProps> = ({}) => {
	return (
		<article>
			<h3>Voyages</h3>
			<p>
				Voyageur aguerri, j'ai eu la chance de visiter de nombreux pays.
				<br />
				Et voici un aperçu des photos que j'ai pu prendre lors de mes
				voyages à travers le monde !
			</p>
			<div>
				<Image
					src={"/images/pictures/voyage/pointe-des-colibris.png"}
					alt='Pointe des colibris en Guadeloupe à Saint-François'
					width={1440}
					height={1440}
				/>
				<Image
					src={"/images/pictures/voyage/voiture-bleue.png"}
					alt='Veille voiture bleue sur Paseo de Martí, La Habana, Cuba à Cuba'
					width={2448}
					height={2448}
				/>
				<Image
					src={"/images/pictures/voyage/baie.png"}
					alt="Passe de la Baleine prise depuis le Fort Napoléon sur l'île Terre-de-haut en Guadeloupe"
					width={1440}
					height={1440}
				/>
				<Image
					src={"/images/pictures/voyage/pharmacie.png"}
					alt='Ancienne pharmacie à La Havane à Cuba'
					width={2448}
					height={2448}
				/>
				<Image
					src={"/images/pictures/voyage/avion.png"}
					alt="Photo depuis le hublot d'un avion"
					width={720}
					height={720}
				/>
				<Image
					src={"/images/pictures/voyage/la-havane.png"}
					alt='Rue colorée de la Havane'
					width={2448}
					height={2448}
				/>
				<Image
					src={"/images/pictures/voyage/cadillac-rouge.png"}
					alt='Cadillac rouge'
					width={2448}
					height={2448}
				/>
				<Image
					src={"/images/pictures/voyage/plage-cuba.png"}
					alt='Plage de Saint-Domingue, République dominicaine'
					width={2448}
					height={2448}
				/>
				<Image
					src={"/images/pictures/voyage/lac-souterrain.png"}
					alt='Lac souterrain dans une grotte à Cuba'
					width={900}
					height={900}
				/>
			</div>
		</article>
	)
}

export default Travel
