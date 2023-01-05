export interface IProjects {
	name: string
	desktopImage?: string
	mobileImage?: string
	id: number
	langages: number[]
	liens: string[]
	link?: string
}

const projects: IProjects[] = [
	{
		name: "Portfolio",
		desktopImage: "/images/pictures/portfolio.png",
		mobileImage: "/images/pictures/portfolio-mobile.png",
		id: 1,
		langages: [1, 2, 3],
		liens: ["https://github.com/deleau-victor/my-portfolio"],
	},
	{
		name: "Application Pizzeria",
		mobileImage: "/images/pictures/pizza-app.png",
		id: 2,
		langages: [1, 4, 5, 6],
		liens: [
			"https://github.com/deleau-victor/pizza-app",
			"https://github.com/deleau-victor/pizza-back",
		],
	},
	{
		name: "Product page",
		desktopImage: "/images/pictures/product-page.png",
		id: 3,
		langages: [1, 2, 3],
		liens: ["https://github.com/deleau-victor/product-page"],
		link: "https://product-page.deleauvictor.fr/",
	},
]

export default projects
