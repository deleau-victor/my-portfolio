import { Field, Form, Formik } from "formik"
import React, { useEffect } from "react"
import InputField from "../inputField"
import contactSchema, { InitialValues } from "./contactSchema"
import mailIcon from "../../../public/images/icons/mail.svg"

interface ContactValues {
	name: string
	email: string
	message: string
}

const ContactForm = () => {
	const handleSubmit = (values: ContactValues) => {}

	return (
		<Formik
			initialValues={InitialValues}
			validationSchema={contactSchema}
			onSubmit={(values) => handleSubmit(values)}>
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
				</section>
			</Form>
		</Formik>
	)
}

export default ContactForm
