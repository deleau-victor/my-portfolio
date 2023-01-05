interface Category {
	name: string
	icon: string
	skills: string[]
}

export interface CategoryGroup {
	[key: string]: Category[]
}

interface Categories {
	Categories: CategoryGroup[]
}

const skills: Categories = {
	Categories: [
		{
			Langages: [
				{
					name: "HTML",
					icon: "/images/icons/html.svg",
					skills: [
						"HTML sémantique",
						"Normes d'accessibilité",
						"Bonnes pratiques W3C",
					],
				},
				{
					name: "CSS",
					icon: "/images/icons/CSS.svg",
					skills: ["Responsive Design", "Flexbox & CSS Grid"],
				},
				{
					name: "JavaScript",
					icon: "/images/icons/js.svg",
					skills: [
						"Manipulation du DOM",
						"Programmation orientée objet",
						"Javascript asynchrone",
						"Jamstack",
						"Axios",
					],
				},
				{
					name: "TypeScript",
					icon: "/images/icons/typescript.svg",
					skills: ["Types et interfaces", "Classes", "Modules"],
				},
				{
					name: "PHP",
					icon: "/images/icons/php.svg",
					skills: [
						"Classes",
						"Programmation orientée objet",
						"Modèle MVC",
					],
				},
			],
		},
		{
			"Front-End": [
				{
					name: "React",
					icon: "/images/icons/react.svg",
					skills: [
						"Syntaxe JSX & TSX",
						"React Router",
						"React Context",
						"Hooks",
					],
				},
				{
					name: "Redux",
					icon: "/images/icons/redux.svg",
					skills: ["Redux Store", "Redux Slices"],
				},
				{
					name: "Next",
					icon: "/images/icons/nextjs-square.svg",
					skills: [
						"Server Side Rendering",
						"Static generation",
						"Composants SEO",
					],
				},
				{
					name: "Gastby",
					icon: "/images/icons/gastby.svg",
					skills: ["Static site generation", "Composants SEO"],
				},
			],
		},
		{
			"Back-End": [
				{
					name: "Node JS",
					icon: "/images/icons/nodejs-icon.svg",
					skills: ["Modules node", "Requêtes HTTP"],
				},
				{
					name: "Express",
					icon: "/images/icons/express.svg",
					skills: ["Routes", "Création d'API Rest"],
				},
				{
					name: "Prisma",
					icon: "/images/icons/prisma.svg",
					skills: ["Connexion aux base de données", "Requêtes SQL"],
				},
			],
		},
		{
			Mobile: [
				{
					name: "React Native",
					icon: "/images/icons/react.svg",
					skills: [""],
				},
			],
		},
		{
			UI: [
				{
					name: "Tailwind",
					icon: "/images/icons/tailwindcss-icon.svg",
					skills: [
						"Classe utilitaires",
						"Plugins",
						"Utilisation avec SASS",
						"Création de nouvelles classe",
					],
				},
				{
					name: "SASS",
					icon: "/images/icons/SASS.svg",
					skills: ["Variables, Mixins"],
				},
				{
					name: "NativeBase",
					icon: "/images/icons/nativeBase.svg",
					skills: ["Classe utilitaires pour composants natifs"],
				},
			],
		},
		{
			"Base de données": [
				{
					name: "PostgreSQL",
					icon: "/images/icons/PostgreSQL.svg",
					skills: ["Requêtes SQL", "Relations entre tables"],
				},
				{
					name: "MongoDB",
					icon: "/images/icons/mongodb.svg",
					skills: [""],
				},
			],
		},
	],
}

export default skills
