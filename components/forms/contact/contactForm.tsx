import { Field, Form, Formik } from "formik"
import React, { useEffect, useState } from "react"
import InputField from "../inputField"
import contactSchema, { InitialValues } from "./contactSchema"
import mailIcon from "../../../public/images/icons/mail.svg"
import Button from "../../UI/button"

export interface ContactValues {
	name: string
	email: string
	message: string
}

const ContactForm = () => {
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

	const handleSubmit = (values: ContactValues) => {
		fetch("/api/contact", {
			method: "POST",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		})
			.then((res) => {
				console.log("Response received")
				if (res.status === 200) {
					console.log("response suceeded")
					setIsSubmitted(true)
				} else {
					throw new Error()
				}
			})
			.catch((error) => {
				console.error(error)
				throw error
			})
		return false
	}

	return (
		<Formik
			initialValues={InitialValues}
			validationSchema={contactSchema}
			onSubmit={async (values, { resetForm }) => {
				handleSubmit(values)
				resetForm({ values: { email: "", message: "", name: "" } })
			}}>
			<Form>
				<section>
					<InputField name='name' placeholder='Nom' />
					<InputField
						name='email'
						type='email'
						placeholder='Email'
						icon={mailIcon}
					/>
					<InputField
						name='message'
						as='textarea'
						wide
						placeholder='Message'
					/>
					<Button type='submit' onClick={() => {}}>
						Envoyer
					</Button>
				</section>
			</Form>
		</Formik>
	)
}

export default ContactForm
