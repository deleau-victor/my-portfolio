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
					name: 'HTML',
					icon: '/images/icons/Dev Skills/html.svg',
					skills: [
						'HTML sémantique',
						"Normes d'accessibilité",
						'Bonnes pratiques W3C',
					],
				},
				{
					name: 'CSS',
					icon: '/images/icons/Dev Skills/css.svg',
					skills: ['Responsive Design', 'Flexbox & CSS Grid'],
				},
				{
					name: 'JavaScript',
					icon: '/images/icons/Dev Skills/javascript.svg',
					skills: [
						'Manipulation du DOM',
						'Programmation orientée objet',
						'Javascript asynchrone',
						'Jamstack',
						'Axios',
					],
				},
				{
					name: 'TypeScript',
					icon: '/images/icons/Dev Skills/typescript.svg',
					skills: ['Types et interfaces', 'Classes', 'Modules'],
				},
				{
					name: 'PHP',
					icon: '/images/icons/Dev Skills/php.svg',
					skills: ['Classes', 'Programmation orientée objet', 'Modèle MVC'],
				},
			],
		},
		{
			'Front-End': [
				{
					name: 'React',
					icon: '/images/icons/Frameworks Front/react.svg',
					skills: [
						'Syntaxe JSX & TSX',
						'React Router',
						'React Context',
						'Hooks',
					],
				},
				{
					name: 'Redux',
					icon: '/images/icons/Frameworks Front/redux.svg',
					skills: ['Redux Store', 'Redux Slices'],
				},
				{
					name: 'Next',
					icon: '/images/icons/Frameworks Front/nextjs.svg',
					skills: [
						'Server Side Rendering',
						'Static generation',
						'Composants SEO',
					],
				},
				{
					name: 'Gastby',
					icon: '/images/icons/Frameworks Front/gastby.svg',
					skills: ['Static site generation', 'Composants SEO'],
				},
			],
		},
		{
			'Back-End': [
				{
					name: 'Node JS',
					icon: '/images/icons/Dev Skills/node.svg',
					skills: ['Modules node', 'Requêtes HTTP'],
				},
				{
					name: 'Express',
					icon: '/images/icons/Frameworks Back/express.svg',
					skills: ['Routes', "Création d'API Rest"],
				},
				{
					name: 'NestJS',
					icon: '/images/icons/Frameworks Back/nestjs.svg',
					skills: [
						"Cration d'API rest",
						"Création d'API GraphQL",
						'Authentification par JWT',
						"Module d'authentification",
						'Modèle MVC',
					],
				},
				{
					name: 'GraphQL',
					icon: '/images/icons/Dev Skills/graphql.svg',
					skills: [
						"Cration d'API GraphQL",
						"Sécurisation d'API GraphQL pour consommation en front-end",
					],
				},
				{
					name: 'TypeORM',
					icon: '/images/icons/ORM/typeorm.svg',
					skills: ['Connexion aux base de données', 'Requêtes SQL'],
				},
				{
					name: 'Prisma',
					icon: '/images/icons/ORM/prisma.svg',
					skills: ['Connexion aux base de données', 'Requêtes SQL'],
				},
			],
		},
		{
			Mobile: [
				{
					name: 'React Native',
					icon: '/images/icons/Frameworks Front/react.svg',
					skills: ["Développement d'applications mobiles"],
				},
			],
		},
		{
			UI: [
				{
					name: 'Tailwind',
					icon: '/images/icons/UI/tailwindcss.svg',
					skills: [
						'Classe utilitaires',
						'Plugins',
						'Utilisation avec SASS',
						'Création de nouvelles classe',
					],
				},
				{
					name: 'SASS',
					icon: '/images/icons/UI/sass.svg',
					skills: ['Variables, Mixins'],
				},
				{
					name: 'NativeBase',
					icon: '/images/icons/UI/nativeBase.svg',
					skills: ['Classe utilitaires pour composants natifs'],
				},
			],
		},
		{
			'Base de données': [
				{
					name: 'PostgreSQL',
					icon: '/images/icons/Database/PostgreSQL.svg',
					skills: ['Requêtes SQL', 'Création de tables', 'Création de vues'],
				},
				{
					name: 'MongoDB',
					icon: '/images/icons/Database/mongodb.svg',
					skills: ['Création de collections', 'Requêtes NoSQL'],
				},
			],
		},
	],
}

export default skills
