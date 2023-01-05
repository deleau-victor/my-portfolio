import React, { FC } from "react"

type CitationProps = {}

const Citation: FC<CitationProps> = ({}) => {
	return (
		<article>
			<h2>Ma citation</h2>
			<q cite='https://citations.ouest-france.fr/citation-gandhi/vis-comme-devais-mourir-demain-33364.html'>
				Vis comme si tu devais mourir demain. Apprends comme si tu devais
				vivre toujours.
			</q>
			<p>Ghandi</p>
		</article>
	)
}

export default Citation
