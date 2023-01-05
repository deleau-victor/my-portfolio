import React, { FC } from "react"
import { IFilters } from "../../../filters"
import Icon from "../../UI/icon"

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
	return (
		<section>
			{filterList.map(({ name, icon, id }) => {
				return (
					<div
						key={id}
						onClick={() => onClick(id)}
						className={isSelected(id) ? "selected" : ""}>
						<Icon src={icon} alt={`logo ${name}`} responsive />
						<p>{name}</p>
					</div>
				)
			})}
		</section>
	)
}

export default FiltersSection
