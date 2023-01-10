export interface IFilters {
	name: string
	icon: string
	id: number
}

const filters: IFilters[] = [
	{
		name: 'TypeScript',
		icon: '/images/icons/Dev Skills/typescript.svg',
		id: 1,
	},
	{ name: 'React', icon: '/images/icons/Frameworks Front/react.svg', id: 2 },
	{ name: 'Next', icon: '/images/icons/Frameworks Front/nextjs.svg', id: 3 },
	{ name: 'NodeJS', icon: '/images/icons/Dev Skills/node.svg', id: 4 },
	{
		name: 'React Native',
		icon: '/images/icons/Frameworks Front/react.svg',
		id: 5,
	},
	{ name: 'Redux', icon: '/images/icons/Frameworks Front/redux.svg', id: 6 },
]

export default filters
