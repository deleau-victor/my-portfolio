"use client"

import Button from "../components/UI/button"
import Image from "next/image"
import profilePic from "../public/images/pictures/photo.png"
import { useState } from "react"
import ContactForm from "../components/forms/contact/contactForm"
import Modal from "../components/UI/modal"

const Home = () => {
	const [isContactOpen, setIsContactOpen] = useState<boolean>(false)

	return (
		<>
			<section className='home'>
				<div>
					<div>
						<div>
							<h1>
								Victor Deleau
								<br />
								Développeur Web
							</h1>
						</div>

						<p>En recherche d'alternance à partir de Janvier 2023</p>
					</div>

					<div>
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
				<Image src={profilePic} alt='Profile picture' />
				<Modal
					isOpen={isContactOpen}
					onClick={() => setIsContactOpen(false)}
					title='Me contacter'
					size='lg'>
					<ContactForm />
				</Modal>
			</section>
		</>
	)
}
export default Home
