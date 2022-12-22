"use client"

import Button from "../components/UI/button"
import Image from "next/image"
import profilePic from "../public/images/pictures/memoji.png"
import { useState } from "react"
import ContactForm from "../components/forms/contact/contactForm"
import Modal from "../components/UI/modal"

const Home = () => {
	const [isContactOpen, setIsContactOpen] = useState<boolean>(false)

	return (
		<>
			<section className='grid grid-cols-3 place-items-center center'>
				<div className='space-y-8 col-span-2'>
					<div className='space-y-8'>
						<div>
							<h1>Victor Deleau</h1>
							<h1>Développeur Web</h1>
						</div>

						<p>En recherche d'alternance à partir de Janvier 2023</p>
					</div>

					<div className='flex flex-row gap-4'>
						<Button
							variant='outlined'
							textColor='text-white'
							borderColor='border-white'
							onClick={() => setIsContactOpen(true)}>
							Me contacter
						</Button>
						<Button hovered>Télécharger mon CV</Button>
					</div>
				</div>
				<Image
					src={profilePic}
					alt='Profile picture'
					className='border-b-4 border-gray w-full'
				/>
				<Modal
					isOpen={isContactOpen}
					onClick={() => setIsContactOpen(false)}
					title='Me contacter'>
					<ContactForm />
				</Modal>
			</section>
		</>
	)
}
export default Home
