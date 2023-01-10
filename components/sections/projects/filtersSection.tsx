import React, { FC, useState } from 'react'
import { IFilters } from '../../../filters'
import Button from '../../UI/button'
import Icon from '../../UI/icon'

type FiltersProps = {
	filterList: IFilters[]
	onClick: (id: number) => void
	isSelected: (id: number) => boolean
}

const FiltersSection: FC<FiltersProps> = ({
	onClick,
	filterList,
	isSelected,
}) => {
	const [isFilterVisible, setIsFilterVisible] = useState(false)

	return (
		<section className={isFilterVisible ? 'filter' : ''}>
			<Button
				onClick={() => setIsFilterVisible(!isFilterVisible)}
				variant='outlined'
				borderColor='border-white'
				size='xs'
			>
				Filtres
			</Button>
			<div>
				{filterList.map(({ name, icon, id }) => {
					return (
						<div
							key={id}
							onClick={() => onClick(id)}
							className={isSelected(id) ? 'selected' : ''}
						>
							<Icon src={icon} alt={`logo ${name}`} responsive />
							<p>{name}</p>
						</div>
					)
				})}
			</div>
		</section>
	)
}

export default FiltersSection
