import React, { FC } from "react"
import Icon from "../../UI/icon"
import Image from "next/image"

type BioAsideProps = {}

const BioAside: FC<BioAsideProps> = ({}) => {
	return (
		<article>
			<Image
				src={"/images/pictures/photo.png"}
				alt='Photo professionnelles'
				width={2168}
				height={2167}
			/>
			<h2>Liens utiles :</h2>
			<div>
				<a href='https://github.com/deleau-victor' target={"_blank"}>
					<Icon src='/images/icons/github.svg' alt='icône github' />
					<p>Github</p>
				</a>
				<a
					href='https://www.linkedin.com/in/victor-deleau/'
					target={"_blank"}>
					<Icon src='/images/icons/linkedin.svg' alt='icône github' />
					<p>Linkedin</p>
				</a>
			</div>
		</article>
	)
}

export default BioAside
