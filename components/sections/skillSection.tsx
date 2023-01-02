import React, { FC, useEffect, useState } from "react"
import { CategoryGroup } from "../../skills"
import Icon from "../UI/icon"
import Modal from "../UI/modal"

type SkillSectionProps = {
	list: CategoryGroup
}

const SkillSection: FC<SkillSectionProps> = ({ list }) => {
	const [isModalOpen, setIsModalOpen] = useState<number | null>()

	return (
		<div className='skillList'>
			{Object.values(list).map((categorie) => {
				return categorie.map(({ icon, name, skills }, index) => (
					<>
						<div key={name} onClick={() => setIsModalOpen(index)}>
							<Icon
								src={icon}
								alt={`Logo ${name}`}
								size='xl'
								responsive
							/>
							<p>{name}</p>
						</div>
						<Modal
							isOpen={isModalOpen === index ? true : false}
							onClick={() => setIsModalOpen(null)}
							size='xs'
							title={
								<div className='skillModalhead'>
									<Icon src={icon} alt={`Logo ${name}`} />
									<h2>{name}</h2>
								</div>
							}>
							<div className='skillModal'>
								<h3>Compétences :</h3>
								<ul>
									{skills.map((skill, index) => (
										<li key={index}>{skill}</li>
									))}
								</ul>
							</div>
						</Modal>
					</>
				))
			})}
		</div>
	)
}

export default SkillSection
