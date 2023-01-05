import React, { FC } from "react"

type MusicProps = {}

const Music: FC<MusicProps> = ({}) => {
	return (
		<article>
			<h3>Musique</h3>
			<p>
				Mélomane dans l'âme, je ne passe pas une journée sans écouter de
				musique.
				<br />
				Et voici ma playlist du moment !
			</p>
			<iframe
				style={{ borderRadius: "12px" }}
				src='https://open.spotify.com/embed/playlist/5LMCrxjwqiu9DWXLS5elCE?utm_source=generator&theme=0'
				width='100%'
				frameBorder='0'
				allowFullScreen
				allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
			/>
		</article>
	)
}

export default Music
