import React, { FC } from "react"
import Icon from "../../UI/icon"

type SportProps = {}

const Sport: FC<SportProps> = ({}) => {
	return (
		<article>
			<h3>Sport</h3>
			<p>
				Amoureux du sport, j'ai besoin de me dépenser et de pratiquer une
				activité physique régulièrement.
			</p>
			<p>J'ai pratiqué plusieurs sport en club tels que :</p>
			<ul>
				<li>
					<Icon src='/images/icons/boxing.svg' alt='boxing icon' />
					<p>La boxe française</p>
				</li>
				<li>
					<Icon src='/images/icons/running.svg' alt='runnig icon' />
					<p>La course à pied</p>
				</li>
				<li>
					<Icon src='/images/icons/climbing.svg' alt='climbing icon' />
					<p>L'escalade</p>
				</li>
			</ul>
			<p>Je pratique actuellement la musculation.</p>
			<p>J'aimerai également dans le futur préparer un marathon.</p>
		</article>
	)
}

export default Sport
