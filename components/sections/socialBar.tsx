import React from "react"
import githubLogo from "../../public/images/icons/github.svg"
import linkedinIcon from "../../public/images/icons/linkedin.svg"
import Icon from "../UI/icon"

function SocialBar() {
	return (
		<section className='mediaBar'>
			<a href='https://github.com/deleau-victor' target='_blank'>
				<Icon src={githubLogo} alt='Logo github' size='lg' />
			</a>
			<a href='https://www.linkedin.com/in/victor-deleau/' target='_blank'>
				<Icon src={linkedinIcon} alt='Logo linkedin' size='lg' />
			</a>
		</section>
	)
}

export default SocialBar
