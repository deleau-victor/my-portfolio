import React, { FC, useEffect } from "react"
import Icon from "../UI/icon"
import { CategoryGroup } from "../../app/skills/page"

type SkillSectionProps = {
	list: CategoryGroup
}

const SkillSection: FC<SkillSectionProps> = ({ list }) => {
	return (
		<div className='skillList'>
			{Object.values(list).map((categorie) => {
				return categorie.map(({ icon, name }) => (
					<div key={name}>
						<Icon src={icon} alt={`Logo ${name}`} size='xl' responsive />
						<p>{name}</p>
					</div>
				))
			})}
		</div>
	)
}

export default SkillSection
