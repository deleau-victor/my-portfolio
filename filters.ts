export interface IFilters {
	name: string
	icon: string
	id: number
}

const filters: IFilters[] = [
	{
		name: "TypeScript",
		icon: "/images/icons/typescript.svg",
		id: 1,
	},
	{ name: "React", icon: "/images/icons/react.svg", id: 2 },
	{ name: "Next", icon: "/images/icons/nextjs-square.svg", id: 3 },
	{ name: "NodeJS", icon: "/images/icons/nodejs-icon.svg", id: 4 },
	{ name: "React Native", icon: "/images/icons/react.svg", id: 5 },
	{ name: "Redux", icon: "/images/icons/redux.svg", id: 6 },
]

export default filters
