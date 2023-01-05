import React, { FC, SyntheticEvent, useState } from "react"
import { IProjects } from "../../../projects"
import Image from "next/image"
import Button from "../../UI/button"
import Modal from "../../UI/modal"
import { IFilters } from "../../../filters"

type ProjectsSectionProps = {
	selectedProjects: IProjects[]
	filters: IFilters[]
}

const ProjectsSection: FC<ProjectsSectionProps> = ({
	selectedProjects,
	filters,
}) => {
	const [isModalOpen, setisModalOpen] = useState<number | null>()

	const heightStyle = async (event: SyntheticEvent<HTMLElement, Event>) => {
		let height =
			event.currentTarget.parentElement!.children[0].clientHeight +
			event.currentTarget.parentElement!.children[1].clientHeight +
			85.5
		event.currentTarget.setAttribute(
			"style",
			`height: calc(100% - ${height}px);`,
		)
	}

	return (
		<section onLoad={(event) => heightStyle(event)}>
			{selectedProjects.map(
				({
					id,
					desktopImage,
					mobileImage,
					langages,
					liens,
					name,
					link,
				}) => {
					return (
						<div key={name + id.toString()}>
							<h2>{name}</h2>
							<div>
								{desktopImage && (
									<Image
										src={desktopImage}
										alt={`ìllustation du projet ${name}`}
										width={313.2}
										height={179.8}
									/>
								)}
								{mobileImage && (
									<Image
										src={mobileImage}
										alt={`ìllustation du projet ${name}`}
										width={100}
										height={214}
									/>
								)}
							</div>
							<Button
								size='sm'
								variant='outlined'
								borderColor='border-white'
								onClick={() => setisModalOpen(id)}>
								Plus d'informations
							</Button>
							{link && (
								<a href={link} target='_blank'>
									Visiter le site &gt;
								</a>
							)}
							<Modal
								isOpen={isModalOpen === id ? true : false}
								title={name}
								onClick={() => setisModalOpen(null)}
								size='xl'>
								<div className='projectModal'>
									<h3>Technologies utilisées :</h3>
									<ul>
										{langages.map((id) =>
											filters
												.filter((langage) => langage.id === id)
												.map(({ name }) => (
													<li key={name}>{name}</li>
												)),
										)}
									</ul>
									<h3>Lien(s) Github du projet :</h3>
									<ul>
										{liens.map((lien) => (
											<li key={lien}>
												<a href={lien} target='_blank'>
													{lien}
												</a>
											</li>
										))}
									</ul>
									{link && (
										<a href={link} target='_blank'>
											Visiter le site &gt;
										</a>
									)}
								</div>
							</Modal>
						</div>
					)
				},
			)}
		</section>
	)
}

export default ProjectsSection
