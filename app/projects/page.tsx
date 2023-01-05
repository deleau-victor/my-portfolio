"use client"

import { useEffect, useState } from "react"
import filters from "../../filters"
import projects, { IProjects } from "../../projects"
import FiltersSection from "../../components/sections/projects/filtersSection"
import ProjectsSection from "../../components/sections/projects/projectsSection"

const Projects = () => {
	const [filter, setFilter] = useState<number[]>([])
	const isSelected = (id: number) => filter.includes(id)
	const [selectedProjects, setSelectedProjects] = useState<IProjects[]>([])

	const filterBySkill = (projects: IProjects[], filter: number[]) => {
		if (filter.length === 0) {
			return projects
		} else {
			return projects.filter((projet) =>
				projet.langages.some((id) => filter.includes(id)),
			)
		}
	}

	const handleFilter = (id: number) => {
		if (!isSelected(id)) {
			setFilter([...filter, id])
		} else {
			setFilter(filter.filter((currentId) => currentId !== id))
		}
	}

	useEffect(() => {
		setSelectedProjects(filterBySkill(projects, filter))
	}, [filter])

	return (
		<main className='projects'>
			<h1>Mes projets</h1>
			{/* Filters */}
			<FiltersSection
				filterList={filters}
				isSelected={isSelected}
				onClick={(id) => handleFilter(id)}
			/>
			{/* Projets */}
			<ProjectsSection
				selectedProjects={selectedProjects}
				filters={filters}
			/>
		</main>
	)
}

export default Projects
